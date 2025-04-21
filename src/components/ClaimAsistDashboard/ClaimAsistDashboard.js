import React, { useState } from "react";
import "./ClaimAsistDashboard.css";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import ClaimRow from "./ClaimRow";
import { claims } from "./data";

const ClaimAsistDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedClaimId, setExpandedClaimId] = useState(null);

  // Calculate statistics
  const stats = {
    total: claims.length,
    approved: claims.filter(c => c.status === "AI Approved").length,
    rejected: claims.filter(c => c.status === "AI Rejected").length,
    pending: claims.filter(c => c.status === "Pending Review").length
  };

  const filteredClaims = claims.filter(claim => 
    claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.policyHolder.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleClaimExpansion = (claimId) => {
    setExpandedClaimId(prev => prev === claimId ? null : claimId);
  };

  return (
    <div className="app-container">
      <TopNavbar />
      
      <div className="content-wrapper">
        <Sidebar />
        
        <div className="main-content">
          <header className="content-header">
            <h2>Claims Dashboard</h2>
          </header>

          <SummaryCards stats={stats} />
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by Claim ID, Policy Number, or Policy Holder"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="claims-section">
            <div className="claims-header-row">
              <div className="header-item"><h4>Claim ID</h4></div>
              <div className="header-item"><h4>Policy Number</h4></div>
              <div className="header-item"><h4>Policy Holder</h4></div>
              <div className="header-item"><h4>Claim Type</h4></div>
              <div className="header-item"><h4>Status</h4></div>
              <div className="header-item"><h4>Amount</h4></div>
            </div>

            <div className="claims-list">
              {filteredClaims.map((claim) => (
                <ClaimRow 
                  key={claim.id}
                  claim={claim}
                  isExpanded={expandedClaimId === claim.id}
                  toggleExpansion={toggleClaimExpansion}
                />
              ))}
            </div>
          </div>

          <footer className="dashboard-footer">
            ClaimAsist - AI Claims Adjudication System ©2025. 
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClaimAsistDashboard;