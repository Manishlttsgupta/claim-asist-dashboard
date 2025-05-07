import React from "react";
import PropTypes from "prop-types";

const cardTypes = [
  { type: "total", label: "Total Claims", colorClass: "" },
  { type: "approved", label: "AI Approved", colorClass: "approved" },
  { type: "rejected", label: "AI Rejected", colorClass: "rejected" },
  { type: "pending", label: "Pending Review", colorClass: "pending" }
];

const SummaryCards = ({ stats }) => (
  <div className="summary-cards">
    {cardTypes.map((card) => (
      <div key={card.type} className="summary-card">
        <div className={`card-value ${card.colorClass}`}>{stats[card.type]}</div>
        <div className="card-label">{card.label}</div>
      </div>
    ))}
  </div>
);

SummaryCards.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    approved: PropTypes.number.isRequired,
    rejected: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired
  }).isRequired
};

export default SummaryCards;