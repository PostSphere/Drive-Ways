import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Header.css"


const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedUser = JSON.parse(localStorage.getItem('user'));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md" sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">         
           Drive Wayz
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto ">
              <Nav.Link as={Link} to="/" className='mx-2 Nav_Item'>Home</Nav.Link>
              <Nav.Link as={Link} to="/About" className='Nav_Item mx-2'>About</Nav.Link>
              <Nav.Link as={Link} to="/Cars"className='Nav_Item mx-2'>Cars</Nav.Link>
              <Nav.Link as={Link} to="/Contact"className='Nav_Item mx-2'>Contact</Nav.Link>
              </Nav>

              <Nav>
              {user ? (
                <NavDropdown title={<><FontAwesomeIcon icon={faUser} /> {user.name}</>} id="user-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <Button variant='danger' size='sm' className=" rounded-pill px-4 ">
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Button>
                </Nav.Link>
              )}
            </Nav>

            </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
