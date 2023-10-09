import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children, isLoggedIn }) => {
  let location = useLocation();
if (!isLoggedIn) {
  return <Navigate to='/' state={{ from: location }} replace />;
}
return children;
};

export const ProtectedAuthRoute = ({ element: Component, ...props }) => {
  const path = localStorage.getItem('currentPath')
  return !props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={path} replace />
  );
};
