// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Defining a type for the props expected by the FooterIconList component
type IFooterIconListProps = {
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the FooterIconList component, which takes props of type IFooterIconListProps
const FooterIconList = (props: IFooterIconListProps) => (
  // Rendering a div element with the class "footer-icon-list" and flexbox styling
  <div className="footer-icon-list flex flex-wrap">
    {props.children} {/* Rendering children elements passed as props */}

    {/* Styling for the footer icon list */}
    <style jsx>
      {`

        .footer-icon-list :global(a:not(:last-child)) {
          @apply mr-3; 
        }


        .footer-icon-list :global(a) {
          @apply text-gray-500; 
        }


        .footer-icon-list :global(a:hover) {
          @apply text-gray-700; 
        }


        .footer-icon-list :global(svg) {
          @apply fill-current w-5 h-5; 
        }
      `}
    </style>
  </div>
);

// Exporting the FooterIconList component for use in other parts of the application
export { FooterIconList };
