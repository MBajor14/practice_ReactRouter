import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from '../smart/Login'

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Midas </Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/login">Login</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/signup">Signup</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/stock_info">Stock Info</Link>
            </NavItem>


            {/* <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              Profile
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              Settings
            </NavItem> */}
          </Nav>
      </Navbar>
    );
  }
}
export default CustomNavbar;