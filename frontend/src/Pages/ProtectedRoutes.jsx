import React, { lazy } from "react";
import { map, uniqueId } from "lodash";
import { Navigate, Route } from "react-router-dom";

const otherRoutes = {
  path: "*",
  element: <Navigate to={"/"} replace={true} />,
};
// user pages
const MainPage = lazy(() => import("./MainPage/Main"));
const AdminPage = lazy(() => import("./AdminPage/Admin"));

// <-- pages

// routes -->
const userRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/teacher",
    element: <AdminPage />,
  },
  otherRoutes,
];

const protectedRoutes = () => {
  return map(userRoutes, (route) => (
    <Route
      exact
      key={uniqueId("route")}
      path={route.path}
      element={route.element}
    />
  ));
};
export default protectedRoutes;
