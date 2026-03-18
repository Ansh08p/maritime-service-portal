import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const { role } = useContext(AuthContext);

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;