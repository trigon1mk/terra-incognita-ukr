import { jsx } from "react/jsx-runtime";
import { B as BlogPosts } from "./blog-posts-9SKgTC-y.js";
import { b as Route } from "./router-BlmVjKJO.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "fuse.js";
import "marked";
import "marked-gfm-heading-id";
function RouteComponent() {
  const data = Route.useLoaderData();
  if (!data) return null;
  const {
    category,
    posts
  } = data;
  return /* @__PURE__ */ jsx(BlogPosts, { title: category, posts });
}
export {
  RouteComponent as component
};
