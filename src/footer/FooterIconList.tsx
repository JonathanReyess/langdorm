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
        // Styling anchor tags within the footer icon list (except the last one)
        .footer-icon-list :global(a:not(:last-child)) {
          @apply mr-3; // Applying right margin to create spacing between icons
        }

        // Styling anchor tags within the footer icon list
        .footer-icon-list :global(a) {
          @apply text-gray-500; // Applying gray text color to icons
        }

        // Styling anchor tags on hover within the footer icon list
        .footer-icon-list :global(a:hover) {
          @apply text-gray-700; // Applying darker gray text color on hover
        }

        // Styling SVG icons within the footer icon list
        .footer-icon-list :global(svg) {
          @apply fill-current w-5 h-5; // Applying current fill color and size to SVG icons
        }
      `}
    </style>
  </div>
);

// Exporting the FooterIconList component for use in other parts of the application
export { FooterIconList };
