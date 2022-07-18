import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const PrivateRoutes = () => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location.pathname }} replace />
  );
};

export { PrivateRoutes };
