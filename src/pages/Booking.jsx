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

  // Знаходимо потрібний потяг
  const train = trainsData.find(t => t.id === trainId);

  // Якщо потяг не знайдено
  if (!train) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Потяг не знайдено</h2>
      </div>
    );
  }

  
  const [selectedWagonId, setSelectedWagonId] = useState(
    train.wagons[0].id
  );

 
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Поточний вагон
  const currentWagon = train.wagons.find(
    w => w.id === selectedWagonId
  );

 
  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(
        selectedSeats.filter(id => id !== seatId)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seatId
      ]);
    }
  };


  const handleBookingSubmit = (passengerData) => {
    const booking = {
      trainNumber: train.number,
      wagonId: selectedWagonId,
      seats: selectedSeats,
      passenger: passengerData,
      date: new Date().toISOString()
    };

    BookingService.saveBooking(booking);

    alert(
      `Успішно заброньовано! Місця: ${selectedSeats.join(', ')}`
    );

    navigate('/');
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
      }}
    >
      <h2>
        Бронювання квитків на потяг №{train.number}
      </h2>

      <p
        style={{
          fontSize: '16px',
          color: '#555'
        }}
      >
        {train.from} — {train.to}
      </p>

      <WagonSelector
        wagons={train.wagons}
        selectedWagonId={selectedWagonId}
        onSelectWagon={(id) => {
          setSelectedWagonId(id);
          setSelectedSeats([]);
        }}
      />

      <SeatMap
        seats={currentWagon.seats}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
      />

      <div style={{ marginTop: '20px' }}>
        <p>
          Обрані місця:
          <strong>
            {' '}
            {selectedSeats.length > 0
              ? selectedSeats.join(', ')
              : 'Не вибрано'}
          </strong>
        </p>

        <BookingForm
          onSubmit={handleBookingSubmit}
          selectedSeatsCount={selectedSeats.length}
        />
      </div>
    </div>
  );
}