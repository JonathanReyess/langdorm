// pages/index.tsx
import React from 'react';
import EventsList from 'src/templates/EventList';

import { EventHero } from '../templates/eventsHero';
import { Footer } from '../templates/Footer';

const Events: React.FC = () => {
  return (
    <div>
      <EventHero />
      <EventsList />
      <Footer />
    </div>
  );
};

export default Events;
