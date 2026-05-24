import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

export default function App() {
  return (
    <BrowserRouter>
  
      <header style={{ 
        background: '#002C5A', 
        color: '#fff', 
        padding: '20px', 
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        fontFamily: 'Segoe UI, Roboto, sans-serif'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '0.5px' }}>
          УКРЗАЛІЗНИЦЯ
        </h1>
        <span style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase', tracking: '1px' }}>
        
        </span>
      </header>

      <main style={{ minHeight: 'calc(100vh - 84px)', background: '#F4F6F9', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:trainId" element={<Booking />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}