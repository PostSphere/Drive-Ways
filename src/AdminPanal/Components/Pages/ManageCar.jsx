import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Nav from '../Nav';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const Addcar = () => {
  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('https://665824745c36170526470d6a.mockapi.io/Cars-Data');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://665824745c36170526470d6a.mockapi.io/Cars-Data/${id}`);
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleEdit = (car) => {
    setCurrentCar(car);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setCurrentCar({
      carNumber: '',
      brand: '',
      model: '',
      year: '',
      licensePlate: '',
      pricePerDay: '',
      status: 'available',
      locationId: '',
      image: ''
    });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCar({
      ...currentCar,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`https://665824745c36170526470d6a.mockapi.io/Cars-Data/${currentCar.id}`, currentCar);
      } else {
        await axios.post('https://665824745c36170526470d6a.mockapi.io/Cars-Data', currentCar);
      }
      fetchCars();
      setShowModal(false);
    } catch (error) {
      console.error('Error saving car:', error);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className='container-fluid bg-info'>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-4 bg-white vh-100 sticky-top p-0'>
          <Sidebar />
        </div>

        <div className='col-lg-10 col-md-9 col-8'>
          <Nav />
          <h2 className='text-dark ms-2 mt-3'>Manage Cars</h2>
          <div className='bg-white rounded p-4'>
            <Button className="mb-3" onClick={handleAdd}>Add New Car</Button>

            <div className='table-responsive'>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">License Plate</th>
                    <th scope="col">Price Per Day</th>
                    <th scope="col">Status</th>
                    <th scope="col">Location ID</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car, index) => (
                    <tr key={car.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{car.brand}</td>
                      <td>{car.model}</td>
                      <td>{car.year}</td>
                      <td>{car.licensePlate}</td>
                      <td>{car.pricePerDay}</td>
                      <td>{car.status}</td>
                      <td>{car.locationId}</td>
                      <td>
                        <Button variant="warning" className="me-2" onClick={() => handleEdit(car)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Car' : 'Add New Car'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Brand</label>
              <input type="text" name="brand" className="form-control" value={currentCar?.brand || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Model</label>
              <input type="text" name="model" className="form-control" value={currentCar?.model || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Year</label>
              <input type="number" name="year" className="form-control" value={currentCar?.year || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>License Plate</label>
              <input type="text" name="licensePlate" className="form-control" value={currentCar?.licensePlate || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Price Per Day</label>
              <input type="number" name="pricePerDay" className="form-control" value={currentCar?.pricePerDay || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Status</label>
              <select name="status" className="form-control" value={currentCar?.status || 'available'} onChange={handleChange} required>
                <option value="available">Available</option>
                <option value="rented">Rented</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Location ID</label>
              <input type="number" name="locationId" className="form-control" value={currentCar?.locationId || ''} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Image URL</label>
              <input type="text" name="image" className="form-control" value={currentCar?.image || ''} onChange={handleChange} required />
            </div>
            <Button type="submit" className="mt-3" variant="primary">
              {isEditing ? 'Save Changes' : 'Add Car'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Addcar;
