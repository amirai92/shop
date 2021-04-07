import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const Products = (props) => {
  const { products, selectedCategory, keyword, buyItem } = props;
  const getFilteredProducts = () =>
    products
      .filter((p) => p?.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter(
        (p) => p?.category === selectedCategory || selectedCategory === "All"
      );

  let notFound = `${keyword} Cannot be found, please try agian.`;

  return (
    <Container>
      <Row className="mt-n2">
        {getFilteredProducts().length === 0 || undefined ? (
          <b>{notFound}</b>
        ) : (
          getFilteredProducts().map((product) => (
            <Col
              key={product._id}
              style={{ marginBottom: "30px" }}
              sm={{ cols: 3 }}
            >
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  style={{ objectFit: "cover" }}
                  height={200}
                  variant="top"
                  src={product?.image}
                  alt={product?.description}
                />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>{product?.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => {
                      buyItem(product?._id);
                    }}
                    variant="outline-primary"
                  >
                    Add To Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
