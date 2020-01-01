import React from "react";

import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="center pagenumbers">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="#"
              className={
                currentPage === number ? "page-link active" : "page-link"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
