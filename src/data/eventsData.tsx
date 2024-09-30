// data/events.ts

export interface Event {
  id: string;
  name: string;
  date: string;
  image: string;
  isPast: boolean;
  startDate?: Date; // Optional for conversion
  endDate?: Date; // Optional for conversion
  location?: string; // Optional location property
  description?: string; // Optional description property
}

// Function to check if an event date is in the past
export const isEventInPast = (
  eventDate: Date | string | undefined,
): boolean => {
  // Check if eventDate is undefined or invalid
  if (
    typeof eventDate === 'undefined' ||
    (typeof eventDate === 'string' && eventDate.trim() === '')
  ) {
    throw new Error('Invalid event date');
  }

  const date = new Date(eventDate);
  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid event date');
  }

  const today = new Date();
  // Set today's time to 00:00:00 in EST for comparison
  const todayAtMidnightEST = new Date(
    today.toLocaleString('en-US', { timeZone: 'America/New_York' }),
  );
  todayAtMidnightEST.setHours(0, 0, 0, 0); // Set the time to midnight

  // Compare time values of both dates
  return date.getTime() < todayAtMidnightEST.getTime();
};

// Events array
export const events: Event[] = [
  {
    id: '1',
    name: 'Karaoke Night',
    date: '2024-09-28',
    image: '/assets/karaoke.png',
    isPast: isEventInPast(new Date('2024-09-28T20:00:00')),
    startDate: new Date('2024-09-28T20:00:00'),
    endDate: new Date('2024-09-28T22:00:00'),
    location: 'McClendon Tower',
    description: '6th Floor',
  },
  {
    id: '2',
    name: 'Casino Night',
    date: '2024-09-29',
    image: '/assets/casino_night.png',
    isPast: isEventInPast(new Date('2024-09-29T20:00:00')),
    startDate: new Date('2024-09-29T20:00:00'),
    endDate: new Date('2024-09-29T22:00:00'),
    location: 'Crowell CC',
    description: 'CC Common Room',
  },
];
