import { useState } from 'react'; // Import useState hook for menu toggle
import Link from 'next/link'; // Importing Link component from 'next/link'
import type { ReactNode } from 'react'; // Importing ReactNode type from the 'react' library

// Defining a type for the props expected by the NavbarTwoColumns component
type INavbarProps = {
  logo: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
  children: ReactNode; // ReactNode type represents the type of children elements that can be rendered within a React component
};

// Defining the NavbarTwoColumns component, which takes props of type INavbarProps
const NavbarTwoColumns = (props: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track whether the mobile menu is open

  return (
    <div className="flex flex-wrap items-center justify-between py-4">
      {/* Logo section */}
      <div>
        <Link href="/">{props.logo}</Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 hover:text-primary-500 focus:outline-none"
        >
          {/* Hamburger icon: 3 bars */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Menu (shown by default on larger screens) */}
      <nav className={`w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}>
        <ul className="navbar flex flex-col sm:flex-row items-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      {/* Styling for the navigation menu */}
      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-4 sm:mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply sm:mr-5;
          }
        `}
      </style>
    </div>
  );
};

// Exporting the NavbarTwoColumns component for use in other parts of the application
export { NavbarTwoColumns };
