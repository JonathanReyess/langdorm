// Importing Link component from 'next/link' package
import Link from 'next/link';

// Importing Button and CTABanner components from their respective files
import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
// Importing Section component from '../layout/Section' file
import { Section } from '../layout/Section';

// Defining the Banner component, which renders a section with a call-to-action banner
const Banner = () => (
  // Rendering a Section component to contain the banner content
  <Section id="">
    {/* Rendering a CTABanner component with title, subtitle, and button */}
    <CTABanner
      title="Follow us on Instagram @dukelangdorm and be on the lookout for more information!" // Title for the banner
      // subtitle="Follow us on Instagram and be on the lookout for more information!" // Subtitle for the banner
      button={ // Button for the banner, wrapped in a Link component
        <Link href="">
          <Button>Join</Button> {/* Button text */}
        </Link>
      }
    />
  </Section>
);


// Exporting the Banner component for use in other parts of the application
export { Banner };
