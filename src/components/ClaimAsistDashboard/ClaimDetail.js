import React from "react";
import PropTypes from "prop-types";
import DetailRow from "./DetailRow";

const tabs = [
  "Policy Details",
  "Incident Details",
  "Vehicle Details",
  "Policy Documents",
  "Supporting Documents"
];

const ClaimDetail = ({ claim }) => (
  <div className="claim-detail-expanded">
    <div className="claim-tabs">
      {tabs.map((tab, index) => (
        <button key={index} className={`tab ${index === 0 ? 'active' : ''}`}>
          {tab}
        </button>
      ))}
    </div>

    <div className="claim-details">
      <div className="detail-column">
        <h4>Policy Information</h4>
        <DetailRow label="Months as Customer:" value={claim.details?.policyInfo.monthsCustomer || "N/A"} />
        <DetailRow label="Policy Number:" value={claim.policyNumber} />
        <DetailRow label="Policy CSL:" value={claim.details?.policyInfo.policyCSL || "N/A"} />
        <DetailRow label="Policy Deductible:" value={claim.details?.policyInfo.deductible || "N/A"} />
        <DetailRow label="Annual Premium:" value={claim.details?.policyInfo.annualPremium || "N/A"} />
        <DetailRow label="Umbrella Limit:" value={claim.details?.policyInfo.umbrellaLimit || "N/A"} />
      </div>

      <div className="detail-column">
        <h4>Insured Details</h4>
        <DetailRow label="Age:" value={claim.details?.insuredDetails.age || "N/A"} />
        <DetailRow label="ZIP Code:" value={claim.details?.insuredDetails.zipCode || "N/A"} />
        <DetailRow label="Gender:" value={claim.details?.insuredDetails.gender || "N/A"} />
        <DetailRow label="Education:" value={claim.details?.insuredDetails.education || "N/A"} />
        <DetailRow label="Occupation:" value={claim.details?.insuredDetails.occupation || "N/A"} />
        <DetailRow label="Hobbies:" value={claim.details?.insuredDetails.hobbies || "N/A"} />
      </div>

      <div className="detail-column">
        <h4>Incident Information</h4>
        <DetailRow label="Date:" value={claim.details?.incidentInfo.date || "N/A"} />
        <DetailRow label="Type:" value={claim.details?.incidentInfo.type || "N/A"} />
        <DetailRow label="Severity:" value={claim.details?.incidentInfo.severity || "N/A"} />
        <DetailRow label="Location:" value={claim.details?.incidentInfo.location || "N/A"} />
        <DetailRow label="Time:" value={claim.details?.incidentInfo.time || "N/A"} />
        <DetailRow label="Vehicles Involved:" value={claim.details?.incidentInfo.vehiclesInvolved || "N/A"} />
      </div>
    </div>
  </div>
);

ClaimDetail.propTypes = {
  claim: PropTypes.object.isRequired
};

export default ClaimDetail;