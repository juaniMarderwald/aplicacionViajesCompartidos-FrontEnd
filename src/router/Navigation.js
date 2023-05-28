import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../ui/Layout";
import { routes } from "./routes";

const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(({ path, element: Element, private: isPrivate }) => (
              <Route
                key={path}
                path={path}
                element={
                  isPrivate && !isAuth ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <Element {...path} />
                  )
                }
              />
            ))}
            <Route path="/*" element={<Navigate to="/register" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
