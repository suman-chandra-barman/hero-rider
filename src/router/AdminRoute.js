import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoaderPage from "../components/LoaderPage";
import { AuthContext } from "../contexts/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoaderPage />;
  }

  if (user?.uid && user?.email === "admin@admin.com") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
