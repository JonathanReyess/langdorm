// Importing Link component from 'next/link' package
import Link from 'next/link';

// Importing Background, CenteredFooter, Section, and Logo components from their respective files
import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

// Defining the Footer component, which renders a footer section with centered content
const Footer = () => (
  // Rendering a Background component with a gray background color
  <Background color="bg-gray-100">
    {/* Rendering a Section component to contain the footer content */}
    <Section>
      {/* Rendering a CenteredFooter component with logo, icon list, and navigation links */}
      <CenteredFooter
        logo={<Logo />} // Logo component as the logo for the footer
        iconList={ // Icon list containing social media icons, each wrapped in a Link component
          <>
            {/* Social media icons as SVG images, each wrapped in a Link component */}
            <Link href="/">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path for the social media icon */}
              </svg>
            </Link>
            {/* Additional social media icons rendered similarly */}
          </>
        }
      >
        {/* Navigation links for the footer, each wrapped in a list item */}
        <li>
          <Link href="/">Home</Link> {/* Link to the home page */}
        </li>
        {/* Additional navigation links rendered similarly */}
      </CenteredFooter>
    </Section>
  </Background>
);

// Exporting the Footer component for use in other parts of the application
export { Footer };
