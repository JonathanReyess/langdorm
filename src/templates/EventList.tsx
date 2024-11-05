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
  width: 100%;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const ToggleButton = styled.button`
  width: 200px;
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
`;

const EventsList: React.FC = () => {
  const [showPast, setShowPast] = useState(false);

  // Filter and sort events based on the showPast state
  const filteredEvents = events
    .filter((event) => event.isPast === showPast)
    .sort((a, b) => {
      if (showPast) {
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Descending order for past events
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime(); // Ascending order for upcoming events
    });

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
