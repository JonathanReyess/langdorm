// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Defining a type for the props expected by the HeroOneButton component
type IHeroOneButtonProps = {
  title: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  description: string; // A string representing the description for the hero section
  button: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the HeroOneButton component, which takes props of type IHeroOneButtonProps
const HeroOneButton = (props: IHeroOneButtonProps) => (
  // Rendering a header element with the class "text-center"
  <header className="text-center">
    {/* Rendering the title passed as a prop */}
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    {/* Rendering the description passed as a prop */}
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    {/* Rendering the button passed as a prop */}
    {props.button}
  </header>
);

// Exporting the HeroOneButton component for use in other parts of the application
export { HeroOneButton };
