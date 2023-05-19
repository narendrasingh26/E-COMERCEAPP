import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <div>
      <nav style={{ backgroundColor: "black", height: "3rem" }}>
        <div className="d-flex  flex-wrap">
          <Link
            to="/home"
            style={{
              marginLeft: "23rem",
              marginTop: ".5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            HOME
          </Link>
          <Link
            to="/store"
            style={{
              marginLeft: "4rem",
              marginTop: ".5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            STORE
          </Link>
          <Link
            to="/about"
            style={{
              marginLeft: "4rem",
              marginTop: ".5rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            ABOUT
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
