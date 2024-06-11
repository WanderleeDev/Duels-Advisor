import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

const LazyLogin = React.lazy(() => import("../pages/Account/"));
const LazyRegister = React.lazy(() => import("../pages/Register"));
const LazyUser = React.lazy(() => import("../pages/User"));

const ValidatorRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to="/advisor/account/login" />;
};

export const accountRouter: RouteObject[] = [
  {
    index: true,
    path: "/advisor/account",
    element: <Navigate to="/advisor/account/user" />,
  },
  {
    path: "/advisor/account/user",
    element: <ValidatorRoute children={<LazyUser />} />,
  },
  {
    path: "/advisor/account/login",
    element: <LazyLogin />,
  },
  {
    path: "/advisor/account/register",
    element: <LazyRegister />,
  },
];

export default accountRouter;
