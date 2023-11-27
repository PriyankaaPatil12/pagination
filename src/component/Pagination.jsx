import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <li key={i}>
        <button
          onClick={() => paginate(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      </li>
    );
  }

  return <ul>{pageButtons}</ul>;
};

export default Pagination;
