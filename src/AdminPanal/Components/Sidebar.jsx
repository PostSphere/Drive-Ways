import React, { useState } from 'react';
import '../css/style.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='bg-white'>
      <div className='ms-3 mt-2'>
        <i className="bi bi-car-front-fill me-2 fs-4 text-primary"></i>
        <span className='brand-name fs-5'>Drive Wayz</span>
      </div>

      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <Link
          className={`list-group-item list-group-item-action my-2 ${activeLink === '/dashboard' ? 'active' : ''}`}
          to="/dashboard"
          onClick={() => handleClick('/dashboard')}
        >
          <div className='d-flex align-items-center'>
            <i className="bi bi-speedometer2 me-3 fs-5"></i>
            <span className="d-none d-sm-block">Dashboard</span>
          </div>
        </Link>

        <Link
          className={`list-group-item list-group-item-action my-2 ${activeLink === '/managecar' ? 'active' : ''}`}
          to="/managecar"
          onClick={() => handleClick('/managecar')}
        >
          <div className='d-flex align-items-center'>
            <i className="bi bi-car-front fs-4 me-3"></i>
            <span className="d-none d-sm-block">Cars</span>
          </div>
        </Link>

        <Link
          className={`list-group-item list-group-item-action my-2 ${activeLink === '/users' ? 'active' : ''}`}
          to="/users"
          onClick={() => handleClick('/users')}
        >
          <div className='d-flex align-items-center'>
            <i className="bi bi-people fs-4 me-3"></i>
            <span className="d-none d-sm-block">Users</span>
          </div>
        </Link>

        <Link
          className={`list-group-item list-group-item-action my-2 ${activeLink === '/orders' ? 'active' : ''}`}
          to="/orders"
          onClick={() => handleClick('/orders')}
        >
          <div className='d-flex align-items-center'>
            <i className="bi bi-list-ul fs-4 me-3"></i>
            <span className="d-none d-sm-block">Orders</span>
          </div>
        </Link>

        <Link
          className={`list-group-item list-group-item-action my-2 ${activeLink === '/admin-login' ? 'active' : ''}`}
          to="/admin-login"
          onClick={() => handleClick('/admin-login')}
        >
          <div className='d-flex align-items-center'>
            <i className="bi bi-box-arrow-left fs-4 me-3"></i>
            <span className="d-none d-sm-block">Log out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
