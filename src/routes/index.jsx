import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../componets/layout/Layout";
import Catalog from "../pages/catalog/Catalog";

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
      },
    ],
  },
]);
