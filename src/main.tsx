import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { RouterPage } from "./pages/router";
import { QueryPage } from "./pages/query";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/router",
          element: <RouterPage />,
        },
        {
          path: "query",
          element: <QueryPage />,
        },
      ],
    },
  ],
  { basename: "/klausurnotizen" },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
