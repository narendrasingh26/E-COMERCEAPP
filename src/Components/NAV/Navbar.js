import React from "react";
import Cart from "./Cart";


function Navbar() {
  return (
    <div>
      <nav style={{backgroundColor:'black',height:'2rem'}}>
        <div className="container-fluid">
          <div style={{marginLeft:'57rem'}}><Cart/></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
