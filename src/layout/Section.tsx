// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Defining a type for the props expected by the Section component
type ISectionProps = {
  title?: string; // An optional string representing the title of the section
  description?: string; // An optional string representing the description of the section
  yPadding?: string; // An optional string representing the vertical padding of the section
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the Section component, which takes props of type ISectionProps
const Section = (props: ISectionProps) => (
  // Rendering a div element with dynamic class names based on props
  <div
    className={`mx-auto max-w-screen-lg px-0 ${
      props.yPadding ? props.yPadding : 'py-16' // Using conditional operator to set default vertical padding
    }`}
  >
    {/* Rendering title and description if provided */}
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {/* Rendering title if provided */}
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {/* Rendering description if provided */}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {/* Rendering children elements */}
    {props.children}
  </div>
);

// Exporting the Section component for use in other parts of the application
export { Section };
