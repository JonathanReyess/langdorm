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
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-xl font-bold text-primary-500 sm:text-2xl">
        {props.title}
      </div>
      {props.subtitle && (
        <div className="text-sm text-white sm:text-lg">{props.subtitle}</div>
      )}
    </div>

    {/* Div for the button section */}
    <div className="mt-4 sm:ml-4 sm:mt-0">
      {/* Commented out the button component */}
      {/* <div className="rounded-md bg-white px-8 py-2 text-black">
        {props.button} 
      </div> */}
    </div>
  </div>
);

// Export the CTABanner component
export { CTABanner };



