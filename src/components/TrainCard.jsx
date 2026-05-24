import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrainCard({ train }) {
  const navigate = useNavigate();
  const date = new Date(train.departureTime).toLocaleDateString('uk-UA');
  const time = new Date(train.departureTime).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

 
  const handleCardClick = () => {
    navigate(`/booking/${train.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="train-card" 
      style={{ 
        background: '#fff', 
        border: '1px solid #E1E6EB', 
        padding: '20px', 
        borderRadius: '12px', 
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        cursor: 'pointer', 
        transition: 'transform 0.2s, box-shadow 0.2s', 
      }}
      
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,28,90,0.08)';
        e.currentTarget.style.borderColor = '#002C5A';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
        e.currentTarget.style.borderColor = '#E1E6EB';
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ 
            background: '#E5F0FC', 
            color: '#002C5A', 
            padding: '4px 10px', 
            borderRadius: '6px', 
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            № {train.number}
          </span>
          <h3 style={{ margin: 0, color: '#1C2530', fontSize: '18px' }}>
            {train.from} — {train.to}
          </h3>
        </div>
        
        <div style={{ color: '#52627A', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>Відправлення:</strong> {date} о <span style={{ color: '#002C5A', fontWeight: 'bold' }}>{time}</span>
          </p>
          <p style={{ margin: '4px 0' }}>
         <strong>Час у дорозі:</strong> {train.duration}
          </p>
        </div>
      </div>

    </div>
  );
}