import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage.jsx";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <div className="light">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
