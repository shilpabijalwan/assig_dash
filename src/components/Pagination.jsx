import React, { useState } from "react";

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  //   const [currentPage, setCurrentPage] = useState(1);

  const maxVisible = 5;

  const generatePages = () => {
    let pages = [];

    if (totalPages <= maxVisible) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const isStart = currentPage <= 3;
      const isEnd = currentPage >= totalPages - 2;

      if (isStart) {
        pages = [1, 2, 3, 4, 5];
      } else if (isEnd) {
        pages = [
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ];
      }
    }

    return pages;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const pages = generatePages();

  return (
    <div className="paginationContainer">
      <button onClick={handlePrev} disabled={currentPage === 1} className="btn">
        &lt;
      </button>

      {pages.map((page, idx) => (
        <span
          key={idx}
          className={`page ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </span>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <span className="dots">...</span>
      )}

      <button
        className="btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
