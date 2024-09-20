// components/EventCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Event } from './eventsData';

interface EventCardProps {
  event: Event; // Prop type for the EventCard component
}

// Styled component for the card layout of each event
const Card = styled.div`
  flex: 0 0 250px; /* Fixed width of each card */
  margin: 0 15px; /* Margin around each card */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  background: #fff;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  scroll-snap-align: start; /* Snap each card to the start of the container */
`;

// Styled component for the event image
const EventImage = styled.img`
  width: 100%; /* Full width of the card */
  height: 150px; /* Fixed height for the image */
  object-fit: cover; /* Cover the area without distortion */
  border-top-left-radius: 10px; /* Rounded top-left corner */
  border-top-right-radius: 10px; /* Rounded top-right corner */
`;

// Styled component for the event information section
const EventInfo = styled.div`
  padding: 15px; /* Padding inside the info section */
  text-align: center; /* Center text */
`;

// Component to display event details in a card format
const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <Card>
    <EventImage src={event.image} alt={event.name} />
    <EventInfo>
      <h3>{event.name}</h3>
      <p>{new Date(event.date).toLocaleDateString()}</p> {/* Format date to a readable string */}
    </EventInfo>
  </Card>
);

export default EventCard;
