import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../NavBar';
import Footer from '../Footer';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('https://665824745c36170526470d6a.mockapi.io/Cars-Data');
      setCars(response.data);
      setFilteredCars(response.data); 
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilter = () => {
    const filtered = cars.filter(car => {
      return (
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (maxPrice === '' || car.pricePerDay <= parseFloat(maxPrice))
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h1 className='text-center my-5'>All Cars</h1>
        <Form className="mb-4">
          <Row>
            <Col md={4} className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </InputGroup>
            </Col>
            <Col md={4} className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faDollarSign} />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Max price per day"
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              </InputGroup>
            </Col>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={handleFilter} className="w-100">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Filter
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          {filteredCars.map(car => (
            <Col key={car.id} lg={4} md={6} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={car.image} />
                <Card.Body className="d-flex flex-column justify-content-between">
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
                      <Button variant="primary" className="w-100">
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
      </Container>
     <Footer/>
    </>
  );
};

export default Cars;
