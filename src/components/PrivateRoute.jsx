import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../store/authStore";

const PrivateRoute = observer(({ children, redirectTo }) => {
  const navigate = useNavigate();
  return authStore.authDetails.isLoggedIn ? (
    children
  ) : (
    <>{navigate(`${redirectTo}`)}</>
  );
});

export default PrivateRoute;
