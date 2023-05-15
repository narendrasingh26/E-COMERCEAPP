import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import "./ProductList.css";

let Products = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "serif",
          backgroundColor: "gray",
        }}
      >
        <h1
          style={{
            height: "8rem",
            fontSize: "5rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          The Generics
        </h1>
      </div>
      <Container className="container-xxl">
        <p
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Music
        </p>
        <Row className="gy-5" style={{ marginLeft: "20%" }}>
          <Col md={1} lg={7}>
            <Row>
              <Col md={6} lg={6}>
                <Card
                  style={{
                    height: "",
                    width: "100%",
                    marginRight: "8000rem",
                  }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "122%",
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    Album 1
                  </h2>
                  <div className="image-zoom">
                    <Card.Img
                      variant="top"
                      src={Products[0].imageUrl}
                      alt="productimg"
                    />
                  </div>
                  <Card.Body>
                    {/* <Card.Title>{Products[0].title}</Card.Title> */}
                    <Card.Text style={{ fontWeight: "bold" }}>
                      ${Products[0].price}
                    </Card.Text>
                    <Button
                      className="btn btn-info"
                      style={{
                        marginLeft: "20%",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6}>
                <Card style={{ width: "100%", marginLeft: "46%" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "122%",
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    Album 2
                  </h2>
                  <div className="image-zoom">
                    <Card.Img
                      variant="top"
                      src={Products[1].imageUrl}
                      alt="productimg"
                    />
                  </div>
                  <Card.Body>
                    {/* <Card.Title>{Products[1].title}</Card.Title> */}
                    <Card.Text style={{ fontWeight: "bold" }}>
                      ${Products[1].price}
                    </Card.Text>
                    <Button
                      className="btn btn-info"
                      style={{
                        marginLeft: "20%",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6}>
            <Row>
              <Col md={10} lg={6}>
                <Card style={{ width: "120%" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "122%",
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    Album 3
                  </h2>
                  <div className="image-zoom">
                    <Card.Img
                      variant="top"
                      src={Products[2].imageUrl}
                      alt="productimg"
                    />
                  </div>
                  <Card.Body>
                    {/* <Card.Title>{Products[2].title}</Card.Title> */}
                    <Card.Text style={{ fontWeight: "bold" }}>
                      ${Products[2].price}
                    </Card.Text>
                    <Button
                      className="btn btn-info"
                      style={{
                        marginLeft: "20%",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6}>
                <Card style={{ marginLeft: "72%", width: "120%" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "122%",
                      fontFamily: "serif",
                      fontWeight: "bold",
                    }}
                  >
                    Album 4
                  </h2>
                  <div className="image-zoom">
                    <Card.Img
                      variant="top"
                      src={Products[3].imageUrl}
                      alt="productimg"
                    />
                  </div>
                  <Card.Body>
                    {/* <Card.Title>{Products[3].title}</Card.Title> */}
                    <Card.Text style={{ fontWeight: "bold" }}>
                      ${Products[3].price}
                    </Card.Text>
                    <Button
                      className="btn btn-info"
                      style={{
                        marginLeft: "20%",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
