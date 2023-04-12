import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, PRODUCTS_ROUTE } from "../utils/consts";

function AppRouter() {
  const { authStore } = useContext(Context);

  return (
    <Routes>
      {authStore.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route
        path="*"
        element={
          authStore.isAuth ? (
            <Navigate to={PRODUCTS_ROUTE} />
          ) : (
            <Navigate to={LOGIN_ROUTE} />
          )
        }
      />
    </Routes>
  );
}

export default observer(AppRouter);
