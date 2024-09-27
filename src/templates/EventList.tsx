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
  width: calc(5 * 250px + 80px);
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center button horizontally */
  margin: 50px 0; /* Add some vertical margin */
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #c4b5fd;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition:
    transform 0.3s,
    background-color 0.3s,
    box-shadow 0.3s; /* Smooth transition for effects */

  &:hover {
    background-color: #a68cfc; /* Darker shade on hover */
    transform: scale(1.1); /* Slightly enlarge button */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const EventsList: React.FC = () => {
  const [showPast, setShowPast] = useState(false);

  // Filter events based on `showPast` state
  const filteredEvents = events.filter((event) => event.isPast === showPast);

  console.log('Events:', events); // Log to check events
  console.log('Filtered Events:', filteredEvents); // Log to check filtered events

  return (
    <div>
      {/* Container to center the button */}
      <ButtonContainer>
        {/* Button with event count */}
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
