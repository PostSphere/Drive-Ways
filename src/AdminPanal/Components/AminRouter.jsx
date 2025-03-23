import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Addcar from './Pages/ManageCar';
import Dashboard from '../Dashboard';
import Users from './Pages/Users';
import Orders from './Pages/Orders';
import AdminLogin from './Pages/AdminLogin';
import ProtectedRoute from './ProtectedRoute';

const AdminRouter = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/managecar"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Addcar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route path="/orders"
        element={<ProtectedRoute isAuthenticated={isAuthenticated}>
            <Orders />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRouter;
