import React from "react";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/NAV/Navbar";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <ProductList />
      </CartProvider>
    </div>
  );
}

export default App;
