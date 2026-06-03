import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { marked } from "marked";
import { R as Route, a as allPosts, M as Masthead, f as formatDate, S as SiteFooter } from "./router-BlmVjKJO.js";
import { useEffect } from "react";
import "lucide-react";
import "fuse.js";
import "marked-gfm-heading-id";
function RouteComponent() {
  const post = Route.useLoaderData();
  if (!post) return null;
  const related = allPosts.filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c))).slice(0, 3);
  useEffect(() => {
    const bar = document.getElementById("reading-bar");
    if (!bar) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${scrolled / total * 100}%` : "0%";
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const initials = post.author.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "reading-bar", id: "reading-bar" }),
    /* @__PURE__ */ jsx(Masthead, {}),
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsx("div", { className: "article-hero", children: /* @__PURE__ */ jsxs("div", { className: "article-hero-inner", children: [
        /* @__PURE__ */ jsx("div", { className: "article-eyebrow", children: post.categories.join(" · ") }),
        /* @__PURE__ */ jsx("h1", { className: "article-title", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "article-summary", children: post.summary }),
        /* @__PURE__ */ jsxs("div", { className: "article-byline", children: [
          /* @__PURE__ */ jsx("div", { className: "author-avatar", "aria-hidden": "true", children: initials }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "author-info-name", children: post.author }),
            /* @__PURE__ */ jsx("div", { className: "author-info-role", children: post.authorRole })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "byline-date", children: formatDate(post.date) }),
          /* @__PURE__ */ jsxs("span", { className: "byline-readtime", children: [
            "⏱ ",
            post.readTime
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { style: {
        borderBottom: "1px solid var(--smoke)",
        background: "var(--ash)"
      }, children: /* @__PURE__ */ jsx(Link, { to: "/", className: "back-link", children: "На головну" }) }),
      /* @__PURE__ */ jsx("div", { className: "article-body", dangerouslySetInnerHTML: {
        __html: marked.parse(post.content)
      } })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("section", { className: "related-section", children: [
      /* @__PURE__ */ jsx("div", { className: "section-rule", children: /* @__PURE__ */ jsx("span", { children: "Читайте також" }) }),
      /* @__PURE__ */ jsx("div", { className: "related-grid", children: related.map((r) => /* @__PURE__ */ jsxs(Link, { to: "/posts/$slug", params: {
        slug: r.slug
      }, className: "related-card", children: [
        /* @__PURE__ */ jsx("div", { className: "related-tag", children: r.categories[0] }),
        /* @__PURE__ */ jsx("div", { className: "related-title", children: r.title }),
        /* @__PURE__ */ jsx("div", { className: "related-excerpt", children: r.summary })
      ] }, r.slug)) })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: post.title,
        description: post.summary,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole
        },
        publisher: {
          "@type": "Organization",
          name: "ТемнаГеографія"
        },
        datePublished: new Date(post.date).toISOString(),
        inLanguage: "uk",
        keywords: post.categories.join(", ")
      })
    } }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  RouteComponent as component
};
