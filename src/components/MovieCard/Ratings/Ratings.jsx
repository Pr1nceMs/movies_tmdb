import React from "react";
import styles from "./Ratings.module.css";

const Ratings = ({ voteAverage }) => {
  // const starRatings = Math.round(voteAverage / 2);
  // const stars = "★".repeat(starRatings);
  // const emptyStars = "☆".repeat(5 - starRatings);
  // const rating = stars + emptyStars;

  // return <div className={styles.rating}>★★★★☆</div>;
  // return <div className={styles.rating}>{rating}</div>;
  const rating = Math.round((voteAverage / 2) * 2) / 2;

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <i key={star} className="fas fa-star"></i>;
        }

        if (rating >= star - 0.5) {
          return <i key={star} className="fas fa-star-half-alt"></i>;
        }

        return <i key={star} className="far fa-star"></i>;
      })}
    </div>
  );
};

export default Ratings;
