import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "./CartContext";
import "./ProductList.css";

let Products = [
  {
    id: "a1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "b2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "c3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "d4",
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      addToCart(updatedItem);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      addToCart(newCartItem);
    }
  };

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
      <Container
        className="container-xxl"
        style={{ width: "100%", height: "2rem" }}
      >
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
        <div
          className="d-flex flex-wrap justify-content-between gy-5"
          style={{ marginLeft: "16%", marginRight: "10%" }}
        >
          {Products.map((product) => (
            <div key={product.id} className="w-48">
              <div style={{ width: "100%", height: "100%" }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    marginRight: "3rem",
                  }}
                >
                  {product.title}
                </h2>
                <div className="image-zoom">
                  <img
                    variant="top"
                    src={product.imageUrl}
                    alt="productimg"
                    style={{ height: "20%", width: "80%" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: "bold" }}>${product.price}</div>
                  <Button
                    className="btn btn-info"
                    style={{
                      marginLeft: "20%",
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
