// 
import React, { useState } from 'react';
import { trainsData } from '../data/trains'; 
import TrainList from '../components/TrainList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(''); 

  // Фільтрація за містом прибуття
  const filteredTrains = trainsData.filter(train => 
    train.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Пошук залізничних квитків</h2>
      <input
        type="text"
        placeholder="Введіть місто або номер потяга..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />
      <TrainList trains={filteredTrains} />
    </div>
  );
}