// Importing global CSS styles
import '../styles/global.css';

// Import the Analytics component from Vercel Analytics
import { Analytics } from '@vercel/analytics/react';
// Importing AppProps type from 'next/app' package
import type { AppProps } from 'next/app';
import Link from 'next/link';

import { Background } from '../background/Background';
// Import the necessary components for the navigation bar
import { Section } from '../layout/Section';
import DropdownMenu from '../navigation/DropdownMenu';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

// Define the MyApp component to include the navigation bar and analytics
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Background color="">
      {/* Section for the Navigation Bar */}
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/#about" className="nav-link about-link">
              About
            </Link>
          </li>
          <li>
            <DropdownMenu />
          </li>
          <li>
            <Link href="/events" className="nav-link events-link">
              Events
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
