import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

function LoginMiddleware() {
  const isAuth = useAuth()

  return isAuth.isAuthenticaded ? <Outlet /> : <Navigate to="/" />;
}

export default LoginMiddleware;