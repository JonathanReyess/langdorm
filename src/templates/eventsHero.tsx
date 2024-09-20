// Importing Link component from 'next/link' package
import Link from 'next/link';
// Importing Background, Button, HeroOneButton, Section, NavbarTwoColumns, and Logo components from their respective files
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import DropdownMenu from '../navigation/DropdownMenu';

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
          <Link href="/#about" className="nav-link about-link">About</Link> {/* Link to the about page */}
        </li>
        <li>
          <DropdownMenu />
        </li>
        <li>
          <Link href="" className="nav-link events-link">Events</Link> {/* Link to the Members page */}
        </li> 
        {/* Additional navigation links rendered similarly */}
      </NavbarTwoColumns>
    </Section>

    {/* Rendering another Section component with customized vertical padding */}
    <Section yPadding="pt-0 pb-20"> {/* Adjust the top padding here */}
      {/* Container for large text and image */}
      <div className="text-center mb-8"> {/* Center-aligns text and adds margin-bottom */}
        {/* Large text */}
        <h1 className="text-4xl mb-4 text-gray-800">Events</h1>
      </div>
      {/* Rendering the image */}
    </Section>
  </Background>
);

// Exporting the Hero component for use in other parts of the application
export { EventHero };

