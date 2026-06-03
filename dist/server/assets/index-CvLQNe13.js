import { jsx } from "react/jsx-runtime";
import { a as allPosts } from "./router-BlmVjKJO.js";
import { B as BlogPosts } from "./blog-posts-9SKgTC-y.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "fuse.js";
import "marked";
import "marked-gfm-heading-id";
function App() {
  const sorted = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return /* @__PURE__ */ jsx(BlogPosts, { title: "ТемнаГеографія", posts: sorted });
}
export {
  App as component
};
