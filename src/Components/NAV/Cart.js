import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../store/CartContext";

const Cart = () => {
  // const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const cartCtx=useContext(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleRemoveItem = (productId) => {
    cartCtx.removeCart(productId);
  };

  const handleDecreaseQuantity = (productId, quantity) => {
    if (quantity === 1) {
      handleRemoveItem(productId);
    } else {
      const updatedQuantity = quantity - 1;
      cartCtx.updateAll(productId, updatedQuantity);
    }
  };

  const handleIncreaseQuantity = (productId, quantity) => {
    const updatedQuantity = quantity + 1;
    cartCtx.updateAll(productId, updatedQuantity);
  };
  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen); 
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); 
  };

  const totalAmount = cartCtx.cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  let total = 0;
  for (const el of cartCtx.cart) {
    total = total + el.quantity;
  }

  return (
    <div className="cart-container">
      <button
        type="button"
        className="btn btn-primary position-relative "
        style={{
          fontSize: "0.75rem",
          padding: "0.25rem 0.5rem",
          fontWeight: "bold",
        }}
        onClick={handleCartButtonClick}
      >
        CART{" "} {total > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-pill bg-dark ">
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
                {cartCtx.cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ height: "4rem", borderRadius: ".5rem", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
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