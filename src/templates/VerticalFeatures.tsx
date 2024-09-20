// Importing VerticalFeatureRow component from '../feature/VerticalFeatureRow'
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
// Importing Section component from '../layout/Section'
import { Section } from '../layout/Section';

// Defining VerticalFeatures component
const VerticalFeatures = () => (
  // Rendering Section component with title and description
  <Section
      title="Who are we?" // Title for the section
      description="We're a diverse community of over 60 members encompassing speakers of Arabic, Chinese, French, German, Hindi, Italian, Japanese, Korean, Spanish, and many more languages." // Description for the section
      id="about"
    >
     {/* Center the image using Tailwind CSS classes */}
     <div className="flex justify-center">
        <img src="/assets/LD-group-photo.jpg" alt="Who We Are Image" />
      </div>
    {/* Rendering VerticalFeatureRow components */}
    <VerticalFeatureRow
      title="What do we do?" // Title for the first feature row
      description="Events range from language circles, cooking sessions, game nights, movie screenings, downtown trips, contests, picnics, and collaborations with language departments." // Description for the first feature row
      image="/assets/images/feature.svg" // Image source for the first feature row
      imageAlt="First feature alt text" // Alt text for the image of the first feature row
    />
    <VerticalFeatureRow
      title="Where do we live?" // Title for the second feature row
      description="All members are expected to live in our section Crowell BB for at least their first-year. One of the newly renovated residence halls, Crowell is conveniently located near the university's athletics facilities and boasts the West Campus iconic clocktower, while having a more intimate inner quad for house events and gatherings." // Description for the second feature row
      image="/assets/section.jpeg" // Image source for the second feature row
      imageAlt="Second feature alt text" // Alt text for the image of the second feature row
      // Reverse the order of image and content for the second feature row
    />
    <VerticalFeatureRow
      title="The House Course" // Title for the second feature row
      description="Explore the ways in which language shapes culture, from power dynamics to belief systems, closely engaging in conversation on the intricate interplay between language, culture, and food to foster the development of essential cultural competence." // Description for the second feature row
      image="/assets/words_mirror_worlds.jpg" // Image source for the second feature row
      imageAlt="Second feature alt text" // Alt text for the image of the second feature row
      reverse // Reverse the order of image and content for the second feature row
    />
    <VerticalFeatureRow
      title="Why Join?" // Title for the third feature row
      description="We're big family of friends fostering a warm and welcomig atmosphere. Whether you're multilingual-or not, you'll discover a place to call home with us. As long as you love food and cultural appreciation, anticipate a warm welcome and a supportive ambiance that prioritizes inclusivity!" // Description for the third feature row
      image="/assets/images/feature3.svg" // Image source for the third feature row
      imageAlt="Third feature alt text" // Alt text for the image of the third feature row
    />
  </Section>
);

// Exporting VerticalFeatures component for use in other parts of the application
export { VerticalFeatures };
