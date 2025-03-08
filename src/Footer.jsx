import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGlobe, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-white mt-5">
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <h5>About Us</h5>
          <p>
            PAUL HOTELS is a luxury hotel offering world-class amenities and
            exceptional hospitality. Experience the perfect blend of comfort and
            elegance.
          </p>
        </Col>
        <Col md={4}>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li>
              <Link to="#rooms" className="text-white text-decoration-none">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="#dining" className="text-white text-decoration-none">
                Dining
              </Link>
            </li>
            <li>
              <Link to="#meetings" className="text-white text-decoration-none">
                Meetings & Events
              </Link>
            </li>
            <li>
              <Link
                to="#experiences"
                className="text-white text-decoration-none"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link to="#offers" className="text-white text-decoration-none">
                Offers
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>
              <BsTelephone className="me-2" /> +91 7091084906
            </li>
            <li>
              <BsGlobe className="me-2" /> www.paulhotels.com
            </li>
            <li>
              Address - 34, First Floor, Pacific Height Building, Aambagan,
              Sakchi, Jamshedpur-831001
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} PAUL HOTELS. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
