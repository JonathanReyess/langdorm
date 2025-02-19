// Importing global CSS styles
import '../styles/global.css';

// Import the Analytics component from Vercel Analytics
import { Analytics } from '@vercel/analytics/react';
// Importing AppProps type from 'next/app' package
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Script from 'next/script';

import { Background } from '../components/background/Background';
// Import the necessary components for the navigation bar
import { Section } from '../components/layout/Section';
import DropdownMenu from '../components/navigation/DropdownMenu';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

// Define the MyApp component to include the navigation bar and analytics
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=6LfFaNwqAAAAAJ91c_elIfJoHU2nRmY3YrZeQbUB`}
      async
      defer
    />
    <Background color="">
      {/* Section for the Navigation Bar */}
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="sm:mr-5">
            <Link href="/#about" className="nav-link about-link">
              About
            </Link>
          </li>
          <li className="sm:mr-5">
            <DropdownMenu />
          </li>
          <li className="sm:mr-5">
            <Link href="/events" className="nav-link events-link">
              Events
            </Link>
          </li>
          <li className="sm:ml-5">
            <Link href="/contact" className="nav-link contact-link">
              Contact
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>

    {/* Rendering the current page component */}
    <Component {...pageProps} />

    {/* Adding Vercel Analytics */}
    <Analytics />
  </>
);

// Exporting the MyApp component as the default export for use in the application
export default MyApp;
