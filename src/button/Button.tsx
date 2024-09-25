import className from 'classnames'; // Importing classnames library for conditional class application

type IButtonProps = {
  xl?: boolean; // Optional prop for indicating extra large button size
  children: string; // Content of the button as a string
};

// Button component renders a styled button with customizable size and content
const Button = (props: IButtonProps) => {
  // Define the button classes based on the props
  const btnClass = className({
    btn: true, // Base class for all buttons
    'btn-xl': props.xl, // Class for extra large button if xl prop is true
    'btn-base': !props.xl, // Class for base-sized button if xl prop is not provided or false
    'btn-primary': true, // Class for primary button color
  });

  return (
    <div className={btnClass}>
      {' '}
      {/* Render the button with computed classes */}
      {props.children} {/* Render the content inside the button */}
      {/* Inline styles for button styling */}
      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center transition-transform duration-300 ease-in-out; /* Added transition */
            cursor: pointer; /* Ensure pointer on hover */
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-600;
          }

          .btn-primary:hover {
            @apply bg-primary-500;
            transform: scale(1.1); /* Scale on hover */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
          }
        `}
      </style>
    </div>
  );
};

// Export the Button component
export { Button };
