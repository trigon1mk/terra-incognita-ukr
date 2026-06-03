import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { M as Masthead, f as formatDate, S as SiteFooter } from "./router-BlmVjKJO.js";
function UkraineMap() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[16/9] max-w-lg mx-auto opacity-20 hover:opacity-40 transition-opacity", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 1000 660",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full h-full drop-shadow-[0_0_15px_rgba(212,160,23,0.1)]",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M140 100 L250 80 L400 90 L600 70 L800 120 L950 200 L930 400 L850 550 L700 630 L550 580 L400 620 L250 600 L100 500 L50 350 L70 200 Z",
              stroke: "var(--sulfur)",
              strokeWidth: "2",
              className: "animate-pulse"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "200", cy: "150", r: "4", fill: "var(--sulfur)" }),
          /* @__PURE__ */ jsx("circle", { cx: "800", cy: "250", r: "4", fill: "var(--sulfur)" }),
          /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "4", fill: "var(--sulfur)" }),
          /* @__PURE__ */ jsx("circle", { cx: "150", cy: "400", r: "4", fill: "var(--sulfur)" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-sulfur uppercase tracking-[0.5em] animate-pulse", children: "Точки інтересу активовані" }) })
  ] });
}
const ALL_CATEGORIES = [
  "Розслідування",
  "Закриті міста УРСР",
  "Аномалії",
  "Зниклі поселення",
  "Хімія та містика",
  "Архіви та документи"
];
function BlogPosts({ title, posts }) {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p !== featured);
  const isHome = title === "ТемнаГеографія";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Masthead, {}),
    /* @__PURE__ */ jsx("div", { className: "home-hero", children: /* @__PURE__ */ jsxs("div", { className: "home-hero-inner", children: [
      /* @__PURE__ */ jsx("div", { className: "home-eyebrow", children: "Незалежне журналістське видання · Темна географія України" }),
      /* @__PURE__ */ jsx("h1", { className: "home-hero-title", children: isHome ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Місця, про які",
        " ",
        /* @__PURE__ */ jsx("em", { children: "офіційна історія" }),
        " ",
        "мовчить"
      ] }) : /* @__PURE__ */ jsx("em", { children: title }) }),
      isHome && /* @__PURE__ */ jsx("p", { className: "home-hero-desc", children: "Розслідування, архіви, свідчення. Закриті міста УРСР, зниклі поселення, аномальні зони — те, що не потрапляє до підручників." }),
      isHome && /* @__PURE__ */ jsx(UkraineMap, {})
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "featured-section", children: [
      featured && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "section-label", children: isHome ? "Головний матеріал" : `Матеріали: ${title}` }),
        /* @__PURE__ */ jsxs(Link, { to: "/posts/$slug", params: { slug: featured.slug }, className: "featured-card", children: [
          /* @__PURE__ */ jsx("div", { className: "featured-visual", children: /* @__PURE__ */ jsx("span", { className: "featured-visual-glyph", "aria-hidden": "true", children: "◈" }) }),
          /* @__PURE__ */ jsxs("div", { className: "featured-content", children: [
            /* @__PURE__ */ jsx("div", { className: "featured-tag", children: featured.categories[0] }),
            /* @__PURE__ */ jsx("h2", { className: "featured-title", children: featured.title }),
            /* @__PURE__ */ jsx("p", { className: "featured-excerpt", children: featured.summary }),
            /* @__PURE__ */ jsxs("div", { className: "featured-meta", children: [
              /* @__PURE__ */ jsx("span", { className: "featured-author", children: featured.author }),
              /* @__PURE__ */ jsx("span", { className: "featured-date", children: formatDate(featured.date) }),
              /* @__PURE__ */ jsx("span", { className: "featured-read", children: featured.readTime })
            ] })
          ] })
        ] })
      ] }),
      rest.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "section-label all-materials", children: isHome ? "Всі матеріали" : "Інші публікації" }),
        /* @__PURE__ */ jsx("div", { className: "articles-grid", children: rest.map((post) => /* @__PURE__ */ jsxs(Link, { to: "/posts/$slug", params: { slug: post.slug }, className: "article-card", children: [
          /* @__PURE__ */ jsx("div", { className: "card-category", children: post.categories[0] }),
          /* @__PURE__ */ jsx("h3", { className: "card-title", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "card-excerpt", children: post.summary }),
          /* @__PURE__ */ jsxs("div", { className: "card-footer", children: [
            /* @__PURE__ */ jsx("span", { className: "card-author", children: post.author }),
            /* @__PURE__ */ jsx("span", { className: "card-read-time", children: post.readTime })
          ] })
        ] }, post._meta.path)) })
      ] }),
      posts.length === 0 && /* @__PURE__ */ jsx("p", { className: "no-posts", children: "Матеріалів у цій рубриці поки немає." })
    ] }),
    isHome && /* @__PURE__ */ jsxs("div", { className: "categories-bar", children: [
      /* @__PURE__ */ jsx("div", { className: "section-label", children: "Рубрики" }),
      /* @__PURE__ */ jsx("div", { className: "cats-list", children: ALL_CATEGORIES.map((cat) => /* @__PURE__ */ jsx(Link, { to: "/category/$category", params: { category: cat }, className: "cat-pill", children: cat }, cat)) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  BlogPosts as B
};
