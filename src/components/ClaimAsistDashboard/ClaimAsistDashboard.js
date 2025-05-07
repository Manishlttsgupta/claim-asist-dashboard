import React, { useState, useEffect } from "react";
import "./ClaimAsistDashboard.css";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import ClaimRow from "./ClaimRow";
import { claims } from "./data";

const ClaimAsistDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedClaimId, setExpandedClaimId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const claimsPerPage = 3; // Fixed to 3 items per page

  const stats = {
    total: claims.length,
    approved: claims.filter(c => c.status === "AI Approved").length,
    rejected: claims.filter(c => c.status === "AI Rejected").length,
    pending: claims.filter(c => c.status === "Pending Review").length
  };

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const searchDeep = (obj, term) => {
    return Object.values(obj).some(value => {
      if (typeof value === 'object' && value !== null) {
        return searchDeep(value, term);
      }
      return String(value).toLowerCase().includes(term);
    });
  };

  const filteredClaims = claims.filter(claim => 
    searchTerm === '' || searchDeep(claim, searchTerm.toLowerCase())
  );

  // Get current claims for pagination
  const indexOfLastClaim = currentPage * claimsPerPage;
  const indexOfFirstClaim = indexOfLastClaim - claimsPerPage;
  const currentClaims = filteredClaims.slice(indexOfFirstClaim, indexOfLastClaim);
  const totalPages = Math.ceil(filteredClaims.length / claimsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const toggleClaimExpansion = (claimId) => {
    setExpandedClaimId(prev => prev === claimId ? null : claimId);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Generate page numbers with ellipsis logic
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);
      
      if (leftBound > 1) pageNumbers.push(1, '...');
      for (let i = leftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
      }
      if (rightBound < totalPages) pageNumbers.push('...', totalPages);
    }
    
    return pageNumbers;
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
          
          <div className="search-filter-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search across all claim details..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-button" onClick={toggleFilters}>
              <i className="fas fa-filter"> </i> 
              <h4>Filter</h4>
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel">
              {/* Add your filter components here */}
              <p>Filters will appear here</p>
            </div>
          )}

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
              {currentClaims.length > 0 ? (
                currentClaims.map((claim) => (
                  <ClaimRow 
                    key={claim.id}
                    claim={claim}
                    isExpanded={expandedClaimId === claim.id}
                    toggleExpansion={toggleClaimExpansion}
                  />
                ))
              ) : (
                <div className="no-results">
                  No claims found matching your search criteria
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredClaims.length > 0 && (
              <div className="pagination">
                <button 
                  onClick={() => paginate(1)} 
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  First
                </button>
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  Previous
                </button>
                
                {getPageNumbers().map((pageNumber, index) => (
                  pageNumber === '...' ? (
                    <span key={index} className="pagination-ellipsis">...</span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => paginate(pageNumber)}
                      className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                    >
                      {pageNumber}
                    </button>
                  )
                ))}
                
                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="pagination-button"
                >
                  Next
                </button>
                <button 
                  onClick={() => paginate(totalPages)} 
                  disabled={currentPage === totalPages}
                  className="pagination-button"
                >
                  Last
                </button>
              </div>
            )}
          </div>

          <footer className="dashboard-footer">
            <div className="footer-left">
              ClaimAsist - AI Claims Adjudication System ©2025
            </div>
            <div className="footer-right">
              <a href="/privacy">Privacy</a>
              <a href="/help">Help</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClaimAsistDashboard;