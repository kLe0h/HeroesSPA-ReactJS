import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "./heroes/pages/MarvelPage";
import { DcPage } from "./heroes/pages/DcPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { AppRouter } from "./router/AppRouter";

// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to="/marvel" replace />
      },
      {
        path: "/",
        element: <MarvelPage />
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
