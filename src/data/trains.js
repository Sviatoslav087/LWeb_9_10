const generateSeats = (count, bookedEvery = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    status:
      bookedEvery && i % bookedEvery === 0
        ? "booked"
        : "free",
  }));
};

export const trainsData = [
  {
    id: 1,

    number: "722К",

    from: "Київ",
    to: "Харків",

    departure: "06:45",
    arrival: "11:35",

    departureTime: "2026-06-01T06:45:00",

    duration: "4г 50хв",

    price: "787 ₴",

    wagons: [
      {
        id: 1,
        type: "Інтерсіті-1",
        seats: generateSeats(20, 5),
      },

      {
        id: 2,
        type: "Інтерсіті-2",
        seats: generateSeats(20, 4),
      },
    ],
  },

  {
    id: 2,

    number: "064К",

    from: "Київ",
    to: "Львів",

    departure: "22:50",
    arrival: "06:05",

    departureTime: "2026-06-01T22:50:00",

    duration: "7г 15хв",

    price: "987 ₴",

    wagons: [
      {
        id: 1,
        type: "Купе",
        seats: generateSeats(12, 3),
      },

      {
        id: 2,
        type: "Плацкарт",
        seats: generateSeats(12),
      },
    ],
  },

  {
    id: 3,

    number: "079П",

    from: "Київ",
    to: "Львів",

    departure: "06:11",
    arrival: "13:34",

    departureTime: "2026-06-01T06:11:00",

    duration: "7 год. 23 хв.",

    price: "711 ₴",

    wagons: [
      {
        id: 1,
        type: "Купе",
        seats: generateSeats(24, 5),
      },

      {
        id: 2,
        type: "Люкс",
        seats: generateSeats(10, 2),
      },
    ],
  },

  {
    id: 4,

    number: "715К",

    from: "Київ",
    to: "Львів",

    departure: "12:40",
    arrival: "18:45",

    departureTime: "2026-06-01T12:40:00",

    duration: "6 год. 05 хв.",

    price: "980 ₴",

    wagons: [
      {
        id: 1,
        type: "Інтерсіті+",
        seats: generateSeats(30, 6),
      },
    ],
  },

  {
    id: 5,

    number: "141Л",

    from: "Київ",
    to: "Львів",

    departure: "16:30",
    arrival: "00:20",

    departureTime: "2026-06-01T16:30:00",

    duration: "7 год. 50 хв.",

    price: "740 ₴",

    wagons: [
      {
        id: 1,
        type: "Купе",
        seats: generateSeats(16, 4),
      },

      {
        id: 2,
        type: "Плацкарт",
        seats: generateSeats(32, 7),
      },
    ],
  },

  {
    id: 6,

    number: "357О",

    from: "Київ",
    to: "Львів",

    departure: "21:55",
    arrival: "06:40",

    departureTime: "2026-06-01T21:55:00",

    duration: "8 год. 45 хв.",

    price: "620 ₴",

    wagons: [
      {
        id: 1,
        type: "Плацкарт",
        seats: generateSeats(36, 8),
      },
    ],
  },
];