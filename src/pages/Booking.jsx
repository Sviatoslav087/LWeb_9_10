import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trainsData } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { BookingService } from '../services/BookingService';

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  
  const train = trainsData.find(t => t.id === Number(trainId));
  
  if (!train) {
    return (
      <div style={{ maxWidth: '850px', margin: '40px auto', textAlign: 'center', fontFamily: 'Segoe UI, sans-serif' }}>
        <h2 style={{ color: '#dc3545' }}>Поїзд не знайдено</h2>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', background: '#002C5A', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Повернутися до розкладу
        </button>
      </div>
    );
  }

  
  const [selectedWagonId, setSelectedWagonId] = useState(train.wagons[0]?.id || 1);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const currentWagon = train.wagons.find(w => w.id === selectedWagonId);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const priceNumber = parseInt(train.price.replace(/[^0-9]/g, ''), 10) || 0;
  const totalSum = selectedSeats.length * priceNumber;

  const handleBookingSubmit = (passengerData) => {
    const booking = {
      trainId: train.id,
      trainNumber: train.number,
      route: `${train.from} — ${train.to}`,
      wagonId: selectedWagonId,
      wagonType: currentWagon.type,
      seats: selectedSeats,
      totalPaid: `${totalSum} ₴`,
      passenger: passengerData,
      date: new Date().toISOString()
    };
с
    BookingService.saveBooking(booking);
    
    // Виводимо гарне повідомлення
    alert(`Успішно заброньовано!\nПоїзд: №${train.number}\nВагон: №${selectedWagonId} (${currentWagon.type})\nМісця: ${selectedSeats.join(', ')}\nСума до сплати: ${totalSum} ₴`);
    
  
    navigate('/');
  };

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
        textAlign: 'left',
        borderLeft: '6px solid #002C5A'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ margin: 0, color: '#002C5A', fontSize: '22px' }}>
            Поїзд № {train.number} &nbsp;•&nbsp; {train.from} — {train.to}
          </h2>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF7900' }}>
            {train.price} / місце
          </span>
        </div>
        <div style={{ color: '#52627A', fontSize: '15px', display: 'flex', gap: '30px' }}>
          <p style={{ margin: 0 }}> <strong>Час у дорозі:</strong> {train.duration}</p>
          <p style={{ margin: 0 }}> <strong>Відправлення:</strong> {train.departure}</p>
          <p style={{ margin: 0 }}> <strong>Прибуття:</strong> {train.arrival}</p>
        </div>
      </div>

      <div style={{ 
        background: '#fff', 
        padding: '24px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        textAlign: 'left',
        marginBottom: '24px'
      }}>
    
        <WagonSelector 
          wagons={train.wagons} 
          selectedWagonId={selectedWagonId} 
          onSelectWagon={(id) => { 
            setSelectedWagonId(id); 
            setSelectedSeats([]); 
          }} 
        />


        {currentWagon && (
          <SeatMap 
            seats={currentWagon.seats} 
            selectedSeats={selectedSeats} 
            onSeatClick={handleSeatClick} 
          />
        )}
      </div>

      <div style={{ 
        background: '#fff', 
        padding: '24px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        textAlign: 'left'
      }}>
        <div style={{ 
          borderBottom: '1px solid #E1E6EB', 
          paddingBottom: '16px', 
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <p style={{ margin: '0 0 4px 0', color: '#52627A', fontSize: '14px' }}>Всього обрано місць: {selectedSeats.length}</p>
            <p style={{ margin: 0, fontSize: '16px' }}>
              Номери місць: <strong>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'не вибрано'}</strong>
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0 0 4px 0', color: '#52627A', fontSize: '14px' }}>Загальна вартість</p>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#002C5A' }}>{totalSum} ₴</span>
          </div>
        </div>
        <BookingForm onSubmit={handleBookingSubmit} selectedSeatsCount={selectedSeats.length} />
      </div>
    </div>
  );
}