import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import SideBar from "./SideBar";
import HorizontalBar from "./HorizontalBar";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <SideBar />
      </div>

      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <HorizontalBar />
        </div>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
