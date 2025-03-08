import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsGlobe } from "react-icons/bs";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <span className="brand-text success">PAUL HOTELS</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#dining">Dining</Nav.Link>
            <Nav.Link href="#meetings">Meetings & Events</Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#offers">Offers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#language" className="d-flex align-items-center">
              <BsGlobe className="me-1" /> EN
            </Nav.Link>
            <Button variant="outline-primary" className="me-2">
              Sign In
            </Button>
            <Button variant="primary">Book Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
