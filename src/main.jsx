import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CatogoriesPage from "./pages/CatogoriesPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Recipes from "./pages/Recipes.jsx";
import Recipe from "./pages/Recipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/categories/:category", element: <CatogoriesPage /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/recipe/:id", element: <Recipe /> },
      { path: "/categories/:category/recipe/:id", element: <Recipe /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
