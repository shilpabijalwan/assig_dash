import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import {
  IoHelpCircleOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoSettingsOutline,
  IoThermometerOutline,
} from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path === "/log-out") {
      localStorage.removeItem("loginDetail");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const obj = [
    {
      title: "Main Menu",
      data: [
        {
          title: "Dashboard",
          icon: <IoHomeOutline color="black" size={20} />,
          path: "/dashboard",
        },
        {
          title: "Call Record",
          icon: <IoIosCall color="black" size={20} />,
          path: "/call-record",
        },
        {
          title: "Earning",
          icon: <TiDocumentText color="black" size={20} />,
          path: "/earning",
        },
      ],
    },
    {
      title: "Manage",
      data: [
        {
          title: "Settings",
          icon: <IoSettingsOutline color="black" size={20} />,
          path: "/settings",
        },
        {
          title: "Help & Support",
          icon: <IoHelpCircleOutline color="black" size={20} />,
          path: "/help-support",
        },
        {
          title: "Log Out",
          icon: <IoLogOutOutline color="black" />,
          path: "/log-out",
        },
      ],
    },
  ];
  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <div className="side-bar-header-logo">
          <img src="logo.svg" alt="logo" />
        </div>
      </div>
      {/* main menu */}

      <div className="side-bar-menu">
        {obj.map((item, index) => (
          <div className="side-bar-menu-item-title" key={index + 1}>
            <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
              {item.title}
            </p>

            <div className="side-bar-menu-item-data">
              {item.data.map((ele, index) => (
                <div
                  className={`side-bar-menu-item-data-item ${
                    isActiveRoute(ele.path) ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleNavigation(ele.path)}
                  style={{ cursor: "pointer" }}
                >
                  <span>{ele.icon}</span>
                  <span style={{ fontSize: "14px" }}>{ele.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
