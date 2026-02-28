import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={styles.pageBtn}
        >
          1
        </button>,
      );

      if (startPage > 2) {
        pages.push(
          <span key="dots1" className={styles.dots}>
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.pageBtn} ${
            currentPage === i ? styles.active : ""
          }`}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots2" className={styles.dots}>
            ...
          </span>,
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={styles.pageBtn}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navBtn}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        «
      </button>

      {renderPageNumbers()}

      <button
        className={styles.navBtn}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
