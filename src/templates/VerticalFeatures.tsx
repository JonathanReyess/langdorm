import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
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
  <Section
    title="Who are we?"
    description="We're a diverse community of 35+ members encompassing speakers of Arabic, Chinese, French, German, Hindi, Italian, Japanese, Korean, Spanish, and many more languages."
    id="about"
  >
    {/* Center the image */}
    <div className="flex justify-center">
      <img src="/assets/LD-group-photo.jpg" alt="Who We Are Image" />
    </div>

    <VerticalFeatureRow
      title="What do we do?"
      description="Events range from language circles, cooking sessions, game nights, movie screenings, spontaneous trips, contests, picnics, and collaborations with language departments."
      images={images}
    />

    <VerticalFeatureRow
      title="Where do we live?"
      description="Members are expected to live in one of the newly renovated residence halls: Crowell BB! Crowell is conveniently located near campus facilities and boasts the iconic clocktower."
      images={{
        src: '/assets/common_room_2.png',
        alt: 'Common Room',
        caption: '',
      }}
      reverse
    />

    <VerticalFeatureRow
      title="The House Course"
      description="Members are encouraged to engage in conversation on the intricate interplay between language, culture, and food to foster the development of cultural competence."
      images={{
        src: '/assets/house_course.png',
        alt: 'Common Room',
        caption: '',
        width: '500',
        height: '450',
      }}
    />

    <VerticalFeatureRow
      title="Why join?"
      description="Love food, games, and learning languages? Join LangDorm to immerse yourself in a vibrant, multicultural community at Duke."
      images={{
        src: '/assets/mahjong.png',
        alt: 'Common Room',
        caption: '',
        width: '350',
        height: '350',
      }}
    />
  </Section>
);

export { VerticalFeatures };
