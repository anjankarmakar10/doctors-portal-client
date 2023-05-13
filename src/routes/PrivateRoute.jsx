import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <div>Loading....</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
