import React, { useState } from 'react';
import styled from 'styled-components';

import type { Event } from '../data/eventsData';

// Props for the EventCard component
interface EventCardProps {
  event: Event;
}

// Styled component for the card layout
const Card = styled.div<{ isFlipped: boolean }>`
  flex: 0 0 250px; /* Fixed width of each card */
  margin: 0 15px 25px; /* Margin around each card */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  perspective: 1000px; /* 3D effect for the flip */
  cursor: pointer; /* Pointer cursor on hover */
  height: 300px; /* Fixed height for the card */
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.6s; /* Smooth flip transition */
  transform-style: preserve-3d; /* Preserve the 3D effect */
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'}; /* Flip */
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide back when showing front */
  border-bottom: 4px solid rgba(0, 0, 0, 0.1); /* Bottom border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  border-bottom-left-radius: 10px; /* Rounded bottom-left corner */
  border-bottom-right-radius: 10px; /* Rounded bottom-right corner */
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide front when showing back */
  transform: rotateY(180deg); /* Position back side */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content */
  background: #f7f7f7; /* Back side background */
  border-radius: 10px; /* Rounded corners */
  border-bottom-left-radius: 10px; /* Rounded bottom-left corner */
  border-bottom-right-radius: 10px; /* Rounded bottom-right corner */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const EventImage = styled.img`
  width: 100%; /* Full width of the card */
  height: 180px; /* Increased height for the image */
  object-fit: cover; /* Cover the area without distortion */
  border-top-left-radius: 10px; /* Rounded top-left corner */
  border-top-right-radius: 10px; /* Rounded top-right corner */
`;

const EventInfo = styled.div`
  padding: 10px; /* Reduced padding inside the info section */
  text-align: center; /* Center text */
`;

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to track card flip

  const handleCardClick = () => {
    setIsFlipped((prevState) => !prevState); // Toggle flip state on click
  };

  return (
    <Card isFlipped={isFlipped} onClick={handleCardClick}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <EventImage src={event.image} alt={event.name} />
          <EventInfo>
            <h3>{event.name}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            {event.startDate && event.endDate && (
              <p>
                {event.startDate.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                -{' '}
                {event.endDate.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            )}
            {event.location && <p>{event.location}</p>}
          </EventInfo>
        </CardFront>
        <CardBack>
          <h3>{event.name}</h3>
          <p>{event.description}</p>{' '}
          {/* Use event.description here for more details */}
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default EventCard;
