import React from "react";
import PropTypes from "prop-types";

const TopNavbar = ({ notifications = 3, adminName = "Admin User" }) => (
  <div className="top-navbar">
    <div className="app-title">
      <h1>AI Claims Adjudication</h1>
    </div>
    <div className="nav-right">
      <div className="notifications">
        <span className="notification-icon">🔔</span>
        <span className="notification-count">{notifications}</span>
      </div>
      <div className="admin-profile">
        <span className="admin-name">{adminName}</span>
        <div className="admin-avatar">
          {adminName.split(" ").map(n => n[0]).join("")}
        </div>
      </div>
    </div>
  </div>
);

TopNavbar.propTypes = {
  notifications: PropTypes.number,
  adminName: PropTypes.string
};

export default TopNavbar;