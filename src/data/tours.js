// src/data/tour.js

export const TOURS = [
    {
    id: 't001',
    title: 'Cultural Triangle Tour - 2 Days',
    days: 2,
    price: 90,
    img: import.meta.env.BASE_URL + 'assets/tour1.jpg',
    short: 'Tea plantations, waterfalls and scenic train rides.',
    details: 'Full itinerary: Train ride, tea factory visits, hiking.'
  },
  {
    id: 't002',
    title: 'South Coast Beaches — 5 Days',
    days: 5,
    price: 240,
    img: import.meta.env.BASE_URL + 'assets/tour2.jpg',
    short: 'Relax on Mirissa, Unawatuna and Galle Fort.',
    details: 'Whale watching (seasonal), snorkeling and historic Galle.'
  },
  {
    id: 't003',
    title: 'Yala Safari — 1 Day',
    days: 1,
    price: 150,
    img: import.meta.env.BASE_URL + 'assets/tour3.jpg',
    short: 'Get the amazing wildlife experience.',
    details: 'Yala Safari Tour with 4WD Jeep.'
  },
  {
    id: 't004',
    title: 'Additional Tour Example',
    days: 2,
    price: 100,
    img: import.meta.env.BASE_URL + 'assets/tour4.jpg',
    short: 'Sample tour description.',
    details: 'Full itinerary details here.'
  }
];
