import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";

function Topbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="title">Dashboard</div>
        <div className="items">
          <div className="item">
            <SearchIcon className="icon" />
          </div>
          <div className="item">
            <img
              className="imgus"
              alt="United States"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            />
          </div>
          <div className="item">
            <DashboardSharpIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <SettingsIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
