import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../componets/layout/Layout";
import Catalog from "../pages/catalog/Catalog";
import Sidebar from "../componets/sidebar/Sidebar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          {
            path: "sidebar", // ✔ to'g'ri
            element: <Sidebar />,
          },
        ],
      },
    ],
  },
]);
