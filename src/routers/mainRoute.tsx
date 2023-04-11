import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/Layout";
import { AboutPage } from "../pages/About";
import { HomePage } from "../pages/Home";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
        errorElement: true,
      },
      {
        path: "about",
        element: <AboutPage />,
        index: true,
        errorElement: true,
      },
    ],
  },
]);
