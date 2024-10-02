import Head from 'next/head';
import { useRouter } from 'next/router'; // Uncomment this
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

// Defining a type for the props expected by the Meta component
type IMetaProps = {
  title: string; // A string representing the title of the page
  description: string; // A string representing the description of the page
  canonical?: string; // An optional string representing the canonical URL of the page
};

// Defining the Meta component, which takes props of type IMetaProps
const Meta = (props: IMetaProps) => {
  const router = useRouter(); // Use the router object

  // Returning a fragment containing Head and NextSeo components
  return (
    <>
      {/* Head component containing meta tags for the page */}
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        {/* Links for different sizes of favicon */}
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/assets/apple-touch-icon.png`} // Use router.basePath
          key="apple"
        />
        <link
          rel="android-chrome-icon"
          href={`${router.basePath}/assets/android-chrome-192x192.png`} // Use router.basePath
          key="android192"
        />
        <link
          rel="android-chrome-icon"
          href={`${router.basePath}/assets/android-chrome-512x512.png`} // Use router.basePath
          key="android512"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/assets/favicon-32x32.png`} // Use router.basePath
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/assets/favicon-16x16.png`} // Use router.basePath
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/assets/favicon.ico`} // Use router.basePath
          key="favicon"
        />
      </Head>
      {/* NextSeo component for configuring SEO-related metadata */}
      <NextSeo
        title={props.title} // Setting the title of the page
        description={props.description} // Setting the description of the page
        canonical={props.canonical} // Setting the canonical URL of the page
        // Configuring Open Graph metadata for social sharing
        openGraph={{
          title: props.title, // Setting the Open Graph title
          description: props.description, // Setting the Open Graph description
          url: props.canonical, // Setting the Open Graph canonical URL
          locale: AppConfig.locale, // Setting the Open Graph locale
          site_name: AppConfig.site_name, // Setting the Open Graph site name
          images: [
            {
              url: `${router.basePath}/assets/langdorm-solid-bg.png`, // Use router.basePath for Open Graph image
              width: 1200,
              height: 630,
              alt: 'LangDorm Open Graph Image',
            },
          ],
        }}
      />
    </>
  );
};

// Exporting the Meta component for use in other parts of the application
export { Meta };
