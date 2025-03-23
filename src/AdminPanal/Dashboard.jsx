import React from 'react';
import Sidebar from './Components/Sidebar';
import Nav from './Components/Nav';

const Dashboard = () => {
  return (
    <div className='container-fluid min-vh-100'>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-4 bg-white min-vh-100 p-0'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-9 col-8 bg-info '>
          <Nav />

          {/* Analysis Part */}
          <div className='container-fluid mt-4'>
            <div className='row g-3'>
              <div className='col-lg-3 col-md-6'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>230</h3>
                    <p className='fs-5'>Products</p>
                  </div>
                  <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>2450</h3>
                    <p className='fs-5'>Sales</p>
                  </div>
                  <i className='bi bi-currency-dollar p-3 fs-1'></i>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>2250</h3>
                    <p className='fs-5'>Delivery</p>
                  </div>
                  <i className='bi bi-truck p-3 fs-1'></i>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>20%</h3>
                    <p className='fs-5'>Increase</p>
                  </div>
                  <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className='container-fluid mt-4'>
            <div className='row'>
              <div className='col-12'>
                <table className='table table-striped table-hover table-responsive rounded mt-3'>
                  <caption className='text-white fs-5'>Recent Orders</caption>
                  <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>First</th>
                      <th scope='col'>Last</th>
                      <th scope='col'>Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope='row'>2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope='row'>3</th>
                      <td colSpan='2'>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
