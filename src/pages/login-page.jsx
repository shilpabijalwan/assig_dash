import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import CustomInput from "../components/CustomInput";
import { RiLock2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Save login data into local-storage
      setTimeout(() => {
        localStorage.setItem("loginDetail", JSON.stringify(formData));
        setLoading(false);
        // Navigate to dashboard after successful login
        navigate("/dashboard");
      }, 2000);

      // Navigate to dashboard or show success  todo
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="outer">
        <div className="dot-three"></div>
        <div className="dot-four"></div>
      </div>

      <div className="outer-circle">
        <div className="dot"></div>
        <div className="dot-two"></div>
      </div>
      <div className="inner-circle">
        <div className="dot-fifth"></div>
      </div>
      {/* /logo  */}
      <section className="form-container">
        <div className="logo-section">
          <img src="logo.svg" alt="" />
        </div>
        <div className="login-form">
          <div className="login-heading">
            <h1>Welcome back</h1>
            <p>Please enter your details to sign in to your account.</p>
          </div>
          <form action="" className="form" onSubmit={handleLogin}>
            {/* custom input  */}
            <CustomInput
              value={formData.email}
              name="email"
              type={"email"}
              placeholder={"Registered Email Id"}
              icon={<TfiEmail color="#737373" size={16} />}
              setFormData={setFormData}
            />
            <CustomInput
              value={formData.password}
              name="password"
              type={"password"}
              placeholder={"Password"}
              icon={<RiLock2Line color="#737373" size={20} />}
              setFormData={setFormData}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  alignSelf: "center",
                }}
              >
                <input type="checkbox" name="" id="" />
                <p style={{ fontSize: "14px", color: "#737373" }}>
                  Remember Me
                </p>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#0e77d3",
                  border: "none",
                  background: "none",
                }}
              >
                <Link to="/">Forgot Password</Link>
              </p>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
        <footer className="footer-section">
          <p>
            Copyright@getprepped | <Link to="/">Privacy Policy</Link>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default LoginPage;
