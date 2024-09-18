import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "./layouts";
import {
  Blogs,
  CreateBlog,
  Dashboard,
  Finances,
  Pitches,
  Post,
  Posts,
  SignIn,
  SignUp,
} from "./pages";
import { PrivateRoute } from "./components";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <PrivateRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "blogs",
              element: <Blogs />,
            },
            {
              path: "finances",
              element: <Finances />,
            },
            {
              path: "pitches",
              element: <Pitches />,
            },
            {
              path: "blogs/create",
              element: <CreateBlog />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:id",
      element: <Post />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
