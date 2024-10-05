import React from 'react';
import "../styles/Pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button  className="prev-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button className="next-btn"  onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
