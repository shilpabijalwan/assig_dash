import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";
import SideBar from "./SideBar";
import HorizontalBar from "./HorizontalBar";

//Dashboard Layout with existing SideBar
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-body">
        <SideBar />
        <div className="main-content">
          <HorizontalBar />
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
