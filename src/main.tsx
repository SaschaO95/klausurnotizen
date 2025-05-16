import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { RouterPage } from "./pages/router";
import { QueryPage } from "./pages/query";
import { UseMutationPage } from "./pages/useMutation";
import { ZustandPage } from "./pages/zustand";
import { CustomHookPage } from "./pages/customhook";
import { UseRefPage } from "./pages/useref";
import { TerminalPage } from "./pages/terminal";
import { DockerComposePage } from "./pages/dockercompose";
import { DockerFilePage } from "./pages/filedocker";
import { JsonPage } from "./pages/json";
import { DrizzlePage } from "./pages/drizzle";
import { ZodPage } from "./pages/zod";

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
          path: "/query",
          element: <QueryPage />,
        },
        {
          path: "/useMutation",
          element: <UseMutationPage />,
        },
        {
          path: "/zustand",
          element: <ZustandPage />,
        },
        {
          path: "/customhook",
          element: <CustomHookPage />,
        },
        {
          path: "/useref",
          element: <UseRefPage />,
        },
        {
          path: "/terminal",
          element: <TerminalPage />,
        },
        {
          path: "/compose",
          element: <DockerComposePage />,
        },
        {
          path: "/dockerfile",
          element: <DockerFilePage />,
        },
        {
          path: "/json",
          element: <JsonPage />,
        },
        {
          path: "/drizzle",
          element: <DrizzlePage />,
        },
        {
          path: "zod",
          element: <ZodPage />,
        },
      ],
    },
  ],
  // { basename: "/klausurnotizen" },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
