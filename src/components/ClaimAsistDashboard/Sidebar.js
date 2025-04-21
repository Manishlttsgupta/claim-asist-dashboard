import React from "react";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Pending Claims", active: false },
  { label: "Processed Claims", active: false },
  { label: "Analytics", active: false }
];

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar-title">ClaimAsist</h2>
    <ul className="sidebar-menu">
      {menuItems.map((item, index) => (
        <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;