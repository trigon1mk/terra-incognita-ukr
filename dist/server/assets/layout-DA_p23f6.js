import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const NAV_LINKS = [
  { href: "/category/Розслідування", label: "Розслідування" },
  { href: "/category/Аномалії", label: "Аномалії" },
  { href: "/category/Закриті міста УРСР", label: "Архів УРСР" },
  { href: "/category/Зниклі поселення", label: "Зниклі поселення" },
  { href: "/category/Хімія та містика", label: "Хімія" }
];
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" });
}
function Masthead() {
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxs("header", { className: "masthead", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "masthead-logo", children: [
      "Темна",
      /* @__PURE__ */ jsx("span", { children: "Географія" })
    ] }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "masthead-nav", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.href, children: l.label }) }, l.href)) }) }),
    /* @__PURE__ */ jsx("span", { className: "masthead-date", children: today })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-inner", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
          "Темна",
          /* @__PURE__ */ jsx("span", { children: "Географія" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "footer-desc", children: "Незалежне журналістське видання про місця, події та людей, яких офіційна історія воліє замовчати. Базуємося у Львові. Пишемо українською." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h5", { children: "Рубрики" }),
        /* @__PURE__ */ jsx("ul", { children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.href, children: l.label }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h5", { children: "Видання" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Про нас" }),
          /* @__PURE__ */ jsx("li", { children: "Редакційна політика" }),
          /* @__PURE__ */ jsx("li", { children: "Написати до редакції" }),
          /* @__PURE__ */ jsx("li", { children: "Підтримати проєкт" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 ТемнаГеографія. Усі права захищено." }),
      /* @__PURE__ */ jsx("span", { className: "footer-copyright-trigon", children: "Trigon 2026 · Авторські права захищено" }),
      /* @__PURE__ */ jsx("span", { children: "Матеріали захищені авторським правом України" })
    ] })
  ] });
}
export {
  Masthead as M,
  SiteFooter as S,
  formatDate as f
};
