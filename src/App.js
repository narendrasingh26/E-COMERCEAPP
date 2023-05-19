import React from "react";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/NAV/Navbar";
import { CartProvider } from "./Components/CartContext";
import About from "./Components/Pages/About";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <ProductList />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
