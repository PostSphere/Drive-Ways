import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, ListGroup, Button, Form, Modal, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendarAlt, faIdCard, faDollarSign, faMapMarkerAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import Header from '../NavBar';
import Footer from '../Footer';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    bookingDate: '',
    returnDate: '',
    paymentMethod: 'Cash on Delivery'
  });
  const [review, setReview] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCar();
  }, [id]);

  const fetchCar = async () => {
    try {
      const response = await axios.get(`https://665824745c36170526470d6a.mockapi.io/Cars-Data/${id}`);
      setCar(response.data);
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const submitBooking = async () => {
    const { fullName, email, phone, location, bookingDate, returnDate } = bookingData;
  
    if (!fullName || !email || !phone || !location || !bookingDate || !returnDate) {
      setErrorMessage('All fields are required');
      return;
    }
  
    try {
      await axios.post('https://665c0da73e4ac90a04d88d6a.mockapi.io/bookings', { ...bookingData, carId: id });
      setShowModal(false);
      setErrorMessage('');
      navigate(`/booking-confirmation?name=${encodeURIComponent(fullName)}`);
    } catch (error) {
      console.error('Error booking the car:', error);
      setErrorMessage('Error booking the car. Please try again later.');
    }
  };
  

  const submitReview = async () => {
    try {
      await axios.post('https://665824745c36170526470d6a.mockapi.io/reviews', review);
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting the review:', error);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        {car ? (
          <>
            <Row>
              <Col md={6}>
                <Image src={car.image} fluid rounded />
              </Col>
              <Col md={6}>
                <h2 className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faCar} className="me-2" />
                  {car.brand} - {car.model}
                </h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                    Year: {car.year}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faIdCard} className="me-2" />
                    License Plate: {car.licensePlate}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                    Price per day: ${car.pricePerDay}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCogs} className="me-2" />
                    Status: {car.status}
                  </ListGroup.Item>
                  {car.status === 'rented' && (
                    <>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                        Booking Date: {car.bookingDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                        Return Date: {car.returnDate}
                      </ListGroup.Item>
                    </>
                  )}
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    Location ID: {car.locationId}
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="mt-3" onClick={() => setShowModal(true)} disabled={car.status === 'rented'}>
                  {car.status === 'rented' ? 'Car Rented' : 'Book Now'}
                </Button>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={12} className="text-center">
                <h3 className="fw-bold text-primary my-5">Share Your Experience</h3>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <div className="flex-grow-1 border-top border-primary"></div>

                  <img src="https://w7.pngwing.com/pngs/483/632/png-transparent-used-car-%C5%A0koda-auto-vehicle-computer-icons-car-cdr-rectangle-logo.png" height={50}  width={70} alt="Car Icon" className="mx-3" />


                  <div className="flex-grow-1 border-top border-primary"></div>
                </div>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          onChange={handleReviewChange}
                          required
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={handleReviewChange}
                          required
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      onChange={handleReviewChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Button variant="danger" onClick={submitReview} className="fw-bold px-4 py-2">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Book This Car</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      placeholder="Enter location"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="bookingDate">
                    <Form.Label>Booking Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="bookingDate"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="returnDate">
                    <Form.Label>Return Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="returnDate"
                      onChange={handleBookingChange}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                  {errorMessage && (
                    <Alert variant="danger">
                      {errorMessage}
                    </Alert>
                  )}
                  <Alert variant="info">
                    Payment Method: Cash on Delivery
                  </Alert>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={submitBooking}>
                  Submit Booking
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <p>Loading car details...</p>
        )}
      </Container>
      <Footer/>
    </>
  );
};

export default CarDetail;
