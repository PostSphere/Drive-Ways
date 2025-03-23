import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="pt-4">
          <Col md={4} className="mb-4">
            <h5>Drive Wayz</h5>
            <p>
              From private outings to corporate needs, Drive Wayz offer premium vehicles and seamless service.
              With 24/7 support, we ensure peace of mind every mile. Trust us for exceptional rentals and unforgettable
              adventures with unbeatable prices in Pakistan.
            </p>
             <br />
             
            <a href="https://www.facebook.com" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.instagram.com" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://www.twitter.com" className="text-white"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li> 
              <li><a href="/cars" className="text-white">Cars</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Locations</h5>
            <ul className="list-unstyled">
              <li>Bahawalpur</li>
              <li>Multan</li>
              <li>Ahmad Pur East</li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faPhone} /> +92 302 8185014</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> siprag1215@gmail.com</li>

              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Office no. 37-38, 1st Floor, Uni Chowk BahawalPur, Pakistan</li>
              
            </ul>
          </Col>
        </Row>
        <Row className="py-3 border-top border-secondary">
          <Col className="text-center">
          <p className="mb-0">&copy; 2024 HiconSoft. All Rights Reserved.</p>
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
};

export default Footer;
