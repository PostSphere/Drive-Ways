import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Nav from '../Nav';
import axios from 'axios';
import { Alert, Button } from 'react-bootstrap';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://665c0da73e4ac90a04d88d6a.mockapi.io/bookings');
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError(`Error fetching bookings: ${error.message}`);
      setLoading(false);
    }
  };

  const fetchCar = async (carId) => {
    try {
      const response = await axios.get(`https://665824745c36170526470d6a.mockapi.io/Cars-Data/${carId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

  const updateCarStatus = async (carId, status, bookingDate = '', returnDate = '') => {
    try {
      await axios.put(`https://665824745c36170526470d6a.mockapi.io/Cars-Data/${carId}`, {
        status: status,
        bookingDate: bookingDate,
        returnDate: returnDate
      });
    } catch (error) {
      console.error('Error updating car status:', error);
    }
  };

  const handleAction = async (id, action) => {
    try {
      const booking = bookings.find(b => b.id === id);
      await axios.put(`https://665c0da73e4ac90a04d88d6a.mockapi.io/bookings/${id}`, { status: action });

      if (action === 'accepted') {
        await updateCarStatus(booking.carId, 'rented', booking.bookingDate, booking.returnDate);
      } else if (action === 'canceled') {
        await updateCarStatus(booking.carId, 'available');
      }

      sendNotification(id, action);
      fetchBookings(); 
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://665c0da73e4ac90a04d88d6a.mockapi.io/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id)); // Update state
    } catch (error) {
      console.error('Error deleting booking:', error);
      setError(`Error deleting booking: ${error.message}`);
    }
  };

  const sendNotification = async (id, action) => {
    try {
      const booking = bookings.find(b => b.id === id);
      const message = action === 'accepted' ? 'Your booking has been accepted.' : 'Your booking has been canceled.';

      await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_b50dd48',
        template_id: 'template_cjt67yj',
        user_id: 'g7NKES7GR8vHvx6dC',
        template_params: {
          to_email: booking.email,
          to_name: booking.fullName,
          from_name: 'Drive Wayz',
          message: message,
        },
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <div className='container-fluid bg-info'>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-4 bg-white vh-100 sticky-top p-0'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-9 col-8'>
          <Nav />
         
            <h2 className='text-dark ms-2 mt-4'>Manage Bookings</h2>
            <div className='bg-white rounded p-4'>
              {loading && <p>Loading bookings...</p>}
              {error && <Alert variant="danger">{error}</Alert>}
              {!loading && !error && (
                <div className='table-responsive'>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Location</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Return Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                          <tr key={booking.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{booking.fullName}</td>
                            <td>{booking.email}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.location}</td>
                            <td>{booking.bookingDate}</td>
                            <td>{booking.returnDate}</td>
                            <td>{booking.status}</td>
                            <td>
                              <Button 
                                variant="success" 
                                className="me-2 mb-2" 
                                onClick={() => handleAction(booking.id, 'accepted')}
                              >
                                Accept
                              </Button>
                              <Button 
                                variant="danger" 
                                className="me-2 mb-2" 
                                onClick={() => handleAction(booking.id, 'canceled')}
                              >
                                Cancel
                              </Button>
                              <Button 
                                variant="danger" 
                                className="mb-2" 
                                onClick={() => handleDelete(booking.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="9" className="text-center">No bookings found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Booking;
