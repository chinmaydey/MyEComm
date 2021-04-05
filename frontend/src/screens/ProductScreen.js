import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import RatingGroup from "../components/RatingGroup";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [matchingProduct, setMatchingProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setMatchingProduct(data);
    };

    fetchData();
  }, [match]);

  return (
    <>
      <Link to="/" className="btn btn-dark mt-3 mb-3">
        Home
      </Link>
      <Row>
        <Col md={6}>
          <Image src={matchingProduct.image} alt={matchingProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{matchingProduct.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>
                <RatingGroup
                  value={matchingProduct.rating}
                  desc={matchingProduct.numReviews}
                ></RatingGroup>
              </span>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${matchingProduct.price}</ListGroup.Item>
            <ListGroup.Item>{matchingProduct.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${matchingProduct.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Availability:</Col>
                  <Col>
                    {matchingProduct.countInStock > 0
                      ? matchingProduct.countInStock + " in stock"
                      : "Out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Button
                      className="btn-block"
                      disabled={matchingProduct.countInStock === 0}
                    >
                      Add to cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
