// Importing global CSS styles
import '../styles/global.css';

// Import the Analytics component from Vercel Analytics
import { Analytics } from '@vercel/analytics/react';
// Importing AppProps type from 'next/app' package
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import { Background } from '../components/background/Background';
// Import the necessary components for the navigation bar
import { Section } from '../components/layout/Section';
import DropdownMenu from '../components/navigation/DropdownMenu';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

// Define the MyApp component to include the navigation bar and analytics
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>LangDorm - Connect, Learn, and Share Languages</title>
      <meta
        name="description"
        content="LangDorm is a community for language enthusiasts to connect, learn, and share."
      />
      <meta
        name="keywords"
        content="LangDorm, language learning, community, cultural appreciation"
      />
      <meta
        property="og:title"
        content="LangDorm - Connect, Learn, and Share Languages"
      />
      <meta
        property="og:description"
        content="LangDorm is a community for language enthusiasts to connect, learn, and share."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://langdorm.org/" />
      <meta property="og:image" content="/path/to/your-image.jpg" />
      <meta name="robots" content="index, follow" />
    </Head>

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
