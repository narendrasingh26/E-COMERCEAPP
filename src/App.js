import React, { useEffect } from "react";
import ProductList from "./Components/ProductList";
import CNavbar from "./Components/NAV/Navbar";
import { CartProvider } from "./Components/CartContext";
import About from "./Components/Pages/About";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import ProductDetails from "./Components/Pages/ProductDetails";
import Login from "./Components/Pages/Login";
import { auth } from "./FireBase";
import { useState } from "react";

function App() {
const[userName,setUserName]=useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else setUserName('');
      console.log(user);
    });
  }, []);
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
          <Home name={userName}/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/productdetails/:id">
          <ProductDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
