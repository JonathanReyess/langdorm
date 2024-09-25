// components/DropdownMenu.tsx
import { Menu, Transition } from '@headlessui/react'; // Import Menu and Transition components from @headlessui/react for dropdown functionality and animations
import { Fragment } from 'react'; // Import Fragment from React to wrap the Transition component
// import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Import ChevronDownIcon for the dropdown indicator
import Link from 'next/link'; // Import Link from Next.js for client-side navigation

// Define the DropdownMenu component as a functional component
const DropdownMenu: React.FC = () => (
  // Use Menu component from @headlessui/react as a wrapper for the dropdown
  // className="navbar flex items-center text-xl font-medium text-gray-800"
  <Menu as="div" className="relative inline-block text-left">
    <div>
      {/* Menu.Button is used to create the clickable area that toggles the dropdown */}
      <Menu.Button
        as="div" // Use `div` to make the button act as text instead of a button
        className="inline-flex w-full justify-center text-xl font-medium
         text-gray-800 hover:text-primary-500 cursor-pointer focus:outline-none 
         focus-visible:ring-2 focus-visible:ring-black/75">
        Members
        {/* ChevronDownIcon indicates that the menu can be expanded, removed from below: <ChevronDownIcon className="ml-2 h-5 w-5 text-black" aria-hidden="true" /> */} 
      </Menu.Button>
    </div>
    {/* Transition component adds animations for dropdown appearance and disappearance */}
    <Transition
      as={Fragment} // Fragment is used to avoid adding extra nodes to the DOM
      enter="transition ease-out duration-100" // Define the enter transition styles
      enterFrom="transform opacity-0 scale-95" // Initial styles before entering
      enterTo="transform opacity-100 scale-100" // Final styles after entering
      leave="transition ease-in duration-75" // Define the leave transition styles
      leaveFrom="transform opacity-100 scale-100" // Initial styles before leaving
      leaveTo="transform opacity-0 scale-95" // Final styles after leaving
    >
      {/* Menu.Items is the container for the dropdown menu items */}
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" style={{ zIndex: 1 }}>
        <div className="px-1 py-1">
          {/* Menu.Item represents each item in the dropdown menu */}
          <Menu.Item>
            {({ active }) => (
              <Link href="/2023" passHref>
                <div
                  className={`${
                    active ? 'bg-primary-500 text-white' : 'text-black'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                >
                  2023
                </div>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/2024" passHref>
                <div
                  className={`${
                    active ? 'bg-primary-500 text-white' : 'text-black'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                >
                  2024
                </div>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/2025" passHref>
                <div
                  className={`${
                    active ? 'bg-primary-500 text-white' : 'text-black'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                >
                  2025
                </div>
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default DropdownMenu; // Export the DropdownMenu component for use in other parts of the application
