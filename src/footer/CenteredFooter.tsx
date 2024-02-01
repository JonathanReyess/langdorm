// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Importing FooterCopyright and FooterIconList components from their respective files
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

// Defining a type for the props expected by the CenteredFooter component
type ICenteredFooterProps = {
  id?: string; // An optional string representing the ID of the section
  logo: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  iconList: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the CenteredFooter component, which takes props of type ICenteredFooterProps
const CenteredFooter = (props: ICenteredFooterProps) => (
  // Rendering a div element with the "text-center" class
  <div className="text-center">
    {props.logo} {/* Rendering the logo passed as a prop */}
    
    {/* Rendering a navigation element */}
    <nav>
      {/* Rendering an unordered list with classes for styling */}
      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
        {props.children} {/* Rendering children elements passed as props */}
      </ul>
    </nav>

    {/* Rendering FooterIconList component with iconList prop */}
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    {/* Rendering FooterCopyright component */}
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    {/* Styling for the navbar list items */}
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4; 
        }
      `}
    </style>
  </div>
);

// Exporting the CenteredFooter component for use in other parts of the application
export { CenteredFooter };
