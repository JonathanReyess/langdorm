// Importing Link component from 'next/link' package
import Link from 'next/link';
// Importing ReactNode type from the 'react' library
import type { ReactNode } from 'react';

// Defining a type for the props expected by the NavbarTwoColumns component
type INavbarProps = {
  logo: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the NavbarTwoColumns component, which takes props of type INavbarProps
const NavbarTwoColumns = (props: INavbarProps) => (
  // Rendering a div element with flexbox styling to create a navbar layout
  <div className="flex flex-wrap items-center justify-between">
    {/* Rendering logo as a link to the home page */}
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    {/* Rendering navigation menu */}
    <nav>
      {/* Rendering an unordered list for navigation items */}
      <ul className="navbar flex items-center text-xl font-medium text-gray-800">
        {props.children} {/* Rendering children elements passed as props */}
      </ul>
    </nav>

    {/* Styling for the navigation menu */}
    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

// Exporting the NavbarTwoColumns component for use in other parts of the application
export { NavbarTwoColumns };
