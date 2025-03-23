import { Container,Row , Col , Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/About');
    };
  return (
    <Container>
        <h2 className='text-center mt-5 text-danger'>About Us</h2>
      <Row className="align-items-center my-3">
        <Col md={6}>
        <h3 className="mb-4">WELCOME TO THE <span className="text-warning">DRIVE WAYZ</span> </h3>
          <p className="section-paragraph pd-4">
          Your trusted partner for convenient and reliable car rentals. 
          Whether you're planning a road trip, a business journey, or simply need a vehicle for daily errands,
          Drive Wayz has got you covered with a wide range of well-maintained cars to suit your needs.
          </p>
          <Button  className='bg-primary ms-1 mt-2 rounded-pill' onClick={handleButtonClick}>Read More</Button>
        </Col>
        <Col md={6}>
          <img
            src="./images/Car.png"
            alt="Cars"
            className="img-fluid section-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
