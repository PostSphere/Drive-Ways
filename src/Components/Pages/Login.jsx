import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Header from '../NavBar';
import "../../assets/css/Login.css";
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://665824745c36170526470d6a.mockapi.io/users');
      const users = response.data;

      // Find user with matching email and password
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // Show notification modal
        setShowModal(true);
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/'); // Redirect to user dashboard or homepage
  };

  return (
    <>
      <Header />
      <div className='login template d-flex justify-content-center align-items-center min-vh-100 bg-light'>
        <div className='card login-card'>
          <div className='row no-gutters'>
            <div className='col-md-6'>
              <div className='card-body'>
                <h3 className='text-center'>Login</h3>
                {error && <div className='alert alert-danger'>{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input 
                      type='email' 
                      placeholder='Enter your email' 
                      className='form-control'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input 
                      type='password' 
                      placeholder='Enter your password' 
                      className='form-control'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mb-3 form-check'>
                    <input type='checkbox' className='form-check-input' id='rememberMe' />
                    <label className='form-check-label' htmlFor='rememberMe'>Remember me</label>
                  </div>
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Login</button>
                  </div>
                  <p className='text-center mt-3'>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
            <div className='col-md-6 d-none d-md-block imag-card'>
              <img src='./images/toyota-login.png' alt='Car' className='img-fluid login-img' />
              <h4 className='text-center mt-2 Car-logo'>Drive Wayz</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully logged in. Welcome back!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
