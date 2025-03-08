import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

const roomDetails = {
  "deluxe-king": {
    type: "Deluxe King Room",
    size: "45 m²",
    price: 299,
    description:
      "Experience luxury in our spacious Deluxe King Room, featuring premium amenities and stunning city views.",
    amenities: [
      "King-size Signature bed",
      "55-inch Smart TV",
      "Private balcony",
      "Luxury bathroom with rain shower",
      "Nespresso coffee machine",
      "Mini bar",
      "In-room safe",
      "High-speed WiFi",
    ],
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
  },
  "premium-queen": {
    type: "Premium Queen Suite",
    size: "38 m²",
    price: 259,
    description:
      "Our Premium Queen Suite offers elegant comfort with modern amenities and a serene garden view.",
    amenities: [
      "Queen-size Signature bed",
      "48-inch Smart TV",
      "Work desk with ergonomic chair",
      "Spa-inspired bathroom",
      "Tea and coffee facilities",
      "Mini fridge",
      "In-room safe",
      "High-speed WiFi",
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
  },
  "executive-suite": {
    type: "Executive Suite",
    size: "65 m²",
    price: 459,
    description:
      "Indulge in luxury with our Executive Suite, featuring panoramic views and exclusive access to our Executive Lounge.",
    amenities: [
      "King-size Signature bed",
      "Separate living area",
      "65-inch Smart TV",
      "Executive lounge access",
      "Premium bathroom with bathtub",
      "Nespresso coffee machine",
      "Full-size mini bar",
      "High-speed WiFi",
      "24/7 butler service",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
  },
};

function RoomDetail() {
  const { roomId } = useParams();
  const room = roomDetails[roomId];
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  if (!room) {
    return <div>Room not found</div>;
  }

  const handleBooking = async (e) => {
    e.preventDefault();
    alert("Booking functionality will be implemented with a payment processor");
  };

  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const totalPrice = room.price * nights;

  return (
    <>
      <CustomNavbar />

      <Container className="py-5 mt-5">
        <Row>
          <Col lg={8}>
            <Carousel className="room-carousel mb-4">
              {room.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`${room.type} - View ${index + 1}`}
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <h1 className="mb-4">{room.type}</h1>
            <p className="lead mb-4">{room.description}</p>

            <Card className="mb-4">
              <Card.Body>
                <h3 className="mb-3">Room Details</h3>
                <Row>
                  <Col md={6}>
                    <p>
                      <strong>Size:</strong> {room.size}
                    </p>
                    <p>
                      <strong>Base Price:</strong> ${room.price}/night
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="mb-3">Amenities</h3>
                <Row>
                  {room.amenities.map((amenity, index) => (
                    <Col md={6} key={index}>
                      <p>✓ {amenity}</p>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="booking-card sticky-top" style={{ top: "2rem" }}>
              <Card.Body>
                <h3 className="mb-4">Book This Room</h3>
                <Form onSubmit={handleBooking}>
                  <Form.Group className="mb-3">
                    <Form.Label>Check-in Date</Form.Label>
                    <DatePicker
                      selected={checkIn}
                      onChange={(date) => setCheckIn(date)}
                      className="form-control"
                      minDate={new Date()}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Check-out Date</Form.Label>
                    <DatePicker
                      selected={checkOut}
                      onChange={(date) => setCheckOut(date)}
                      className="form-control"
                      minDate={checkIn}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>Adults</Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          value={adults}
                          onChange={(e) => setAdults(parseInt(e.target.value))}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Children</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          value={children}
                          onChange={(e) =>
                            setChildren(parseInt(e.target.value))
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="debit-card">Debit Card</option>
                      <option value="paypal">PayPal</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="mb-4">
                    <h4>Price Summary</h4>
                    <p className="mb-2">
                      ${room.price} x {nights} nights
                    </p>
                    <h5>Total: ${totalPrice}</h5>
                  </div>

                  <Button variant="primary" type="submit" className="w-100">
                    Book Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default RoomDetail;
