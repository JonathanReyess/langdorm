import type { ReactNode } from 'react';

// Define the type for the props expected by the CTABanner component
type ICTABannerProps = {
  title: string; // Title for the call-to-action banner
  subtitle?: string; // Subtitle or additional information for the call-to-action banner
  button?: ReactNode; // ReactNode for the button component to be included in the banner
};

// CTABanner component renders a call-to-action banner with title, subtitle, and a button
const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-transparent p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-8 sm:text-left">
    
    {/* Div for the title and subtitle section */}
    <div className="text-2xl font-bold ml-2 whitespace-nowrap text-ellipsis">
    <div className="text-primary-500">{props.title}</div>
      <div className="text-white">{props.subtitle}</div>
    </div>

    {/* Div for the button section */}
    <div className="bg-white text-white px-10 py-0 rounded-md">
    {/*{props.button} {/* Render the button component */}
    </div>
  </div>
);


// Export the CTABanner component
export { CTABanner };


