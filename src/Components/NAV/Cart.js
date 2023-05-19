import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId, quantity) => {
    if (quantity === 1) {
      handleRemoveItem(productId);
    } else {
      const updatedQuantity = quantity - 1;
      updateQuantity(productId, updatedQuantity);
    }
  };

  const handleIncreaseQuantity = (productId, quantity) => {
    const updatedQuantity = quantity + 1;
    updateQuantity(productId, updatedQuantity);
  };
  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen); 
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); 
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  let total = 0;
  for (const el of cart) {
    total = total + el.quantity;
  }

  return (
    <div className="cart-container">
      <button
        type="button"
        class="btn btn-primary position-relative "
        style={{
          fontSize: "0.75rem",
          padding: "0.25rem 0.5rem",
          fontWeight: "bold",
        }}
        onClick={handleCartButtonClick}
      >
        CART{" "} {total > 0 && (
        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-pill bg-dark ">
          {total}
        </span>)}
      </button>

      <div>
        {isCartOpen && (
          <div
            className="cart-content"
            style={{
              position: "absolute",
              left: 0,
              backgroundColor: "white",
              marginLeft: "38rem",
              width: "25rem",
              zIndex: 9999,
              borderRadius: ".5rem",
              border: "1px solid red",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "darkgray",
              }}
            >
              <h2 style={{ fontFamily: "cursive", marginLeft: "10rem" }}>
                Cart
              </h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseCart}
              ></button>
            </div>
            <table className="table mt-3">
              <thead style={{ fontFamily: "serif" }}>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        style={{ height: "4rem", borderRadius: ".5rem" }}
                      />
                      {item.title}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div>
                        <button
                          style={{
                            borderRadius: "20%",
                            backgroundColor: "gray",
                          }}
                          onClick={() =>
                            handleDecreaseQuantity(item.id, item.quantity)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          style={{
                            borderRadius: "20%",
                            backgroundColor: "gray",
                            width: "1.5rem",
                          }}
                          onClick={() =>
                            handleIncreaseQuantity(item.id, item.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                marginLeft: "16rem",
                fontWeight: "bold",
                marginTop: "3rem",
                fontFamily: "serif",
                fontSize: "1.5rem",
              }}
            >
              Total :<span>{totalAmount}</span>
            </div>
            <Button
              className="btn btn-info"
              style={{
                marginBottom: "2rem",
                marginLeft: "2rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              PURCHASE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
