// Importing AppConfig from '../utils/AppConfig' to access site configuration
import { AppConfig } from '../utils/AppConfig';
// Importing Image component from 'next/image' for optimized image rendering
import Image from 'next/image';

// Importing custom logo image from 'public/assets/language-svgrepo.svg'
import myLogo from 'public/assets/language-svgrepo.svg';

// Defining props interface for Logo component
type ILogoProps = {
  xl?: boolean; // Optional boolean prop for extra large size
};

// Defining Logo component which renders a logo with optional extra large size
const Logo = (props: ILogoProps) => {
  // Determining size based on prop value
  const size = props.xl ? '44' : '32';
  // Determining font style based on prop value
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  // Rendering logo image and site name wrapped in a span element
  return (
    <span className={`inline-flex items-center text-black ${fontStyle}`}>
      {/* Rendering Image component with custom logo */}
      <Image
        src={myLogo} // Specify custom logo image source
        alt="Your Logo" // Specify alt text for the logo for accessibility
        width={size} // Specify width of the logo
        height={size} // Specify height of the logo
      />

      {AppConfig.site_name} {/* Rendering site name */}
    </span>
  );
};

// Exporting Logo component for use in other parts of the application
export { Logo };
