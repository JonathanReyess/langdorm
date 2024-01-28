import type { ReactNode } from 'react';

// Define the type for the props expected by the CTABanner component
type ICTABannerProps = {
  title: string; // Title for the call-to-action banner
  subtitle: string; // Subtitle or additional information for the call-to-action banner
  button: ReactNode; // ReactNode for the button component to be included in the banner
};

// CTABanner component renders a call-to-action banner with title, subtitle, and a button
const CTABanner = (props: ICTABannerProps) => (
  // Outer div with flex layout and rounded-md border for the call-to-action banner
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    {/* Div for the title and subtitle section */}
    <div className="text-2xl font-semibold">
      {/* Display the title with gray text color */}
      <div className="text-gray-900">{props.title}</div>
      {/* Display the subtitle with primary color text */}
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    {/* Div for the button section */}
    {/* Apply styles for whitespace handling and margin on small screens */}
    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button} {/* Render the button component */}
    </div>
  </div>
);

// Export the CTABanner component
export { CTABanner };
