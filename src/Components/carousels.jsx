import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage1 from '../assets/images/CarouselImg3.jpg';
import CarouselImage2 from '../assets/images/CarouselImg2.jpg';
import CarouselImage3 from '../assets/images/CarouselImg1.jpg';

import "../assets/css/Carousel.css";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage1}
          alt="Luxury Car Rental"
        />
        <Carousel.Caption>
          <h3>Luxury Car Rental</h3>
          <p>Experience the best of comfort and style with our luxury car rentals. Perfect for special occasions and business travels.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Affordable Rates"
        />
        <Carousel.Caption>
          <h3>Affordable Rates</h3>
          <p>Rent a car at unbeatable prices. Enjoy affordable rates and excellent customer service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage3}
          alt="24/7 Support"
        />
        <Carousel.Caption>
          <h3>24/7 Support</h3>
          <p>We are here for you around the clock. Our 24/7 support ensures a hassle-free rental experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
