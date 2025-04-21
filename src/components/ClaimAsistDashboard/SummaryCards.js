import React from "react";
import PropTypes from "prop-types";

const cardTypes = [
  { type: "total", label: "Total Claims" },
  { type: "approved", label: "AI Approved" },
  { type: "rejected", label: "AI Rejected" },
  { type: "pending", label: "Pending Review" }
];

const SummaryCards = ({ stats }) => (
  <div className="summary-cards">
    {cardTypes.map((card) => (
      <div key={card.type} className={`summary-card ${card.type}`}>
        <div className="card-value">{stats[card.type]}</div>
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