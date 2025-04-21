import React from "react";
import PropTypes from "prop-types";
import ClaimDetail from "./ClaimDetail";

const ClaimRow = ({ claim, isExpanded, toggleExpansion }) => (
  <React.Fragment>
    <div 
      className={`claim-row ${isExpanded ? 'selected' : ''}`}
      onClick={() => toggleExpansion(claim.id)}
    >
      <div className="claim-data claim-id">{claim.id}</div>
      <div className="claim-data policy-number">{claim.policyNumber}</div>
      <div className="claim-data policy-holder">{claim.policyHolder}</div>
      <div className="claim-data claim-type">{claim.claimType}</div>
      <div className={`claim-data status ${claim.status.toLowerCase().replace(' ', '-')}`}>
        {claim.status}
      </div>
      <div className="claim-data amount">{claim.amount}</div>
    </div>
    
    {isExpanded && <ClaimDetail claim={claim} />}
  </React.Fragment>
);

ClaimRow.propTypes = {
  claim: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpansion: PropTypes.func.isRequired
};

export default ClaimRow;