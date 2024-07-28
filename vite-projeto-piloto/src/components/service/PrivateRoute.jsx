import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { isUserAuthenticate } = useAuth();
  return isUserAuthenticate() ? children : <Navigate to="/" />;
}

export default PrivateRoute;
