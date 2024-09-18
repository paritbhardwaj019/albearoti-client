import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/user-context";

export const PrivateRoute = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user.email) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
