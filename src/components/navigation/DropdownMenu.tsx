import { Menu, Transition } from '@headlessui/react'; // Import Menu and Transition components from @headlessui/react for dropdown functionality and animations
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import { Fragment } from 'react'; // Import Fragment from React to wrap the Transition component

// Define the DropdownMenu component as a functional component
const DropdownMenu: React.FC = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      {/* Menu.Button is used to create the clickable area that toggles the dropdown */}
      <Menu.Button
        as="div" // Use `div` to make the button act as text instead of a button
        className="inline-flex w-full cursor-pointer justify-center p-2
         text-xl font-medium text-gray-800 hover:text-primary-500 
         focus:outline-none focus-visible:ring-2
         focus-visible:ring-black/75 sm:p-4 sm:text-xl" // Add padding for touch-friendly targets on small screens
      >
        Members
      </Menu.Button>
    </div>
    {/* Transition component adds animations for dropdown appearance and disappearance */}
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none
        sm:w-56" // Full width on mobile, fixed width on larger screens
        style={{ zIndex: 1 }}
      >
        <div className="p-1">
          {/* Menu.Item represents each item in the dropdown menu */}
          <Menu.Item>
            {({ active }) => (
              <Link href="/2023" passHref>
                <div
                  className={`${
                    active ? 'bg-primary-500 text-white' : 'text-black'
                  } group flex w-full cursor-pointer items-center rounded-md p-4 text-base sm:p-2 sm:text-sm`} // Larger padding and font size for mobile
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
                  } group flex w-full cursor-pointer items-center rounded-md p-4 text-base sm:p-2 sm:text-sm`} // Larger padding and font size for mobile
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
                  } group flex w-full cursor-pointer items-center rounded-md p-4 text-base sm:p-2 sm:text-sm`} // Larger padding and font size for mobile
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

export default DropdownMenu;
