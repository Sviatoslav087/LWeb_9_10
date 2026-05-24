import React from 'react';
import TrainCard from './TrainCard'; 

export default function TrainList({ trains }) {
  if (trains.length === 0) {
    return <p>Потягів за вашим запитом не знайдено.</p>;
  }

  return (
    <div>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}