import React from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header className="my-4">
      <Navbar expand="lg">
        <Container>
          <img
            src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/logo.svg"
            alt=""
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home" className="me-3">
                  Home
                </Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="About Me"
                className="me-3"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Portfolio Style 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Portfolio Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Category"
                className="me-3"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Travel Tips
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Lifestyle
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Healthy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Interviews
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Single Post"
                className="me-3"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Blog Single 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Blog Single 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Blog Single 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Pages"
                className="me-3"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Search Result
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/contact">
                <Nav.Link href="#link">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <a href="/" className="btn">
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </a>
              <LinkContainer to="/login">
                <Button variant="info text-white px-3">
                  <span>
                    <i className="fa-solid fa-user-lock"></i>
                  </span>
                </Button>
              </LinkContainer>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
