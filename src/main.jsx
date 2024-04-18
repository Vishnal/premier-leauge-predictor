import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  Root,
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { ErrorPage } from "./error-page";
import Index from "./routes/index";
import SignUp from "./routes/sign-up";
import Login from "./routes/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          { path: "signup", element: <SignUp /> },
          { path: "login", element: <Login /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
