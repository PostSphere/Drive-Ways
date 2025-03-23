import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Nav from '../Nav';

const Users = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://665824745c36170526470d6a.mockapi.io/users')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleDelete = (id) => {
    setUserIdToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (userIdToDelete) {
      axios.delete(`https://665824745c36170526470d6a.mockapi.io/users/${userIdToDelete}`)
        .then(() => {
          getData();
          setShowModal(false);
        })
        .catch((error) => {
          console.error("There was an error deleting the user!", error);
        });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setUserIdToDelete(null);
  };

  return (
    <div className='container-fluid bg-info'>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-4 bg-white vh-100 sticky-top p-0'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-9 col-8'>
          <Nav />
          
            <h1 className='text-white ms-2 mt-4'>Users Data</h1>
            <div className='table-responsive bg-white rounded p-3'>
              <table className="table table-striped rounded">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => handleDelete(item.id)}
                        >
                          Remove User
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Users;
