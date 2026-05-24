import React, { useState } from 'react';
import { trainsData } from '../data/trains';
import TrainList from '../components/TrainList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trainsData.filter(train => 
    train.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ 
      maxWidth: '850px', 
      margin: '0 auto', 
      padding: '30px 20px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{ 
        background: '#fff', 
        padding: '24px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '24px',
        textAlign: 'left'
      }}>
        <h2 style={{ margin: '0 0 16px 0', color: '#002C5A', fontSize: '20px' }}>
          Розклад поїздів та придбання квитків
        </h2>
        
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Введіть місто відправлення, прибуття або номер поїзда..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '14px 16px', 
              fontSize: '16px',
              border: '1px solid #C4CDD5',
              borderRadius: '8px',
              boxSizing: 'border-box',
              outline: 'none',
              color: '#1C2530'
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: 'left' }}>
        <h4 style={{ color: '#52627A', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase' }}>
          ({filteredTrains.length})
        </h4>
        <TrainList trains={filteredTrains} />
      </div>
    </div>
  );
}