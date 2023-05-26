import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userToken } from "./redux/selectors/auth.selector";
import { fetchUser } from "./redux/slices/user.slice";

import { Ruteo } from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(userToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token]);

  return <Ruteo />;
};

export default App;
