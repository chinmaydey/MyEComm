import React from "react";
import Rating from "./Rating";

const RatingGroup = ({ value, desc }) => {
  return (
    <>
      <Rating value={value} ratingPos={1} />
      <Rating value={value} ratingPos={2} />
      <Rating value={value} ratingPos={3} />
      <Rating value={value} ratingPos={4} />
      <Rating value={value} ratingPos={5} />
      <span>{desc} reviews</span>
    </>
  );
};

export default RatingGroup;
