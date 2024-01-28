// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Defining a type for the props expected by the Background component
type IBackgroundProps = {
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  color: string; // A string representing the background color of the component
};

// Defining the Background component, which takes props of type IBackgroundProps
const Background = (props: IBackgroundProps) => (
  // Rendering a div element with the provided background color and children
  <div className={props.color}>{props.children}</div>
);

// Exporting the Background component for use in other parts of the application
export { Background };
