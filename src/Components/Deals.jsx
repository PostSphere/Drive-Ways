import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Deals = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('https://665824745c36170526470d6a.mockapi.io/Cars-Data');
      setCars(response.data.slice(0, 6)); // Show only the first 6 cars
      console.log(response.data); // Log the data to verify it is being fetched correctly
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
    <div >
      <Container className="my-5">
        <h1 className='text-center my-5 text-danger'>Featured Cars</h1>
        <Row>
          {cars.map((car, index) => (
            <Col key={car.id} lg={4} md={6} className="mb-4">
              <Card className="h-100"> {/* Ensure the card takes full height of the column */}
                <Card.Img variant="top" src={car.image} />
                <Card.Body className="d-flex flex-column justify-content-between"> {/* Use Bootstrap classes */}
                  <div>
                    <Card.Title>
                      <FontAwesomeIcon icon={faCar} className="me-2" />
                      {car.brand}
                    </Card.Title>
                    <Card.Text>
                      <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                      Price per day: ${car.pricePerDay}
                    </Card.Text>
                  </div>
                  <div>
                    <Link to={`/car/${car.id}`}>
                      <Button variant="primary" className="w-100"> {/* Make button full width */}
                        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          
        </Row>
        <div className="text-center mt-4">
          <Link to="/cars">
            <Button variant="secondary">Show More</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Deals;
