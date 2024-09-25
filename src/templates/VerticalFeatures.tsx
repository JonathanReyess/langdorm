// Importing VerticalFeatureRow component from '../feature/VerticalFeatureRow'
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
// Importing Section component from '../layout/Section'
import { Section } from '../layout/Section';

const images = [
  {
    src: '/assets/fiona_pie.jpg',
    alt: 'First feature alt text',
    caption: 'LangsGiving Pie 2024',
    width: '300', // Specify width
    height: '400', // Specify height
  },
  {
    src: '/assets/ice_skating.jpg',
    alt: 'Second feature alt text',
    caption: 'LangDorm on Ice 2024 ',
    width: '300',
    height: '400',
  },
  {
    src: '/assets/assasins.jpg',
    alt: 'Third feature alt text',
    caption: 'Spoon Assassins Champions 2024',
    width: '300',
    height: '400',
  },
];

// Defining VerticalFeatures component
const VerticalFeatures = () => (
  // Rendering Section component with title and description
  <Section
    title="Who are we?" // Title for the section
    description="We're a diverse community of 35+ members encompassing speakers of Arabic, Chinese, French, German, Hindi, Italian, Japanese, Korean, Spanish, and many more languages." // Description for the section
    id="about"
  >
    {/* Center the image using Tailwind CSS classes */}
    <div className="flex justify-center">
      <img src="/assets/LD-group-photo.jpg" alt="Who We Are Image" />
    </div>
    {/* Rendering VerticalFeatureRow components */}
    <VerticalFeatureRow
      title="What do we do?" // Title for the first feature row
      description="Events range from language circles, cooking sessions, game nights, movie screenings, spontaneous trips, contests, picnics, and collaborations with language departments." // Description for the first feature row
      images={images}
    />
    <VerticalFeatureRow
      title="Where do we live?"
      description="Members are expected to live in one of the newly rennovated residence halls: Crowell BB! Crowell is conveniently located near campus facilities and boasts the iconic clocktower."
      images={{
        src: '/assets/common_room_2.png',
        alt: 'Common Room',
        caption: '',
      }}
      reverse
    />
    <VerticalFeatureRow
      title="The House Course" // Title for the second feature row
      description="Members are encouraged to engage in conversation on the intricate interplay between language, culture, and food to foster the development of cultural competence." // Description for the second feature row
      images={{
        src: '/assets/house_course.png',
        alt: 'Common Room',
        caption: '',
        width: '500', // Specify width for this single image
        height: '450', // Specify height for this single image
      }} // Image source for the second feature row
    />
    <VerticalFeatureRow
      title="Why join?" // Title for the third feature row
      description="Love food, games, and learning languages? Join LangDorm to immerse yourself in a vibrant, multicultural community at Duke." // Description for the third feature row
      images={{
        src: '/assets/mahjong.png',
        alt: 'Common Room',
        caption: '',
        width: '350', // Specify width for this single image
        height: '350', // Specify height for this single image
      }} // Image source for the third feature row
    />
  </Section>
);

// Exporting VerticalFeatures component for use in other parts of the application
export { VerticalFeatures };
