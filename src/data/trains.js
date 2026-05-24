// [cite: 111, 120]
export const trainsData = [
  {
    id: "722К",
    number: "722К", // [cite: 44]
    from: "Київ", // [cite: 45]
    to: "Харків", // [cite: 49]
    departureTime: "2026-06-01T06:45:00", // [cite: 46]
    duration: "4г 50хв", // [cite: 47]
    wagons: [
      { id: 1, type: "Інтерсіті-1", seats: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, status: i % 5 === 0 ? "booked" : "free" })) },
      { id: 2, type: "Інтерсіті-2", seats: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, status: i % 4 === 0 ? "booked" : "free" })) }
    ] // [cite: 11, 12, 13]
  },
  {
    id: "064К",
    number: "064К", // [cite: 44]
    from: "Київ", // [cite: 45]
    to: "Львів", // [cite: 49]
    departureTime: "2026-06-01T22:50:00", // [cite: 46]
    duration: "7г 15хв", // [cite: 47]
    wagons: [
      { id: 1, type: "Купе", seats: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, status: i % 3 === 0 ? "booked" : "free" })) },
      { id: 2, type: "Плацкарт", seats: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, status: "free" })) }
    ] // [cite: 11, 12, 13]
  }
];