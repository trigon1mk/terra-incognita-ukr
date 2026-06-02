import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { M as Masthead, f as formatDate, S as SiteFooter } from "./layout-DA_p23f6.js";
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
      isHome && /* @__PURE__ */ jsx("p", { className: "home-hero-desc", children: "Розслідування, архіви, свідчення. Закриті міста УРСР, зниклі поселення, аномальні зони — те, що не потрапляє до підручників." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "featured-section", children: [
      featured && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "section-label", children: isHome ? "Головний матеріал" : `Матеріали: ${title}` }),
        /* @__PURE__ */ jsxs(Link, { to: `/posts/${featured.slug}`, className: "featured-card", children: [
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
        /* @__PURE__ */ jsx("div", { className: "section-label", style: { marginTop: 48 }, children: isHome ? "Всі матеріали" : "Інші публікації" }),
        /* @__PURE__ */ jsx("div", { className: "articles-grid", children: rest.map((post, i) => /* @__PURE__ */ jsxs(Link, { to: `/posts/${post.slug}`, className: "article-card", children: [
          /* @__PURE__ */ jsx("div", { className: "card-category", children: post.categories[0] }),
          /* @__PURE__ */ jsx("h3", { className: "card-title", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "card-excerpt", children: post.summary }),
          /* @__PURE__ */ jsxs("div", { className: "card-footer", children: [
            /* @__PURE__ */ jsx("span", { className: "card-author", children: post.author }),
            /* @__PURE__ */ jsx("span", { className: "card-read-time", children: post.readTime })
          ] })
        ] }, post._meta.path)) })
      ] }),
      posts.length === 0 && /* @__PURE__ */ jsx("p", { style: { color: "var(--fog)", fontFamily: "Space Mono, monospace", fontSize: 14 }, children: "Матеріалів у цій рубриці поки немає." })
    ] }),
    isHome && /* @__PURE__ */ jsxs("div", { className: "categories-bar", children: [
      /* @__PURE__ */ jsx("div", { className: "section-label", children: "Рубрики" }),
      /* @__PURE__ */ jsx("div", { className: "cats-list", children: ALL_CATEGORIES.map((cat) => /* @__PURE__ */ jsx(Link, { to: `/category/${cat}`, className: "cat-pill", children: cat }, cat)) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  BlogPosts as B
};
