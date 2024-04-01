import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NewProductsPage from "./pages/NewProductsPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import NavBarPage from "./pages/NavBarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/category",
    element: <NewProductsPage />,
    children: [{ path: "newproducts", element: <NewProductsPage /> }],
  },

  {
    path: "/products",
    element: <ProductsPage />,
    children: [
      {
        path: "/products/:productId",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
