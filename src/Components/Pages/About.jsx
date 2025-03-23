import React from "react";
import { Image, Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../NavBar";
import "../../assets/css/About.css";
import Footer from "../Footer";

const About = () => {
  const members = [
    {
      name: "Saqib Ali",
      description: "Expert in car maintenance and customer service.",
      image: "https://carfromjapan.com/wp-content/uploads/2016/01/Buying-A-New-Car.jpg",
      social: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
      }
    },
    {
      name: "Waqas Hakim",
      description: "Specialist in rental management and customer care.",
      image: "https://mykaarma.com/wp-content/uploads/2019/07/successful-businessman-in-a-car-dealership-sale-RQSTWMG-1568x1045.jpg",
      social: {
        facebook: "https://facebook.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith"
      }
    },

    {
      name: "Waqas Hakim",
      description: "Specialist in rental management and customer care.",
      image: "https://mykaarma.com/wp-content/uploads/2019/07/successful-businessman-in-a-car-dealership-sale-RQSTWMG-1568x1045.jpg",
      social: {
        facebook: "https://facebook.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith"
      }
    },
    // Add more members as needed
  ];

  return (
    <>
      <Header />
      <div className="About-Image">
        <h1>About Us</h1>
      </div>

      <Container>
        <Row className="align-items-center ">
          <Col className="mt-4 " md={6}>
            <h3 className="mb-4">WELCOME TO THE <span className="text-warning">DRIVE WAYZ</span></h3>
            <p className="section-paragraph">
              Your trusted partner for convenient and reliable car rentals.
              Whether you're planning a road trip, a business journey, or simply
              need a vehicle for daily errands, Drive Wayz has got you covered
              with a wide range of well-maintained cars to suit your needs.
            </p>
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

      <div className="More_About">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="./images/Aboutpic-2.jpeg"
                alt="Cars"
                className="img-fluid More_About_Img"
              />
            </Col>
            <Col className="mt-4 " md={6}>
              <h3 className="mb-2 Abut_us">WHAT DO YOU KNOW ABOUT US</h3>
              <p className="section-paragraph-2">
                At Drive Wayz Solutions, our top priority is your safety.
                We understand that when you choose a car rental service, you're not just looking for convenience
                and affordability; you also want peace of mind knowing that your journey will be safe and secure.
              </p >
              <p className="section-paragraph-2">Our commitment to safety extends beyond just our vehicles.
                We invest in training our staff and drivers to adhere to the
                best practices in road safety and customer service. </p>

              <div className="d-flex mt-4 gap-3 align-items-center">
                <span className="fs-4"><i className="bi bi-envelope-fill text-primary"></i></span>
                <div>
                  <h6 className="section-paragraph_h6 ">Need Any help?</h6>
                  <p>Siprag1215@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="text-center my-5">
        <h2>Our Members</h2>
    
      </div>

      <Container className="mt-4">
        <Row>
          {members.map((member, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">

              <Card className="h-100">
                <Card.Img variant="top" src={member.image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.description}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-around mt-4">
                    <Button variant="outline-primary" href={member.social.facebook} target="_blank">
                      <i className="bi bi-facebook text-primary"></i>
                    </Button>
                    <Button variant="outline-primary" href={member.social.twitter} target="_blank">
                      <i className="bi bi-twitter text-info"></i>
                    </Button>
                    <Button variant="outline-primary" href={member.social.linkedin} target="_blank">
                      <i className="bi bi-linkedin text-primary"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>

      </Container>
      <Footer />
    </>
  );
};

export default About;
