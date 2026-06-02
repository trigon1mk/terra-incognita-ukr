# ТемнаГеографія

Незалежне журналістське видання про місця, події та людей, яких офіційна історія воліє замовчати. Розслідування, аномалії, закриті міста УРСР, зниклі поселення.

## Технології

- **TanStack Start** — SSR-фреймворк на основі React
- **content-collections** — управління контентом з markdown-файлів
- **Tailwind CSS v4** — утиліти для компонування
- **marked** — рендеринг markdown у HTML
- **Netlify** — хостинг і деплой

## Як запустити локально

```bash
npm install
npm run dev
```

Сайт буде доступний на `http://localhost:3000`.

## Структура контенту

Статті знаходяться у `content/posts/*.md`. Кожна стаття має frontmatter:

```yaml
---
date: YYYY-MM-DD
title: "Назва статті"
summary: "Короткий опис"
categories:
  - Розслідування
slug: manual-slug
author: Ім'я автора
authorRole: Посада / роль
readTime: 12 хв
featured: false  # true для головного матеріалу
---
```

Тіло статті — звичайний markdown. Підтримуються HTML-блоки для спеціальних елементів:

- `<div class="doc-box">...</div>` — архівний документ
- `<div class="witness-block">...</div>` — свідчення очевидця
- `<blockquote class="pullquote">...</blockquote>` — цитата

## © Trigon 2026
