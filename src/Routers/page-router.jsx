import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/login-page";
import DashboardLayout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard";
import CallRecord from "../pages/call-record";
import Earning from "../pages/earning";
import Settings from "../pages/settings";
import HelpSupport from "../pages/help-support";
import Profile from "../pages/profile";
import NotFound from "../pages/404";

// Route protection wrapper
function ProtectedRoute({ children, requireAuth = true }) {
  const loginDetail = JSON.parse(localStorage.getItem("loginDetail"));
  const isAuthenticated = !!loginDetail;

  // If the route needs auth but user is not logged in
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If the route must be accessed by non-auth users but user is logged in
  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

// main app  routers
function PageRouter() {
  const loginDetail = JSON.parse(localStorage.getItem("loginDetail"));
  const isAuthenticated = !!loginDetail;

  return (
    <Routes>
      {/* Login route - accessible only if NOT logged in */}
      <Route
        path="/login"
        element={
          <ProtectedRoute requireAuth={false}>
            <LoginPage />
          </ProtectedRoute>
        }
      />

      {/* Protected routes with existing sidebar layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute requireAuth={true}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard route - accessible only if logged in */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Call Record route */}
        <Route path="call-record" element={<CallRecord />} />

        {/* Earning route */}
        <Route path="earning" element={<Earning />} />

        {/* Settings route */}
        <Route path="settings" element={<Settings />} />

        {/* Help & Support route */}
        <Route path="help-support" element={<HelpSupport />} />

        {/* Profile route */}
        <Route path="profile" element={<Profile />} />

        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>

      {/* Catch all - 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PageRouter;
