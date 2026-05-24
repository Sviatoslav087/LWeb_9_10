import React from 'react';
import { Link } from 'react-router-dom';  

export default function TrainCard({ train }) {
  const date = new Date(train.departureTime).toLocaleDateString('uk-UA');
  const time = new Date(train.departureTime).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
      <h3>Потяг № {train.number}</h3> 
      <p><strong>Маршрут:</strong> {train.from} — {train.to}</p> 
      <p><strong>Відправлення:</strong> {date} о {time}</p> 
      <p><strong>Тривалість:</strong> {train.duration}</p>
      //Кнопка веде на бронювання 
      <Link to={`/booking/${train.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 12px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
      </Link>
    </div>
  );
}