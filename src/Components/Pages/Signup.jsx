import React, { useState } from 'react';
import Header from '../NavBar';
import "../../assets/css/signup.css";
import Footer from '../Footer';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Fetch existing users
      const existingUsersResponse = await axios.get('https://665824745c36170526470d6a.mockapi.io/users');
      const existingUsers = existingUsersResponse.data;

      // Check if email already exists
      const userExists = existingUsers.some(user => user.email === email);

      if (userExists) {
        setError('Email is already in use');
        return;
      }

      // Register new user
      const response = await axios.post('https://665824745c36170526470d6a.mockapi.io/users', {
        name,
        email,
        password
      });

      // Handle successful registration
      console.log('Registration successful:', response.data);
      setError('');
      setShowModal(true);  // Show modal on successful registration
      // Clear form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please try again.');
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Header />
      <div className='login template d-flex justify-content-center align-items-center min-vh-100 bg-light'>
        <div className='card signup-card mt-3'>
          <div className='row no-gutters'>
            <div className='col-md-6'>
              <div className='card-body'>
                <h3 className='text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-danger">{error}</p>}
                  <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      placeholder='Enter your name'
                      className='form-control'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='form-control'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      className='form-control'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Confirm your password'
                      className='form-control'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='checkbox'
                      id='showPassword'
                      checked={showPassword}
                      onChange={toggleShowPassword}
                    />
                    <label htmlFor='showPassword' className='ms-2'>Show Password</label>
                  </div>
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                  </div>
                  <p className='text-center mt-3'>
                    Already have an account? <a href='/login'>Login</a>
                  </p>
                </form>
              </div>
            </div>
            <div className='col-md-6 d-none d-md-block signup-image'>
              <img src='./images/MercedesC.jpg' alt='Car' className='img-fluid signup-img' />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your registration was successful. You can now log in.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
