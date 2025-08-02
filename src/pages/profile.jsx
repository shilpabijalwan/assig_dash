import React, { useState, useEffect } from "react";
import "./pages.css";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loginDetail = localStorage.getItem("loginDetail");
    if (loginDetail) {
      setUserData(JSON.parse(loginDetail));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Manage your account information</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h3>Personal Information</h3>
          <div className="profile-info">
            <div className="info-item">
              <label>Email:</label>
              <span>{userData.email}</span>
            </div>
            <div className="info-item">
              <label>Member Since:</label>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3>Account Settings</h3>
          <div className="settings-list">
            <button className="setting-btn">Change Password</button>
            <button className="setting-btn">Update Email</button>
            <button className="setting-btn">Privacy Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 