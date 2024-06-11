import React from "react";
import { createBrowserRouter } from "react-router-dom";
import advisorRouter from "./advisorRoutes";

const LazyHome = React.lazy(() => import("../pages/Home"));
const LazyAdvisor = React.lazy(() => import("../pages/Advisor/Advisor"));
const LazyNotFound = React.lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHome />,
    errorElement: <LazyNotFound />,
  },
  {
    path: "/advisor",
    element: <LazyAdvisor />,
    errorElement: <LazyNotFound />,
    children: advisorRouter,
  },
  {
    path: "*",
    errorElement: <LazyNotFound />,
  },
]);

