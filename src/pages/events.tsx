// pages/index.tsx
import React from 'react';
import EventsList from 'src/templates/EventList';

import { EventHero } from '../templates/eventsHero';
import { Footer } from '../templates/Footer';
import EventScheduler from '../templates/Scheduler';

const Events: React.FC = () => {
  return (
    <div>
      <EventHero />
      <EventsList />
      <EventScheduler />
      <Footer />
    </div>
  );
};

export default Events;
