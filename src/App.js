import React, { } from "react";
import ProductList from "./Components/ProductList";
import CNavbar from "./Components/NAV/Navbar";
import { CartProvider } from "./Components/CartContext";
import About from "./Components/Pages/About";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import ProductDetails from "./Components/Pages/ProductDetails";
import Login from "./Components/Pages/Login";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

function App() {
  const authCtx=useContext(AuthContext);
  return (
    <div>
      <CartProvider>
        <CNavbar />
        <Route path="/about">
          <About />
        </Route>
        {authCtx.isLoggedIn&&(<Route path="/store">
          <ProductList />
        </Route>)}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/productdetails/:id">
          <ProductDetails />
        </Route>
        {!authCtx.isLoggedIn&&(<Route path="/login">
          <Login />
        </Route>)}
      </CartProvider>
    </div>
  );
}

export default App;
