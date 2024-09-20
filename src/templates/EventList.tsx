import React, { useState } from 'react';
import styled from 'styled-components';
import { events, Event } from '../templates/eventsData';
import EventCard from '../templates/EventCard';
import { motion } from 'framer-motion';

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
  margin: 20px 0; /* Add some vertical margin */
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #c4b5fd;
  color: white;
  border-radius: 5px;
  cursor: pointer;
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
