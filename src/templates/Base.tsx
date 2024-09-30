import { Analytics } from '@vercel/analytics/react';

// Importing Meta component from '../layout/Meta' file
import { Meta } from '../layout/Meta';
// Importing AppConfig from the '../utils/AppConfig' file
import { AppConfig } from '../utils/AppConfig';
// Importing Banner, Footer, Hero, and VerticalFeatures components from their respective files
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

// Defining the Base component, which serves as the base layout for the application
const Base = () => (
  // Rendering a div element with text color set to gray and anti-aliasing applied
  <div className="text-gray-600 antialiased">
    {/* Rendering the Meta component to set metadata for the page */}
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* Rendering the Hero component */}
    <Hero />
    {/* Rendering the VerticalFeatures component */}
    <VerticalFeatures />
    {/* Rendering the Banner component */}
    <Banner />
    {/* Rendering the Footer component */}
    <Footer />
    {/* Adding the Analytics component for tracking */}
    <Analytics />
  </div>
);

// Exporting the Base component for use in other parts of the application
export { Base };
