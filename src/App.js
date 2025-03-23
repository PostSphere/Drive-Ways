import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Cars from './Components/Pages/Cars';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import CarDetail from './Components/Pages/CarDetail';
import BookingConfirmation from './Components/Pages/Confirmation';
import AdminRouter from './AdminPanal/Components/AminRouter';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/*" element={<AdminRouter isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
