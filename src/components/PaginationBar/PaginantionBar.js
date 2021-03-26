import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Container } from "./styles";

const PaginationBar = ({ currentPage, paginate, lastPage }) => {
  const prev = (pageNumber) => {
    if (pageNumber > 1) {
      const idxContainer = document.getElementById("pagination-container");
      const idxBtns = idxContainer.getElementsByClassName("idx-btn");
      for (let i = 0; i < idxBtns.length; i++) {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        const idxBtn = document.getElementById(`pagNumber-${pageNumber-1}`);
        idxBtn.className += " active";
      }
      paginate(pageNumber - 1);
    }
  };

  const next = (pageNumber) => {
    if (pageNumber < lastPage) {
      const idxContainer = document.getElementById("pagination-container");
      const idxBtns = idxContainer.getElementsByClassName("idx-btn");
      for (let i = 0; i < idxBtns.length; i++) {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        const idxBtn = document.getElementById(`pagNumber-${pageNumber+1}`);
        idxBtn.className += " active";
      }
      paginate(pageNumber + 1);
    }
  };

  const calcIndex = () => {
    let arr = [];
    for (let i = 0; i < lastPage; i++) {
      arr.push(i + 1);
    }
    return arr;
  };
  const pagIndex = calcIndex();

  return (
    <Container>
      <div id="pagination-container" className="info">
        <div className="arrow" onClick={() => prev(currentPage)}>
          <FiChevronLeft />
        </div>
        <div className="main">
          {pagIndex.map((it, index) => {
            return (
              <div
                id={`pagNumber-${index + 1}`}
                className="idx-btn"
                onClick={() => paginate(it)}
              >
                {it}
              </div>
            );
          })}
        </div>
        <div className="arrow" onClick={() => next(currentPage)}>
          <FiChevronRight />
        </div>
      </div>
    </Container>
  );
};

export default PaginationBar;
