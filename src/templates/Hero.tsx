// Importing Link component from 'next/link' package
import Link from 'next/link';

// Importing Background, Button, HeroOneButton, Section, NavbarTwoColumns, and Logo components from their respective files
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';

// Defining the Hero component, which renders a hero section with navigation and a call-to-action button
const Hero = () => (
  <>
    {/* Rendering another Section component with customized vertical padding */}
    <Section yPadding="pt-30 pb-10">
      {/* Adjust the top padding here */}
      {/* Rendering a HeroOneButton component with a title, description, and call-to-action button */}
      <HeroOneButton
        title={
          // Custom title with an image wrapped in a div
          <div className="flex items-center justify-center">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="object-none"
              style={{
                height: '550px',
                width: '650px',
                marginLeft: '0px',
                marginRight: '17px',
                marginTop: '0px',
                marginBottom: '10px',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                display: 'block',
                clipPath: 'inset(1px 1px)',
              }}
            >
              <source src="assets/langdorm_animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        }
        description="Living Learning Community @ Duke University" // Description text
        button={
          // Call-to-action button wrapped in a div with margin top applied
          <div className="mt-5 flex justify-center">
            {/* Apply top margin (padding) here */}
            <Link href="https://docs.google.com/forms/d/1kQkNR2T4UdHErjTCv9neAAzSZkhpilbb3kK1Dzqfx3c">
              <Button xl>Spring 2025 Application</Button>{' '}
              {/* Button with link */}
            </Link>
          </div>
        }
      />
    </Section>
  </>
);

// Exporting the Hero component for use in other parts of the application
export { Hero };
