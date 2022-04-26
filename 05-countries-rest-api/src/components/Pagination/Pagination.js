import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

import StateContext from "../../state/state-context";
import { useContext } from "react";

import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const ctx = useContext(StateContext);

  const curPage = ctx.search.search.page;
  const numPages = Math.ceil(
    ctx.search.search.results.length / ctx.search.search.resultsPerPage
  );

  const nextButtonHandler = () => {
    ctx.setPaginationPageHandler(curPage + 1);
  };

  const prevButtonHandler = () => {
    ctx.setPaginationPageHandler(curPage - 1);
  };

  // Page 1, and there are other pages
  if (curPage === 1 && numPages > 1) {
    return (
      <div className={styles.pagination}>
        <button
          onClick={nextButtonHandler}
          className={`${styles["pagination__btn--next"]} ${styles["btn--inline"]}`}
        >
          <span>Page {curPage + 1}</span>
          <ArrowRightIcon className={`${styles["search__icon"]}`} />
        </button>
      </div>
    );
  }

  // Last page
  if (curPage === numPages && numPages > 1) {
    return (
      <div className={styles.pagination}>
        <button
          onClick={prevButtonHandler}
          className={`${styles["pagination__btn--prev"]} ${styles["btn--inline"]}`}
        >
          <ArrowLeftIcon className={`${styles["search__icon"]}`} />
          <span>Page {curPage - 1}</span>
        </button>
      </div>
    );
  }

  // Other page
  if (curPage < numPages) {
    return (
      <div className={styles.pagination}>
        <button
          onClick={prevButtonHandler}
          className={`${styles["pagination__btn--prev"]} ${styles["btn--inline"]}`}
        >
          <ArrowLeftIcon className={`${styles["search__icon"]}`} />
          <span>Page {curPage - 1}</span>
        </button>
        <button
          onClick={nextButtonHandler}
          className={`${styles["pagination__btn--next"]} ${styles["btn--inline"]}`}
        >
          <span>Page {curPage + 1}</span>
          <ArrowRightIcon className={`${styles["search__icon"]}`} />
        </button>
      </div>
    );
  }

  // Page 1, and there are NO other pages
  return "";
};

export default Pagination;
