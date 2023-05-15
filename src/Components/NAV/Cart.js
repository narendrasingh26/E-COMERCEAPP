import React, { useState } from "react";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveItem = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    
  };

  return (
    <div className="cart-container" >
      <button onClick={handleCartButtonClick} className="btn btn-primary mt-3">
        Cart
      </button>
      <div>
      {isCartOpen && (
        <div className="cart-content" style={{ position: "absolute", left: 0, backgroundColor:'white',marginLeft:'38rem',width:'25rem',zIndex:9999 }}>
          <h2 style={{textAlign:'center',fontFamily:'cursive'}}>Cart</h2>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ height: "5rem" }}
                    />
                    {item.title}
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cart;
