import React from "react";

const Rating = ({ value, ratingPos }) => {
  const starClass =
    value >= ratingPos
      ? "fas fa-star"
      : value >= ratingPos - 0.5
      ? "fas fa-star-half-alt"
      : "far fa-star";
  return (
    <>
      <i className={starClass}></i>
    </>
  );
};

export default Rating;
