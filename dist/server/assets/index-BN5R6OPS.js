import { jsx } from "react/jsx-runtime";
import { b as allPosts } from "./router-W1L3Z6l5.js";
import { B as BlogPosts } from "./blog-posts-mysCKyWX.js";
import "@tanstack/react-router";
import "./layout-DA_p23f6.js";
function App() {
  const sorted = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return /* @__PURE__ */ jsx(BlogPosts, { title: "ТемнаГеографія", posts: sorted });
}
export {
  App as component
};
