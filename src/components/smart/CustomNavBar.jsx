import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Midas </Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>

            <LinkContainer to="/login">
              <NavItem eventKey={1}>
                Login
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/signup">
              <NavItem eventKey={2}>
                Signup
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/stock_info">
              <NavItem eventKey={3}>
                Stock Info
              </NavItem>
            </LinkContainer>

          </Nav>
      </Navbar>
    );
  }
}
export default CustomNavbar;