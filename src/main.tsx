import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { App1 } from "./pages/App1";
import { App2 } from "./pages/App2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "app1",
        element: <App1 />,
      },
      {
        path: "app2",
        element: <App2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
