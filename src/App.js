import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userToken } from "./redux/selectors/auth.selector";
import { fetchUser } from "./redux/slices/user.slice";

// import { Ruteo } from "./router/Router";
import Navigation from "./router/Navigation";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(userToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token]);

  return <Navigation />;
};

export default App;
