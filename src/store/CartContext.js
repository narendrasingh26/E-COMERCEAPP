import React, { createContext, useState } from "react";
export const CartContext = createContext({
     cart:[],
     addCart:(product)=>{},
     removeCart:(productId)=>{},
     addAll:(cart)=>{},
     updateAll:(productId,quantity)=>{}

});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addAllProduct=(cart)=>{
       setCart(cart);
  }

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };


  const cartContext={
    cart:cart,
    addCart:addToCart,
     removeCart:removeFromCart,
     addAll:addAllProduct,
     updateAll:updateQuantity,



  }

  return (
    <CartContext.Provider
      value={cartContext}
    >
      {children}
    </CartContext.Provider>
  );
};  