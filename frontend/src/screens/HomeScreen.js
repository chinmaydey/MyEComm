import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("api/products");
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>
              <Product product={product}></Product>
            </h3>
          </Col>
        ))}
      </Row>
      test
    </>
  );
};

export default HomeScreen;
