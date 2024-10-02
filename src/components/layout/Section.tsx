import type { ReactNode } from 'react';

type ISectionProps = {
  id?: string; // An optional string representing the ID of the section
  title?: string; // An optional string representing the title of the section
  description?: string; // An optional string representing the description of the section
  yPadding?: string; // An optional string representing the vertical padding of the section
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the Section component
const Section = (props: ISectionProps) => (
  <div
    id={props.id} // Apply the id prop here
    className={`mx-auto max-w-screen-lg px-0 ${
      props.yPadding ? props.yPadding : 'py-16' // Using conditional operator to set default vertical padding
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
