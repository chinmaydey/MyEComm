import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingGroup from "./RatingGroup";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Header as="h5">
          <Link to={`/product/${product._id}`}>
            <small> {product.name}</small>
          </Link>
        </Card.Header>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"></Card.Img>
          </Link>
          <Card.Text as="h5">
            <small>
              <RatingGroup value={product.rating}></RatingGroup>
            </small>
          </Card.Text>
          <Card.Text as="h5">{product.numReviews} reviews</Card.Text>
          <Card.Text as="h5">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
