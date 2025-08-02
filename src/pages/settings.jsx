import React, { useState } from "react";
import "./pages.css";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "English",
    timezone: "UTC"
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Customize your application preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-card">
          <h3>Notifications</h3>
          <div className="setting-item">
            <label>Enable Notifications</label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange("notifications", e.target.checked)}
            />
          </div>
        </div>

        <div className="settings-card">
          <h3>Appearance</h3>
          <div className="setting-item">
            <label>Dark Mode</label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleSettingChange("darkMode", e.target.checked)}
            />
          </div>
        </div>

        <div className="settings-card">
          <h3>Language & Region</h3>
          <div className="setting-item">
            <label>Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange("language", e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleSettingChange("timezone", e.target.value)}
            >
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <h3>Data & Privacy</h3>
          <div className="setting-item">
            <button className="danger-btn">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 