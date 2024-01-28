// Importing global CSS styles
import '../styles/global.css';

// Importing AppProps type from 'next/app' package
import type { AppProps } from 'next/app';

// Defining the MyApp component, which takes props of type AppProps
const MyApp = ({ Component, pageProps }: AppProps) => (
  // Rendering the Component with its props spread
  <Component {...pageProps} />
);

// Exporting the MyApp component as the default export for use in the application
export default MyApp;
