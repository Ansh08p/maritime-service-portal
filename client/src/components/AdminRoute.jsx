import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const { token, role, loading } = useContext(AuthContext);

  // ⏳ Wait for context to load
  if (loading) return null;

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ❌ Not admin
  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;