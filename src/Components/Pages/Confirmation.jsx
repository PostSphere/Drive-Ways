import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Header from '../NavBar';
import Footer from '../Footer';


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


const BookingConfirmation = () => {
  const query = useQuery();
  const customerName = query.get('name');

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title className="mb-4">
                  <h2 className="text-primary">Booking Confirmation</h2>
                </Card.Title>
                <Card.Text className="mb-3">
                  Dear <strong>{customerName || '[Customer Name]'}</strong>, Assalam o Alaikum
                </Card.Text>
                <Card.Text className="mb-3">
                  Thank you very much for your booking request. We will get back to you shortly.
                </Card.Text>
                <Card.Text className="mb-3">
                  For urgent questions call us: <a href="tel:+923028185014" className="text-info">+92 3028185014</a>
                </Card.Text>
                <Card.Text className="mt-4">
                  Regards,<br />
                  <strong>Booking Team</strong><br />
                  <span className="text-muted">Drive Wayz</span><br />
                  <a href="https://www.drivewayz.com" className="text-info">DriveWayz.com</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BookingConfirmation;
