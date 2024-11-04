import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState, cloneElement, Children } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const handleCloseMenu = () => setIsMenuOpen(false);

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
          <svg
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M0 6h16M0 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`w-full sm:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <ul className="navbar flex flex-col items-center text-xl font-medium text-gray-800 sm:flex-row">
          {Children.map(props.children, (child) =>
            cloneElement(child as React.ReactElement, {
              onClick: handleCloseMenu,
            })
          )}
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

export { NavbarTwoColumns };
