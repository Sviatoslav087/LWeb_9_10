export const trainsData = [
  {
    id: "722К",
    number: "722К", 
    from: "Київ",
    to: "Харків", 
    departureTime: "2026-06-01T06:45:00", 
    duration: "4г 50хв", 
    wagons: [
      { id: 1, type: "Інтерсіті-1", seats: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, status: i % 5 === 0 ? "booked" : "free" })) },
      { id: 2, type: "Інтерсіті-2", seats: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, status: i % 4 === 0 ? "booked" : "free" })) }
    ] 
  },
  {
    id: "064К",
    number: "064К", 
    from: "Київ",
    to: "Львів", 
    departureTime: "2026-06-01T22:50:00",
    duration: "7г 15хв", 
    wagons: [
      { id: 1, type: "Купе", seats: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, status: i % 3 === 0 ? "booked" : "free" })) },
      { id: 2, type: "Плацкарт", seats: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, status: "free" })) }
    ] 
  }
];