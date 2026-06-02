# Docker Setup для ТемнаГеографія (TanStack Start)

## Швидкий запуск

### 1. Побудувати образ

```bash
docker build -t terra-incognita:latest .
```

### 2. Запустити контейнер

```bash
docker run -p 3000:3000 terra-incognita:latest
```

Сайт буде доступний на `http://localhost:3000`

---

## Використання Docker Compose

### Запуск сервісу

```bash
docker-compose up -d
```

### Зупинити сервіс

```bash
docker-compose down
```

### Логи

```bash
docker-compose logs -f terra-incognita
```

### Перебудувати образ

```bash
docker-compose up -d --build
```

---

## Детали конфігурації

### Dockerfile (Multi-stage build)

- **Build stage**: Компіляція TanStack Start проекту з Node.js 24.16.0-alpine
  - Встановлює залежності (з опціональними пакетами для кращої сумісності)
  - Запускає `npm run build` який створює `dist/client` та `dist/server`
- **Production stage**: Мінімальний образ з лише необхідними файлами
  - Копіює білд: `dist/server` та `dist/client`
  - Копіює публічні файли та залежності
  - Запускає сервер з `dist/server/index.js`
- **Non-root user**: nodejs (для безпеки)
- **Health check**: Автоматична перевірка доступності сервісу кожні 30 секунд

### Переменні окружения

- `NODE_ENV=production` — режим production
- Порт: `3000`

### Безпека

- Образ на базі Alpine Linux (менший розмір, ~150MB)
- Non-root користувач (nodejs:1001) з правильними дозволами
- dumb-init для коректної обробки SIGTERM сигналів (graceful shutdown)
- Health check для моніторингу та автоматичного перезапуску

---

## Розмір образу

Multi-stage build мінімізує розмір:

- **Builder stage**: ~2GB (з усіма dev залежностями)
- **Production stage**: ~350-450MB (тільки runtime)

---

## Production deployment

### Push до реєстру (Docker Hub, ECR, etc)

```bash
# Побудувати образ з тегом
docker build -t your-registry/terra-incognita:v1.0.0 .

# Залогінитися та закинути в реєстр
docker login your-registry
docker push your-registry/terra-incognita:v1.0.0
```

### На Netlify

1. Налаштуйте Docker образ на Netlify (потребує Docker support на плану)
2. Використовуйте `docker-compose.yml` як основу для deployment конфігу

### На AWS ECS / Kubernetes

```bash
# Побудувати та завантажити в AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com

docker build -t terra-incognita:latest .
docker tag terra-incognita:latest <account>.dkr.ecr.us-east-1.amazonaws.com/terra-incognita:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/terra-incognita:latest
```

---

## Локальна розробка

### Запуск у режимі розробки (без Docker)

```bash
npm run dev
```

Доступний на `http://localhost:3000`

### Тестування production build локально

```bash
npm run build
node dist/server/index.js
```

### Тестування Docker образу локально

```bash
# Побудувати образ
docker build -t terra-incognita:test .

# Запустити контейнер
docker run --rm -p 3000:3000 terra-incognita:test

# Перевірити доступність
curl http://localhost:3000
```

---

## Тригерування білду в Docker

```dockerfile
# Для розробки з гарячим перезавантаженням можна використовувати:
# docker-compose -f docker-compose.dev.yml up
# (потребує окремого docker-compose.dev.yml з томами для live reload)
```

## Структура білду

Після `npm run build` створюється:

```
dist/
├── client/          # Клієнтська частина (HTML, CSS, JS, асети)
│   └── assets/      # Бандлені JS та CSS
├── server/          # SSR сервер для TanStack Start
│   └── index.js     # Entry point (запускається в Docker)
└── public/          # Статичні файли
```

TanStack Start автоматично обслуговує клієнтську частину та обробляє SSR запити.
