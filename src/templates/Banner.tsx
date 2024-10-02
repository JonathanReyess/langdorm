// Importing Link component from 'next/link' package
import Link from 'next/link';

// Importing Button and CTABanner components from their respective files
import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
// Importing Section component from '../layout/Section' file
import { Section } from '../components/layout/Section';

// Defining the Banner component, which renders a section with a call-to-action banner
const Banner = () => (
  // Rendering a Section component to contain the banner content
  <Section id="">
    {/* Rendering a CTABanner component with title, subtitle, and button */}
    <CTABanner
      title={
        <>
          Follow us on Instagram{' '}
          <Link
            href="https://www.instagram.com/dukelangdorm"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dukelangdorm
          </Link>{' '}
          and be on the lookout for more information!
        </>
      } // Title for the banner
      button={
        // Button for the banner, wrapped in a Link component
        <Link href="/join">
          <Button>Join</Button> {/* Button text */}
        </Link>
      }
    />
  </Section>
);

// Exporting the Banner component for use in other parts of the application
export { Banner };
