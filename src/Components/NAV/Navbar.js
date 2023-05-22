import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Cart from './Cart'

function CNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="sticky-top">
      
      <Navbar.Brand as={Link} to="/home">
        HOME
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/store">
            STORE
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
          Contact US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div><div style={{marginRight:'2rem',marginTop:'-.5rem'}}><Cart/></div></div>
    </Navbar>
  );
}

export default CNavbar;
