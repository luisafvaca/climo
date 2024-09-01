import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

function LoginMiddleware() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default LoginMiddleware;