import React from 'react';
import EventsList from 'src/templates/EventList';
import { Footer } from '../templates/Footer';

const Events: React.FC = () => {
  return (
    <div>
      <div className="mb-0 overflow-hidden text-center">
        <img
          src="/assets/Events-4.png"
          alt="Events"
          className="mx-auto transition-transform duration-300 ease-in-out hover:scale-110" // Add transition and hover effect
          style={{ width: '200px', height: '200px' }} // Adjust the width and height as needed
        />
      </div>
      <EventsList />
      <Footer />
    </div>
  );
};

export default Events;
