import { jsx } from "react/jsx-runtime";
import { B as BlogPosts } from "./blog-posts-mysCKyWX.js";
import { a as Route } from "./router-W1L3Z6l5.js";
import "@tanstack/react-router";
import "./layout-DA_p23f6.js";
function RouteComponent() {
  const {
    category,
    posts
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsx(BlogPosts, { title: category, posts });
}
export {
  RouteComponent as component
};
