// 
import React from 'react';

export default function WagonSelector({ wagons, selectedWagonId, onSelectWagon }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4>Виберіть вагон:</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            onClick={() => onSelectWagon(wagon.id)}
            style={{
              padding: '10px 15px',
              background: selectedWagonId === wagon.id ? '#007bff' : '#f0f0f0',
              color: selectedWagonId === wagon.id ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Вагон №{wagon.id} ({wagon.type})
          </button>
        ))}
      </div>
    </div>
  );
}