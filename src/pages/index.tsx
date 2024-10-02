// Importing the Base component from the '../templates/Base' file
import { Base } from '../templates/Base';
import { Meta } from '../components/layout/Meta'; // Import the Meta component

// Defining the Index component, which renders the Base component
const Index = () => (
  <>
    {/* Meta component for SEO */}
    <Meta 
      title="LangDorm - Duke University's Language Living Learning Community"
      description="Welcome to Duke University's LangDorm Living Learning Community, where language enthusiasts gather to learn, connect, and explore cultures through languages. Join us for events, resources, and more."
      canonical="https://www.langdorm.org/"
    />
    {/* Rendering the Base component */}
    <Base />
  </>
);

// Exporting the Index component as the default export for use as a page in the application
export default Index;
