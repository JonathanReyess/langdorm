// data/events.ts

export interface Event {
  id: string;
  name: string;
  date: string;
  image: string;
  isPast: boolean;
  startDate?: Date; // Optional for conversion
  endDate?: Date; // Optional for conversion
}

// Function to check if an event date is in the past
export const isEventInPast = (eventDate: Date): boolean => {
  const today = new Date();
  // Set today's time to 00:00:00 to compare only the date part
  const todayAtMidnight = new Date(today.setHours(0, 0, 0, 0));
  // Compare time values of both dates
  return eventDate.getTime() < todayAtMidnight.getTime();
};

// Events array
export const events: Event[] = [
  {
    id: '1',
    name: 'Event A',
    date: '2024-09-26',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-15T09:00:00')),
    startDate: new Date('2024-09-15T09:00:00'),
    endDate: new Date('2024-09-15T10:00:00'),
  },
  {
    id: '1',
    name: 'Event B',
    date: '2024-09-30',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-30T09:00:00')),
    startDate: new Date('2024-09-30T09:00:00'),
    endDate: new Date('2024-09-30T10:00:00'),
  },
];
