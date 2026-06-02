import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/novoyavorivsk-mysteries')({
  component: NovoyavorivskMysteries,
})

function NovoyavorivskMysteries() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Новояворівськ: Сірчане прокляття · ТемнаГеографія</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --pitch: #0d0c0a;
      --parchment: #f0ead8;
      --sulfur: #d4a017;
      --sulfur-dark: #9f7a0d;
      --ash: #1a1914;
      --smoke: #2e2d28;
      --fog: #7a7668;
      --blood: #8b3a3a;
    }

    html {
      scroll-behavior: smooth;
      background: var(--pitch);
      color: var(--parchment);
      font-family: 'EB Garamond', serif;
      font-size: 18px;
      line-height: 1.8;
    }

    body {
      background: var(--pitch);
      color: var(--parchment);
      margin: 0;
      padding: 0;
    }

    a {
      color: var(--sulfur);
      text-decoration: none;
      transition: color 0.3s;
    }

    a:hover {
      color: var(--parchment);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'EB Garamond', serif;
      font-weight: 700;
      color: var(--parchment);
      margin: 24px 0 16px;
    }

    h1 {
      font-size: 56px;
      line-height: 1.1;
    }

    h2 {
      font-size: 36px;
      margin-top: 40px;
    }

    p {
      margin-bottom: 18px;
    }

    .masthead {
      background: #080807;
      border-bottom: 1px solid var(--smoke);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 40px;
      max-width: 100%;
    }

    .masthead-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 3px;
      color: var(--sulfur);
      text-transform: uppercase;
    }

    .masthead-logo span {
      color: var(--parchment);
    }

    .masthead-nav {
      display: flex;
      list-style: none;
      gap: 32px;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .masthead-nav a {
      color: var(--fog);
      transition: color 0.2s;
    }

    .masthead-nav a:hover {
      color: var(--sulfur);
    }

    .masthead-date {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: var(--fog);
      letter-spacing: 1px;
    }

    .hero {
      position: relative;
      padding: 100px 40px;
      text-align: center;
      background: linear-gradient(180deg, var(--ash) 0%, var(--pitch) 100%);
      border-bottom: 1px solid var(--smoke);
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(212, 160, 23, 0.03) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-eyebrow {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sulfur-dark);
      margin-bottom: 24px;
    }

    .hero-title {
      font-size: 60px;
      line-height: 1.15;
      margin: 24px 0;
      font-weight: 700;
    }

    .hero-title em {
      color: var(--sulfur);
      font-style: italic;
    }

    .hero-subtitle {
      font-size: 20px;
      max-width: 800px;
      margin: 24px auto;
      color: #9a8f80;
      line-height: 1.7;
    }

    .hero-meta {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      margin: 32px 0;
      flex-wrap: wrap;
    }

    .author-block {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .author-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sulfur);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pitch);
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      font-weight: 700;
    }

    .author-info {
      text-align: left;
    }

    .author-name {
      font-family: 'EB Garamond', serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--parchment);
    }

    .author-role {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: var(--fog);
      letter-spacing: 1px;
    }

    .hero-tags {
      display: flex;
      gap: 12px;
    }

    .tag {
      display: inline-block;
      background: var(--smoke);
      padding: 6px 14px;
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--fog);
      border: 1px solid var(--smoke);
    }

    .tag.red {
      background: rgba(139, 26, 26, 0.1);
      border-color: var(--blood);
      color: var(--blood);
    }

    .scroll-hint {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--sulfur);
      margin-top: 24px;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(8px); }
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .article-body {
      font-size: 18px;
      line-height: 1.85;
    }

    .article-body p {
      margin-bottom: 24px;
    }

    .section-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 60px 0;
      text-align: center;
    }

    .section-rule span {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sulfur-dark);
      padding: 0 16px;
    }

    .section-rule::before,
    .section-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--smoke);
    }

    h2 {
      font-size: 32px;
      margin-top: 48px;
      margin-bottom: 24px;
    }

    .sidebar-fact {
      float: right;
      width: 280px;
      margin: 8px 0 32px 40px;
      background: #13120e;
      border-top: 2px solid var(--sulfur);
      padding: 24px;
    }

    .sidebar-fact-label {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sulfur);
      margin-bottom: 12px;
    }

    .sidebar-fact p {
      font-size: 14px;
      color: #9a9280;
      margin: 0;
      line-height: 1.65;
    }

    .doc-box {
      background: #13120e;
      border-left: 4px solid var(--sulfur-dark);
      padding: 24px;
      margin: 32px 0;
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      line-height: 1.7;
    }

    .doc-box p {
      margin-bottom: 12px;
    }

    .doc-source {
      font-size: 10px;
      color: var(--fog);
      margin-top: 12px;
      font-style: italic;
    }

    .pullquote {
      border-left: 3px solid var(--sulfur);
      padding-left: 24px;
      margin: 32px 0;
      font-style: italic;
      font-size: 20px;
      color: #a89878;
    }

    .pullquote cite {
      display: block;
      font-style: normal;
      font-size: 13px;
      color: var(--fog);
      margin-top: 8px;
      font-family: 'Space Mono', monospace;
      letter-spacing: 1px;
    }

    .witness {
      display: grid;
      grid-template-columns: 3px 1fr;
      gap: 0 24px;
      margin: 40px 0;
    }

    .witness-line {
      background: var(--blood);
    }

    .witness-name {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--blood);
      margin-bottom: 8px;
    }

    .witness-text {
      font-style: italic;
      color: #b8b0a0;
      font-size: 17px;
      margin: 0;
    }

    .location-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 48px 0;
    }

    .location-card {
      background: #13120e;
      border: 1px solid var(--smoke);
      padding: 28px;
      position: relative;
      overflow: hidden;
      transition: border-color 0.3s;
    }

    .location-card:hover {
      border-color: var(--sulfur-dark);
    }

    .location-icon {
      font-size: 28px;
      margin-bottom: 16px;
    }

    .location-name {
      font-family: 'EB Garamond', serif;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--parchment);
    }

    .location-coords {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: var(--sulfur-dark);
      letter-spacing: 1px;
      margin-bottom: 14px;
    }

    .location-desc {
      font-size: 15px;
      color: var(--fog);
      line-height: 1.6;
      margin: 0;
    }

    .map-block {
      background: #0f0e0b;
      border: 1px solid var(--smoke);
      padding: 40px;
      margin: 48px 0;
      position: relative;
      overflow: hidden;
    }

    .map-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sulfur);
      margin-bottom: 20px;
    }

    .map-svg-container {
      width: 100%;
      height: 280px;
      position: relative;
    }

    .timeline {
      position: relative;
      padding-left: 40px;
      margin: 48px 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, var(--sulfur-dark), transparent);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px;
      top: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sulfur-dark);
      border: 2px solid var(--pitch);
    }

    .timeline-year {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      color: var(--sulfur);
      letter-spacing: 2px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .timeline-event {
      font-size: 18px;
      color: var(--parchment);
      font-weight: 500;
      margin-bottom: 8px;
      font-family: 'EB Garamond', serif;
    }

    .timeline-detail {
      font-size: 15px;
      color: var(--fog);
      margin: 0;
      line-height: 1.6;
    }

    .photo-block {
      margin: 56px -80px;
      position: relative;
    }

    .photo-frame {
      background: #1a1813;
      border: 8px solid #0d0c0a;
      box-shadow: 0 0 0 1px var(--smoke), 0 20px 60px rgba(0,0,0,0.8);
      position: relative;
      overflow: hidden;
    }

    .photo-inner {
      width: 100%;
      height: 460px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .photo-svg {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
    }

    .photo-caption {
      padding: 16px 24px;
      border-top: 1px solid var(--smoke);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .photo-caption-text {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: var(--fog);
      letter-spacing: 1px;
    }

    .photo-caption-year {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px;
      color: var(--sulfur-dark);
      letter-spacing: 2px;
    }

    .evidence-row {
      display: flex;
      gap: 16px;
      margin: 40px 0;
      align-items: flex-start;
    }

    .evidence-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 72px;
      color: var(--smoke);
      line-height: 1;
      min-width: 60px;
      text-align: center;
    }

    .evidence-content h4 {
      font-family: 'EB Garamond', serif;
      font-size: 20px;
      font-weight: 700;
      color: var(--parchment);
      margin-bottom: 8px;
    }

    .evidence-content p {
      font-size: 16px;
      color: var(--fog);
      margin: 0;
      line-height: 1.65;
    }

    .warning-box {
      border: 1px solid var(--blood);
      padding: 24px 28px;
      margin: 40px 0;
      background: rgba(139,26,26,0.06);
      display: flex;
      gap: 20px;
      align-items: flex-start;
    }

    .warning-icon {
      font-size: 28px;
      line-height: 1;
      min-width: 36px;
    }

    .warning-text {
      font-size: 14px;
      color: #b88;
      margin: 0;
      font-style: italic;
      line-height: 1.7;
    }

    .classified {
      display: inline-block;
      border: 3px solid rgba(139,26,26,0.6);
      padding: 6px 16px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 18px;
      letter-spacing: 4px;
      color: rgba(180,60,60,0.7);
      transform: rotate(3deg);
      position: absolute;
      right: 20px;
      top: 20px;
    }

    .site-footer {
      background: #080807;
      border-top: 1px solid var(--smoke);
      padding: 60px 40px 40px;
      margin-top: 80px;
    }

    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
    }

    .footer-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      letter-spacing: 4px;
      color: var(--sulfur);
      margin-bottom: 16px;
    }

    .footer-brand span {
      color: var(--parchment);
    }

    .footer-desc {
      font-size: 14px;
      color: var(--fog);
      line-height: 1.7;
      max-width: 340px;
    }

    .footer-col h5 {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sulfur-dark);
      margin-bottom: 20px;
    }

    .footer-col ul {
      list-style: none;
    }

    .footer-col ul li {
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--fog);
      cursor: pointer;
      transition: color 0.2s;
    }

    .footer-col ul li:hover {
      color: var(--parchment);
    }

    .footer-bottom {
      max-width: 1100px;
      margin: 48px auto 0;
      padding-top: 24px;
      border-top: 1px solid var(--smoke);
      display: flex;
      justify-content: space-between;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: var(--fog);
      flex-wrap: wrap;
      gap: 24px;
    }

    .reading-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 2px;
      background: var(--sulfur);
      z-index: 1000;
      transition: width 0.1s;
      width: 0%;
    }

    @media (max-width: 768px) {
      .hero { padding: 60px 24px; }
      .hero-title { font-size: 42px; }
      .photo-block { margin: 40px 0; }
      .location-grid { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr; }
      .sidebar-fact { float: none; width: 100%; margin: 24px 0; }
      .masthead-nav { display: none; }
      .masthead { padding: 14px 20px; }
      .hero-meta { flex-direction: column; gap: 24px; }
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap">
</head>
<body>

<div class="reading-bar" id="readingBar"></div>

<header class="masthead">
  <a href="/" class="masthead-logo">Темна<span>Географія</span></a>
  <nav>
    <ul class="masthead-nav">
      <li><a href="/">Розслідування</a></li>
      <li><a href="/">Аномалії</a></li>
      <li><a href="/">Архів</a></li>
      <li><a href="/">Карти</a></li>
      <li><a href="/">Про нас</a></li>
    </ul>
  </nav>
  <span class="masthead-date">13 квітня 2026</span>
</header>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-eyebrow">Журналістське розслідування · Серія «Закриті міста УРСР»</div>
  <h1 class="hero-title">
    <em>Сірчане прокляття:</em><br>
    Що ховає земля<br>під Новояворівськом
  </h1>
  <p class="hero-subtitle">
    Місто виросло з нічого у 1965 році — над найбільшим покладом самородної сірки в Європі. Коли кар'єр вичерпали і затопили, деякі жителі запевняють: щось лишилося внизу. Наше розслідування тривало дев'ять місяців.
  </p>
  <div class="hero-meta">
    <div class="author-block">
      <div class="author-avatar">О</div>
      <div class="author-info">
        <div class="author-name">Оксана Вернидуб</div>
        <div class="author-role">Журналіст-розслідувач, автор книги «Закриті зони»</div>
      </div>
    </div>
    <div class="hero-tags">
      <span class="tag">Львівська обл.</span>
      <span class="tag">Розслідування</span>
      <span class="tag red">18+ Тривожний контент</span>
    </div>
  </div>
  <div class="scroll-hint">Читати далі</div>
</section>

<main class="container">
  <article class="article-body">
    <p>Перше, що відчуваєш, коли вперше в'їжджаєш до Новояворівська з боку траси М10 — запах. Не різкий, не нестерпний. Щось між сіркою та давньою деревиною, як ніби земля сама тихо дихає крізь бруківку. Місцеві давно не звертають уваги. Але я зверну.</p>

    <p>Це місто — єдиний в Україні населений пункт, зведений буквально над пеклом. Не в метафоричному сенсі: під житловими кварталами, під садками і дитячими майданчиками, на глибині від кількох метрів до кількох десятків — залягали гігантські поклади самородної сірки. Тієї самої сірки, яку середньовічна церква вважала матеріалом пекельного вогню. Тієї самої, якою тхне від диявола в народних переказах Галичини.</p>

    <p>Я провела тут дев'ять місяців. Розмовляла зі старожилами, вивчала архіви Яворівської міської ради, знайшла кількох колишніх гірників «Яворівської Сірки», які досі живуть поруч із кар'єром. І чим більше я дізнавалася — тим більше ставало незручно від того, що дізналася.</p>

    <div class="section-rule"><span>Частина I · Народження міста</span></div>

    <h2>«Янтарне»: місто, якого не мало бути</h2>

    <div class="sidebar-fact">
      <div class="sidebar-fact-label">Довідка</div>
      <p>Самородна сірка (S) — один із найдавніших відомих мінералів. У Стародавньому Єгипті використовувалась для ритуалів очищення. У середньовічній алхімії — обов'язковий компонент «чорного вогню». Яворівське родовище — одне з найбільших в Європі.</p>
    </div>

    <p>У 1958 році Рада Міністрів СРСР видала постанову «Про розширення виробництва сірки в Західній Україні». Документ сухий, канцелярський. Але за ним стоїть рішення, яке фактично знищило кілька давніх сіл і породило нове місто на їхньому місці. Яворівське та Немирівське родовища самородної сірки мали стати «сірчаною столицею» усього радянського блоку.</p>

    <p>Будівництво гірничо-хімічного комбінату «Яворівська Сірка» розпочалося у 1963 році. Робітникам потрібно було десь жити. За п'ять кілометрів від промислової зони — на пустому полі між лісом Розточчя і берегами річки Шкло — почали зводити житловий масив. Перша назва поселення, зафіксована в документах: «Сєрний». Пізніше, вочевидь, відчувши, що назва звучить надто відверто, чиновники перейменували його на «Янтарне».</p>

    <div class="doc-box">
      <p>Рішення Яворівського районного виконавчого комітету від 14 серпня 1965 р., §12: «Затвердити проект планування робітничого поселення при Яворівському гірничо-хімічному комбінаті. Поселенню присвоїти найменування "Янтарне". Чисельність населення за проектом — 25 000 осіб першої черги».</p>
      <p>Примітка: назва «Янтарне» обрана не випадково — в радянській номенклатурі вона мала асоціюватися з бурштином, «золотом Балтики», а не із сіркою. Маркетинговий прийом для залучення робочої сили з інших регіонів.</p>
      <p class="doc-source">Джерело: Державний архів Львівської обл., ф. Р-221, оп. 7, спр. 14</p>
    </div>

    <p>Тут є деталь, яку мало хто знає. До того як прийшли екскаватори, на місці майбутнього кар'єру стояло село Вільшаниця. З навколишніми хуторами — Тараньки, Зозулі, Шоти, Баджеги, Велика та Мала Толоки. Усіх мешканців переселили, переважно в сусіднє Шкло. Переселяли швидко, без особливих компенсацій. Сільський цвинтар — теж знесли. Або ні?</p>

    <div class="pullquote">
      <p>Дід говорив: «Там де ви тепер ходите асфальтом, під ним лежать наші. Ми їх залишили».</p>
      <cite>Михайло К., 74 роки, онук переселенця з Вільшаниці, бесіда листопад 2025</cite>
    </div>

    <div class="section-rule"><span>Частина II · Аномалії та дослідження</span></div>

    <h2>Місця, де земля пам'ятає</h2>

    <p>За дев'ять місяців роботи я склала карту локацій, які жителі Новояворівська пов'язують із незвичними подіями. Документи, свідчення, архівні матеріали — все збігається на однієї точці: земля під містом живе власним життям.</p>

    <div class="evidence-row">
      <div class="evidence-num">01</div>
      <div class="evidence-content">
        <h4>Документально підтверджене знесення кількох сіл без архівації цвинтарів</h4>
        <p>В архіві зафіксовано перелік знесених поселень: Вільшаниця, Тараньки, Зозулі, Шоти, Баджеги, Велика та Мала Толоки, Гноєнець, Загрушка. Жодного документа про перенесення або архівацію кладовищ у цих хуторах не виявлено. Відповідний запит до Яворівської міськради залишився без відповіді.</p>
      </div>
    </div>

    <div class="evidence-row">
      <div class="evidence-num">02</div>
      <div class="evidence-content">
        <h4>Яворівське озеро: щорічні трагедії без пояснень</h4>
        <p>Водойма, незважаючи на заборони купання, щороку забирає кілька людських життів. Офіційна причина — недотримання правил безпеки. Однак рятувальники підтверджують: тіла виявляють із великою затримкою через «нестандартну поведінку течій» на великій глибині. На дні водойми — лабіринти законсервованого обладнання.</p>
      </div>
    </div>

    <div class="evidence-row">
      <div class="evidence-num">03</div>
      <div class="evidence-content">
        <h4>Сірчані гази: хімія, яку не можна ігнорувати</h4>
        <p>H₂S (сірководень) у мікроконцентраціях є психотропним: при тривалому вдиханні може спричиняти тривогу, дезорієнтацію, галюцинації та агресивну поведінку. Дослідження показують: навіть після десятиліть після закриття кар'єрів газ може виходити через тріщини ґрунту. Офіційного моніторингу ґрунтових газів у житловій зоні Новояворівська немає.</p>
      </div>
    </div>

    <div class="pullquote">
      <p>Ніхто не будує місто над сіркою, не заплативши за це якоїсь ціни. Питання лише в тому — яку саме ціну і хто.</p>
      <cite>Оксана Вернидуб, польовий щоденник, жовтень 2025</cite>
    </div>

    <div class="section-rule"><span>Висновки</span></div>

    <h2>Що залишилось невисловленим</h2>

    <p>Це розслідування далеко не повне. Можливо, воно ніколи не буде повним — деякі двері в архівах залишатимуть закритими. Але те, що ми знайшли, варто висвітлити.</p>

    <p>Новояворівськ — не просто містом над кар'єром. Це місто над історією, яку хтось вирішив забути. Над грунтом, насиченим парами, які змінюють людей. Над озером, у якому лежать поклади золота та чорної історії.</p>

    <p>І коли жителі міста кажуть, що вони не просто живуть над сіркою — що земля іноді пробуджується, що трапляються неяснощі, які неможливо пояснити раціонально — мені думається, вони про щось говорять. Про щось дуже важливе.</p>

  </article>
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">Темна<span>Географія</span></div>
      <p class="footer-desc">
        Незалежне журналістське видання про місця, події та людей, яких офіційна історія воліє замовчати. Базуємося у Львові. Пишемо українською.
      </p>
    </div>
    <div class="footer-col">
      <h5>Рубрики</h5>
      <ul>
        <li><a href="/">Розслідування</a></li>
        <li><a href="/">Аномалії</a></li>
        <li><a href="/">Архів УРСР</a></li>
        <li><a href="/">Зниклі поселення</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Видання</h5>
      <ul>
        <li>Про нас</li>
        <li>Редакційна політика</li>
        <li>Написати до редакції</li>
        <li>Підтримати проєкт</li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© 2026 ТемнаГеографія. Усі права захищено.</span>
    <span>Trigon 2026 · Авторські права захищено</span>
    <span>Матеріали захищені авторським правом України</span>
  </div>
</footer>

<script>
  // Reading progress bar
  function updateReadingProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const scrollPercent = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
    document.getElementById('readingBar').style.width = scrollPercent + '%';
  }
  window.addEventListener('scroll', updateReadingProgress);
</script>

</body>
</html>
        `,
      }}
    />
  )
}
