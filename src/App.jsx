import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 
import Home from './pages/Home'; // [cite: 114, 134]
import Booking from './pages/Booking'; // 

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ background: '#222', color: '#fff', padding: '15px', textAlign: 'center' }}>
        <h1>Укрзалізниця — Симуляція Бронювання</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} /> {/* [cite: 70] */}
        <Route path="/booking/:trainId" element={<Booking />} /> {/* [cite: 71] */}
      </Routes>
    </BrowserRouter>
  );
}