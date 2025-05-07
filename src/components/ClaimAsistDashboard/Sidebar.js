import React from "react";

const menuItems = [
  { label: "Dashboard", active: true, icon: "fa-chart-pie" },
  { label: "Pending Claims", active: false, icon: "fa-clock" },
  { label: "Processed Claims", active: false, icon: "fa-check-circle" },
  { label: "Analytics", active: false, icon: "fa-chart-line" }
];

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar-menu">
      {menuItems.map((item, index) => (
        <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
          <i className={`fas ${item.icon}`}></i>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;