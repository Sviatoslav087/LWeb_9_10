import React from 'react';

export default function SeatMap({ seats, selectedSeats, onSeatClick }) {
  
  const getSeatStyles = (seat) => {
    const isSelected = selectedSeats.includes(seat.id);
    const isBooked = seat.status === 'booked';

    if (isBooked) {

      return { bg: '#E53E3E', head: '#9B2C2C', color: '#fff', cursor: 'not-allowed' };
    }
    if (isSelected) {
   
      return { bg: '#3182CE', head: '#2B6CB0', color: '#fff', cursor: 'pointer' };
    }
  
    return { bg: '#38A169', head: '#2F855A', color: '#fff', cursor: 'pointer' };
  };

  const compartments = [];
  for (let i = 0; i < seats.length; i += 4) {
    compartments.push(seats.slice(i, i + 4));
  }

  return (
    <div style={{ margin: '20px 0', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Виправляємо порожній тег заголовка */}
      <h4 style={{ color: '#002C5A', marginBottom: '4px', fontSize: '16px', fontWeight: '600' }}>
        Інтерактивна схема вагона
      </h4>
      <p style={{ color: '#718096', fontSize: '12px', margin: '0 0 16px 0' }}>
        Оберіть місця на інтерактивній карті вагона для купівлі
      </p>

      
      <div style={{
        background: '#F7FAFC',
        border: '1px solid #E2E8F0',
        borderRadius: '14px',
        padding: '20px 14px',
        display: 'flex',
        gap: '14px',
        overflowX: 'auto',
        boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.03)',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        
       
        <div style={{
          minWidth: '28px',
          height: '130px',
          background: '#E2E8F0',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#718096',
          fontSize: '11px',
          writingMode: 'vertical-rl',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '500'
        }}>
          Тамбур
        </div>

      
        <div style={{ display: 'flex', gap: '10px' }}>
          {compartments.map((compartment, compIndex) => (
            <div 
              key={compIndex}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                padding: '6px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                height: '130px',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
              }}
            > 
            
              <div style={{ display: 'flex', gap: '6px' }}>
                {compartment.slice(0, 2).map(seat => {
                  const styles = getSeatStyles(seat);
                  return (
                    <button
                      key={seat.id}
                      disabled={seat.status === 'booked'}
                      onClick={() => onSeatClick(seat.id)}
                      style={{
                        width: '34px',
                        height: '36px',
                        background: styles.bg,
                        color: styles.color,
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        position: 'relative',
                        cursor: styles.cursor,
                        padding: '6px 0 0 0',
                        transition: 'all 0.1s ease-in-out'
                      }}

                      onMouseEnter={(e) => {
                        if (seat.status !== 'booked') e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: styles.head, borderRadius: '5px 5px 0 0' }} />
                      {seat.id}
                    </button>
                  );
                })}
              </div>

             
              <div style={{ 
                height: '20px', 
                borderTop: '1px dashed #E2E8F0', 
                borderBottom: '1px dashed #E2E8F0',
                margin: '2px -6px',
                background: '#EDF2F7'
              }} />
 
            
              <div style={{ display: 'flex', gap: '6px' }}>
                {compartment.slice(2, 4).map(seat => {
                  const styles = getSeatStyles(seat);
                  return (
                    <button
                      key={seat.id}
                      disabled={seat.status === 'booked'}
                      onClick={() => onSeatClick(seat.id)}
                      style={{
                        width: '34px',
                        height: '36px',
                        background: styles.bg,
                        color: styles.color,
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        position: 'relative',
                        cursor: styles.cursor,
                        padding: '0 0 6px 0',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        transition: 'all 0.1s ease-in-out'
                      }}
                    
                      onMouseEnter={(e) => {
                        if (seat.status !== 'booked') e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: styles.head, borderRadius: '0 0 5px 5px' }} />
                      <span style={{ marginBottom: '4px' }}>{seat.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          minWidth: '28px',
          height: '130px',
          background: '#E2E8F0',
          borderRadius: '6px'
        }} />

      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '12px', fontSize: '13px', color: '#4A5568', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '14px', height: '14px', background: '#38A169', borderRadius: '3px', borderTop: '3px solid #2F855A' }} />
          <span>Вільне</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '14px', height: '14px', background: '#3182CE', borderRadius: '3px', borderTop: '3px solid #2B6CB0' }} />
          <span>Обране вами</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '14px', height: '14px', background: '#E53E3E', borderRadius: '3px', borderTop: '3px solid #9B2C2C' }} />
          <span>Зайняте (Заброньовано)</span>
        </div>
      </div>
    </div>
  );
}