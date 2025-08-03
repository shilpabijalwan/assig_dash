import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/dashboard");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "6rem", margin: "0", color: "#e74c3c" }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "10px 0", color: "#2c3e50" }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#7f8c8d", marginBottom: "30px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={handleGoHome}
          style={{
            padding: "12px 24px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Go to Dashboard
        </button>
        <button
          onClick={handleGoBack}
          style={{
            padding: "12px 24px",
            backgroundColor: "#95a5a6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound; 