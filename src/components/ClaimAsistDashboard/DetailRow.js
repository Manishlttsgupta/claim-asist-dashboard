import React from "react";
import PropTypes from "prop-types";

const DetailRow = ({ label, value }) => (
  <div className="detail-row">
    <span className="detail-label">{label}</span>
    <span className="detail-value">{value}</span>
  </div>
);

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default DetailRow;