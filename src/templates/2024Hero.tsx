// Importing Background, Button, HeroOneButton, Section, NavbarTwoColumns, and Logo components from their respective files
import { Section } from '../layout/Section';

// Defining the Hero component, which renders a hero section with navigation and a call-to-action button
const MemberHero = () => (
  // Rendering a Background component with a gray background color
  <>
    {/* Rendering another Section component with customized vertical padding */}
    <Section yPadding="pt-0 pb-20">
      {/* Adjust the top padding here */}
      {/* Container for large text and image */}
      <div className="mb-8 text-center">
        {/* Center-aligns text and adds margin-bottom */}
        {/* Large text */}
        <h1 className="mb-4 text-4xl text-gray-800">2023-2024</h1>
      </div>
      {/* Rendering the image */}
      <div className="flex items-center justify-center">
        <div className="relative h-96 w-custom-1200">
          {/* Set the desired width and height */}
          <img
            src="/assets/LD-group-photo.jpg" // Image source
            alt="LangDorm Logo" // Alternative text for accessibility
            className="absolute inset-0 h-full w-full object-contain" // Fit the image to cover the container
          />
        </div>
      </div>
    </Section>
  </>
);

// Exporting the Hero component for use in other parts of the application
export { MemberHero };
