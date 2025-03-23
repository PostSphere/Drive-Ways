// Nav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css';

const Nav = ({ Toggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here if necessary
    navigate('/admin-login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3 rounded">
      <i className='navbar-brand bi bi-justify-left' onClick={Toggle}></i>
      <button className='navbar-toggler d-lg-none' type='button' data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id='collapsibleNavId'>
        <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
          <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle ' href="#" 
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              Sajid Sipra
            </a>
            <div className='dropdown-menu' >
              <a className='dropdown-item' href="#" onClick={handleLogout}>Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
