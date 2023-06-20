import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../ui/Layout";
import { routes } from "./routes";
import {
  selectedIsAuth,
  selectedUserToken,
} from "../redux/selectors/auth.selector";
import { fetchUser } from "../redux/slices/user.slice";

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectedUserToken);
  const isAuth = useSelector(selectedIsAuth);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token]);

  return (
    <Layout>
      <Routes>
        {routes.map(({ path, element: Element, private: isPrivate }) => (
          <Route
            key={path}
            path={path}
            element={
              isPrivate && !isAuth ? (
                <Navigate to="/login" />
              ) : (
                <Element {...path} />
              )
            }
          />
        ))}
        <Route path="/*" element={<Navigate to="/register" replace />} />
      </Routes>
    </Layout>
  );
};

export default Navigation;
