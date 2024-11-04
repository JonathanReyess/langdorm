import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

import type { Event } from '../data/eventsData';
import { events } from '../data/eventsData';
import EventCard from './EventCard';

const ListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  width: 100%; /* Make width responsive */
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for mobile */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0; /* Reduce margin for mobile */

  @media (max-width: 768px) {
    margin: 20px 0; /* Further reduce margin for smaller screens */
  }
`;

const ToggleButton = styled.button`
  width: 200px; /* Set a fixed width for consistent size on all screens */
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  background-color: #c4b5fd;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition:
    transform 0.3s,
    background-color 0.3s,
    box-shadow 0.3s;

  &:hover {
    background-color: #a68cfc;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Remove the mobile-specific width adjustment */
`;

const EventsList: React.FC = () => {
  const [showPast, setShowPast] = useState(false);

  const filteredEvents = events.filter((event) => event.isPast === showPast);

  return (
    <div>
      <ButtonContainer>
        <ToggleButton onClick={() => setShowPast(!showPast)}>
          {showPast
            ? `Past Events (${filteredEvents.length})`
            : `Upcoming Events (${filteredEvents.length})`}
        </ToggleButton>
      </ButtonContainer>
      <ListContainer as={motion.div} whileTap={{ cursor: 'grabbing' }}>
        {filteredEvents.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ListContainer>
    </div>
  );
};

export default EventsList;
