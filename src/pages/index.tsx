import { lazy } from "react";
import { Loadable } from "../components";

export const Dashboard = Loadable(lazy(() => import("./dashboard/dashboard")));
export const Blogs = Loadable(lazy(() => import("./dashboard/blogs")));
export const Finances = Loadable(lazy(() => import("./dashboard/finances")));
export const Pitches = Loadable(lazy(() => import("./dashboard/pitches")));

export const CreateBlog = Loadable(
  lazy(() => import("./dashboard/blogs/create-blog"))
);

export const SignIn = Loadable(lazy(() => import("./auth/sign-in")));
export const SignUp = Loadable(lazy(() => import("./auth/sign-up")));

export const Posts = Loadable(lazy(() => import("./posts")));
export const Post = Loadable(lazy(() => import("./post")));
