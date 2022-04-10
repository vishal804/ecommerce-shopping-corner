import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const PrivateRoutes = () => {
  const { authState } = useAuth();
  const location = useLocation();
  if (authState.user) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
};

export { PrivateRoutes };
