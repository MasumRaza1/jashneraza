import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsLength = customerReviews.length;

  const changeReview = (direction) => {
    setReviewIndex((prevIndex) => 
      direction === "next" ? (prevIndex + 1) % reviewsLength : (prevIndex - 1 + reviewsLength) % reviewsLength
    );
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More than <span className="rw-text-num">1500+ People</span>
        </p>

        <p className="rw-text-desc">Hear What Our Community Has to Say</p>

        <div className="rw-text-format">
          <span className="rw-text-quote1">“</span>
          <p className="rw-review">{customerReviews[reviewIndex].message}</p>
          <span className="rw-text-quote2">”</span>
        </div>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{customerReviews[reviewIndex].name}</p>
            <p className="rw-reviewer-place">{customerReviews[reviewIndex].location}</p>
          </div>

          <div className="rw-btns">
            <button className="rw-nav-btn" onClick={() => changeReview("prev")}>←</button>
            <button className="rw-nav-btn" onClick={() => changeReview("next")}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
