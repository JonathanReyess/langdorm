// Importing Link component from 'next/link' package
import Link from 'next/link';
// Importing Background, Button, HeroOneButton, Section, NavbarTwoColumns, and Logo components from their respective files
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

// Defining the Hero component, which renders a hero section with navigation and a call-to-action button
const Hero = () => (
  // Rendering a Background component with a gray background color
  <Background color="bg-gray-100">
    {/* Rendering a Section component with vertical padding */}
    <Section yPadding="py-6">
      {/* Rendering a NavbarTwoColumns component with a logo and navigation links */}
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* Navigation links for the hero section */}
        <li>
          <Link href="">Home</Link> {/* Link to the home page */}
        </li>
        <li>
        <Link href="#dashboard" scroll={false}>About</Link> {/* Link to the about page */}
        </li>
        <li>
          <Link href="/members">Members</Link> {/* Link to the Members page */}
        </li>
        <li>
          <Link href="">Events</Link> {/* Link to the Members page */}
        </li>
        {/* Additional navigation links rendered similarly */}
      </NavbarTwoColumns>
    </Section>

    {/* Rendering another Section component with customized vertical padding */}
    <Section yPadding="pt-30 pb-20"> {/* Adjust the top padding here */}
      {/* Rendering a HeroOneButton component with a title, description, and call-to-action button */}
      <HeroOneButton
        title={ // Custom title with an image wrapped in a div
          <div className="flex justify-center items-center">
            <img
              src="assets/langdorm-logo.png" // Image source
              alt="LangDorm Logo" // Alternative text for accessibility
              className="object-none" // CSS class for image styling
              style={{ height: "410px", width: "1080px", marginLeft: "40px" }} // Inline style for image dimensions
            />
          </div>
        }
        description="Living Learning Community @ Duke University" // Description text
        button={ // Call-to-action button wrapped in a div with margin top applied
          <div className="flex justify-center mt-5"> {/* Apply top margin (padding) here */}
            <Link href="">
              <Button xl >Rush Spring 2024</Button> {/* Button with link */}
            </Link>
          </div>
        }
      />
    </Section>
  </Background>
);

// Exporting the Hero component for use in other parts of the application
export { Hero };
