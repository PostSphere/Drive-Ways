import React from 'react'
import "../../assets/css/Contact.css"
import { Container, Row, Col ,Form ,ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import Header from '../NavBar'
import Footer from '../Footer'


const Contact = () => {
  return (
    <>
     <Header/>
      <div className="Contact-Image">
        <h1>Contact Us</h1>
      </div>

      <Container>
        <Row>
          <Col>
            <h4>We'd Loved To Hear From You.</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Massage *</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <button className="Form_Button px-5 py-2 rounded-pill">
                Submit
              </button>
            </Form>
          </Col>

          <Col >
            <ListGroup as="ul" className='sticky-scroll mt-3'>
              <ListGroup.Item as="li" active>
               Contact details
              </ListGroup.Item>

              <ListGroup.Item as="li" className='align-items-center'> 
               <div className='d-flex align-items-center'>
              <span className='fs-5'><FontAwesomeIcon icon={faEnvelope} /></span>
                <span className='ms-2'>siprag1215@gmail.com </span>
                </div>  
              
               </ListGroup.Item>
              <ListGroup.Item as="li" disabled>
              <div className='d-flex align-items-center'>
              <span className='fs-5'><FontAwesomeIcon icon={faPhone} /></span>
                <span className='ms-2'>+923028185014 ,+923438423812 </span>
                </div>  

              </ListGroup.Item>
              <ListGroup.Item as="li">
              <div className='d-flex align-items-center'>
              <span className='fs-5'><FontAwesomeIcon icon={faLocationDot} /></span>
                <span className='ms-2'>Office no. 37-38, 1st Floor, Uni Chowk BahawalPur, Pakistan</span>
                </div> 
                </ListGroup.Item>


            </ListGroup>
          </Col>
        
        </Row>
      </Container>

      <Footer/>
      
    </>
  );
}

export default Contact
