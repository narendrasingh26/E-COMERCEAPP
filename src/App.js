import React from "react";
import ProductList from "./Components/ProductList";
import CNavbar from "./Components/NAV/Navbar";
import { CartProvider } from "./Components/CartContext";
import About from "./Components/Pages/About";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import ProductDetails from "./Components/Pages/ProductDetails";


function App() {
  return (
    <div>
      <CartProvider>
        <CNavbar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <ProductList />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/productdetails/:id">
          <ProductDetails/>
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
