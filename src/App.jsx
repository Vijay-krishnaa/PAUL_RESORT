import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Button, Card, Row, Col, Badge } from "react-bootstrap";
import { BsWifi, BsClock } from "react-icons/bs";
import {
  FaParking,
  FaCoffee,
  FaCocktail,
  FaSwimmingPool,
} from "react-icons/fa";
import RoomDetail from "./RoomDetail";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

function App() {
  const rooms = [
    {
      id: "deluxe-king",
      type: "Deluxe King Room",
      size: "45 m²",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: [
        "King-size bed",
        "City view",
        "Private balcony",
        "Luxury bathroom",
      ],
    },
    {
      id: "premium-queen",
      type: "Premium Queen Suite",
      size: "38 m²",
      price: "$259",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: ["Queen-size bed", "Garden view", "Workspace", "Rain shower"],
    },
    {
      id: "executive-suite",
      type: "Executive Suite",
      size: "65 m²",
      price: "$459",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      features: [
        "King-size bed",
        "Panoramic view",
        "Living room",
        "Luxury bathroom",
        "Executive lounge access",
      ],
    },
  ];

  const amenities = [
    {
      icon: <BsWifi size={24} />,
      name: "Free High-Speed WiFi",
      description:
        "Stay connected with complimentary high-speed internet access",
    },
    {
      icon: <BsClock size={24} />,
      name: "24/7 Support",
      description: "Round-the-clock concierge and room service",
    },
    {
      icon: <FaParking size={24} />,
      name: "Secure Parking",
      description: "Complimentary valet and self-parking options",
    },
    {
      icon: <FaCoffee size={24} />,
      name: "Breakfast Included",
      description: "Daily gourmet breakfast buffet",
    },
    {
      icon: <FaCocktail size={24} />,
      name: "Premium Bar",
      description: "Exclusive rooftop bar with city views",
    },
    {
      icon: <FaSwimmingPool size={24} />,
      name: "Infinity Pool",
      description: "Temperature-controlled pool with sundeck",
    },
  ];

  const HomePage = () => (
    <>
      <CustomNavbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to PAUL HOTELS</h1>
            <p>Experience Exceptional Hospitality</p>
            <Button variant="light" size="lg" href="#rooms">
              Discover Our Rooms
            </Button>
          </div>
        </section>

        <section id="rooms" className="rooms-section">
          <Container className="py-5">
            <h2 className="section-title text-center mb-5">
              Our Luxurious Rooms
            </h2>
            <Row className="g-4">
              {rooms.map((room, index) => (
                <Col key={index} lg={4} md={6}>
                  <Card className="room-card h-100">
                    <Card.Img
                      variant="top"
                      src={room.image}
                      className="room-image"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="mb-0">{room.type}</Card.Title>
                        <Badge bg="primary">{room.size}</Badge>
                      </div>
                      <ul className="room-features">
                        {room.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="room-price">
                          From {room.price}/night
                        </span>
                        <Link to={`/room/${room.id}`}>
                          <Button variant="outline-primary">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="amenities-section bg-light">
          <Container className="py-5">
            <h2 className="section-title text-center mb-5">Hotel Amenities</h2>
            <Row className="g-4">
              {amenities.map((amenity, index) => (
                <Col key={index} md={4} sm={6}>
                  <div className="amenity-card">
                    <div className="amenity-icon">{amenity.icon}</div>
                    <h3>{amenity.name}</h3>
                    <p>{amenity.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="dining-section">
          <Container className="py-5">
            <h2 className="section-title text-center mb-5">
              Fine Dining Experience
            </h2>
            <Row className="g-4">
              <Col md={6}>
                <div className="dining-card">
                  <img
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Restaurant"
                    className="dining-image"
                  />
                  <div className="dining-content">
                    <h3>The Azure Restaurant</h3>
                    <p>Experience international cuisine with a local twist</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="dining-card">
                  <img
                    src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Lounge"
                    className="dining-image"
                  />
                  <div className="dining-content">
                    <h3>Skyline Lounge</h3>
                    <p>Enjoy craft cocktails with panoramic city views</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
