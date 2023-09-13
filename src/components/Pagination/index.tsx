import React from "react";

import { getPaginationButtonNames } from "@utils";

import PageButton from "./PageButton";
import { PaginationTypes } from "./types";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<PaginationTypes> = ({
  limit,
  setPage,
  totalCount,
  currentPage,
}) => {
  const lastPage = Math.ceil(totalCount / limit);
  const isHidden = totalCount <= limit;

  const buttonNames = getPaginationButtonNames({
    limit,
    totalCount,
    currentPage,
  });

  const pageButtons = buttonNames.map((name) => (
    <PageButton
      key={name}
      name={name}
      setPage={setPage}
      currentPage={currentPage}
    />
  ));

  const handlePrevPageClick = () => {
    setPage(currentPage - 1);
  };

  const handleNextPageClick = () => {
    setPage(currentPage + 1);
  };

  return (
    <ul className={styles.content} hidden={isHidden}>
      <li>
        <button
          name="previous page"
          disabled={currentPage === 1}
          onClick={handlePrevPageClick}
          className={styles.content__button_prev_next}
        >
          Prev.
        </button>
      </li>
      {pageButtons}
      <li>
        <button
          name="next page"
          onClick={handleNextPageClick}
          disabled={currentPage === lastPage}
          className={styles.content__button_prev_next}
        >
          Next.
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
