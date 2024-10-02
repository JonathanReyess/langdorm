import { Section } from '../layout/Section';

// Defining the Hero component, which renders a hero section with navigation and a call-to-action button
const EventHero = () => (
  <>
    {/* Rendering another Section component with customized vertical padding */}
    <Section yPadding="pt-0 pb-0">
      {/* Container for large image */}
      <div className="mb-0 overflow-hidden text-center">
        <img
          src="/assets/Events-4.png"
          alt="Events"
          className="mx-auto transition-transform duration-300 ease-in-out hover:scale-110" // Add transition and hover effect
          style={{ width: '200px', height: '200px' }} // Adjust the width and height as needed
        />
      </div>
    </Section>
    {/* Following content with negative margin */}
  </>
);

// Exporting the Hero component for use in other parts of the application
export { EventHero };
