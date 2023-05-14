import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();

  const { pathname } = useLocation();

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!user) {
    return <Navigate state={{ path: pathname }} to={"/signin"} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
