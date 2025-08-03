import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import {
  IoHelpCircleOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginDetail");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
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
              {item.data.map((ele, index) => {
                const isActive = isActiveRoute(ele.path);
                return (
                  <div
                    className={`side-bar-menu-item-data-item ${
                      isActive ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleNavigation(ele.path)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      {/* React.cloneElement()
This is a built-in React method that allows you to clone an existing element and override or add new props.
It's used when you don’t want to re-render or recreate the icon component manually — just modify it. */}
                      {React.cloneElement(ele.icon, {
                        color: isActive ? "white" : "black",
                        size: 20
                      })}
                    </span>
                    <span style={{ fontSize: "14px" }}>{ele.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <button
          onClick={handleLogout}
          className="side-bar-menu-item-data-item"
          style={{
            marginTop: 0,
            paddingTop: 0,
            display: "flex",
            justifyContent: "start",
            color: "gray",
            outline: "none",
            border: "none",
            gap: "none",
            fontSize: "14px",
            background: "none",
            cursor: "pointer",
          }}
        >
          <IoLogOutOutline color="black" size={16} /> Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
