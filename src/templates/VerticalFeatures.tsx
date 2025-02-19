import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';

const images = [
  {
    src: '/assets/fiona_pie.jpg',
    alt: 'First feature alt text',
    caption: 'LangsGiving Pie 2024',
    width: '300',
    height: '400',
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

const facultyAdvisors = [
  {
    src: '/people/luciana_fellin.png',
    alt: 'Faculty Advisor 1',
    name: 'Dr. Luciana Fellin',
  },
  {
    src: '/people/eileen_chow.png',
    alt: 'Faculty Advisor 2',
    name: 'Dr. Eileen Chow',
  },
];

const VerticalFeatures = () => (
  <Section
    title="Who are we?"
    description="We're a diverse community of 50+ members encompassing speakers of Arabic, Chinese, French, German, Hindi, Italian, Japanese, Korean, Spanish, and many more languages."
    id="about"
  >
    <div className="flex justify-center">
      <img
        src="/assets/ld_2023.jpg"
        alt="Who We Are Image"
        className="rounded-lg"
      />
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
      reverse
    />
    <Section
      title="Faculty Advisors"
      description="Meet the faculty members who support LangDorm."
      id="faculty"
      className="mt-12"
    >
      <div className="mb-0 flex justify-center gap-8">
        {facultyAdvisors.map((advisor, index) => (
          <div key={index} className="text-center">
            <img
              src={advisor.src}
              alt={advisor.alt}
              className="mx-auto h-52 w-52 rounded object-cover"
            />
            <p className="mt-2 font-semibold">{advisor.name}</p>
          </div>
        ))}
      </div>
    </Section>
  </Section>
);

export { VerticalFeatures };
