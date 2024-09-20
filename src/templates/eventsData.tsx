// data/events.ts

export interface Event {
  id: string;
  name: string;
  date: string;
  image: string;
  isPast: boolean;
  startDate?: Date; // Optional for conversion
  endDate?: Date;   // Optional for conversion
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
    name: 'Concert A',
    date: '2024-09-15',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-15T09:00:00')),
    startDate: new Date('2024-09-15T09:00:00'),
    endDate: new Date('2024-09-15T10:00:00'),
  },
  {
    id: '2',
    name: 'Concert B',
    date: '2024-09-15',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-15T09:00:00')),
    startDate: new Date('2024-09-15T09:00:00'),
    endDate: new Date('2024-09-15T10:00:00'),
  },
  {
    id: '3',
    name: 'Concert A',
    date: '2024-09-16',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-16T09:00:00')),
    startDate: new Date('2024-09-16T09:00:00'),
    endDate: new Date('2024-09-16T10:00:00'),
  },
  {
    id: '4',
    name: 'Concert B',
    date: '2024-09-17',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-17T09:00:00')),
    startDate: new Date('2024-09-17T09:00:00'),
    endDate: new Date('2024-09-17T10:00:00'),
  },
  {
    id: '5',
    name: 'Concert A',
    date: '2024-09-18',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-18T09:00:00')),
    startDate: new Date('2024-09-18T09:00:00'),
    endDate: new Date('2024-09-18T10:00:00'),
  },
  {
    id: '6',
    name: 'Concert A',
    date: '2024-09-18',
    image: '/people/person_placeholder.png',
    isPast: isEventInPast(new Date('2024-09-24T09:00:00')),
    startDate: new Date('2024-09-24T09:00:00'),
    endDate: new Date('2024-09-24T10:00:00'),
  },
  // Add more events following this structure
];
