import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../css/AdminLogin.css';
import bgImage from './AdminLogin.jpg';

const AdminLogin = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  const handleLogin = (e) => {
    e.preventDefault();

    const predefinedUsername = "Sajid Sipra";
    const predefinedPassword = "Sajid@123";

    if (username === predefinedUsername && password === predefinedPassword) {
      setErrorMessage('');
      setIsAuthenticated(true);  // Set authentication state to true
      navigate(from.pathname, { replace: true });
    } else {
      setErrorMessage('Login Failed: Incorrect Credentials');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <h1 className='text-center mb-5 ' style={{ color: 'blue', fontSize: '5' }}>Drive Wayz</h1>
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <span style={{ color: 'white', fontSize: '1.5rem' }}>Drive Wayz</span>
                  <div>Login</div>
                </Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ cursor: 'pointer' }}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox" className="mt-3">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  {errorMessage && (
                    <div className="text-danger mt-3">{errorMessage}</div>
                  )}

                  <Button variant="primary" type="submit" className="w-100 mt-4">
                    Login
                  </Button>

                  <div className="text-center mt-3">
                    <a href="/" className="forgot-password-link">Go to Home</a>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
