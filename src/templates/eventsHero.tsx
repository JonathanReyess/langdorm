// Importing Link component from 'next/link' package
import Link from 'next/link';

// Importing Background, Button, HeroOneButton, Section, NavbarTwoColumns, and Logo components from their respective files
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import DropdownMenu from '../navigation/DropdownMenu';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

// Defining the Hero component, which renders a hero section with navigation and a call-to-action button
const EventHero = () => (
  // Rendering a Background component with a gray background color
  <Background color="bg-gray-100">
    {/* Rendering a Section component with vertical padding */}
    <Section yPadding="py-6">
      {/* Rendering a NavbarTwoColumns component with a logo and navigation links */}
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* Navigation links for the hero section */}
        <li>
          <Link href="/#about" className="nav-link about-link">
            About
          </Link>{' '}
          {/* Link to the about page */}
        </li>
        <li>
          <DropdownMenu />
        </li>
        <li>
          <Link href="" className="nav-link events-link">
            Events
          </Link>{' '}
          {/* Link to the Members page */}
        </li>
        {/* Additional navigation links rendered similarly */}
      </NavbarTwoColumns>
    </Section>

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
  </Background>
);

// Exporting the Hero component for use in other parts of the application
export { EventHero };
