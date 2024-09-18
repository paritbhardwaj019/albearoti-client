import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/user-context";

export default function AuthLayout() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (user.email) {
    return <Navigate to="/dashboard/blogs" state={{ from: location }} />;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-[420px] p-4">
        <Outlet />
      </div>
    </div>
  );
}
