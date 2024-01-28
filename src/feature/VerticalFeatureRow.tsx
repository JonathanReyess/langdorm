// Importing className function from 'classnames' package
import className from 'classnames';
// Importing useRouter hook from 'next/router' package
import { useRouter } from 'next/router';

// Defining a type for the props expected by the VerticalFeatureRow component
type IVerticalFeatureRowProps = {
  title: string; // A string representing the title of the vertical feature row
  description: string; // A string representing the description of the vertical feature row
  image: string; // A string representing the URL of the image for the vertical feature row
  imageAlt: string; // A string representing the alt text for the image
  reverse?: boolean; // An optional boolean indicating whether the layout should be reversed
};

// Defining the VerticalFeatureRow component, which takes props of type IVerticalFeatureRowProps
const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  // Generating class names for the vertical feature row based on props
  const verticalFeatureClass = className(
    'mt-20', // Margin top
    'flex', // Flex display
    'flex-wrap', // Wrap items within flex container
    'items-center', // Align items along the center vertically
    {
      'flex-row-reverse': props.reverse, // Reverse the order of flex items if 'reverse' prop is true
    },
  );

  // Getting the router object using the useRouter hook
  const router = useRouter();

  // Returning JSX for the VerticalFeatureRow component
  return (
    <div className={verticalFeatureClass}>
      {/* Left column containing title and description */}
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3> {/* Title */}
        <div className="mt-6 text-xl leading-9">{props.description}</div> {/* Description */}
      </div>

      {/* Right column containing the image */}
      <div className="w-full p-6 sm:w-1/2">
        {/* Image element with src and alt attributes */}
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

// Exporting the VerticalFeatureRow component for use in other parts of the application
export { VerticalFeatureRow };
