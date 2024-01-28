// Importing VerticalFeatureRow component from '../feature/VerticalFeatureRow'
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
// Importing Section component from '../layout/Section'
import { Section } from '../layout/Section';

// Defining VerticalFeatures component
const VerticalFeatures = () => (
  // Rendering Section component with title and description
  <Section
    title="Who are we?" // Title for the section
    description="Today, LangDorm is home to 50 members. Arabic, French, German, Italian, Japanese, Korean, Chinese, Spanish, Hindi, Tamil, Bengali, Thai, and numerous other languages have all been a part of LangDorm over the years." // Description for the section
  >
    {/* Rendering VerticalFeatureRow components */}
    <VerticalFeatureRow
      title="What do we do?" // Title for the first feature row
      description="Common events include language lessons, cooking sessions, game nights, movie nights, and group trips to downtown Durham. Each year we take a group trip for the weekend somewhere outside of Durham! Last year, we spent the weekend in a cabin in Asheville, NC." // Description for the first feature row
      image="/assets/images/feature.svg" // Image source for the first feature row
      imageAlt="First feature alt text" // Alt text for the image of the first feature row
    />
    <VerticalFeatureRow
      title="The House Course" // Title for the second feature row
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim." // Description for the second feature row
      image="/assets/images/feature2.svg" // Image source for the second feature row
      imageAlt="Second feature alt text" // Alt text for the image of the second feature row
      reverse // Reverse the order of image and content for the second feature row
    />
    <VerticalFeatureRow
      title="Why Join?" // Title for the third feature row
      description="We are, at heart, a very wholesome and chill group of friends. Since we have members from many backgrounds and walks of life in our community, we always strive to create a very welcoming and accepting environment. We have members who have lived in the same city in the United States their whole lives, and others who have never been in the same house for more than a couple years. As long as you have an open mind and love food as much as we do, you will always be welcome in our community. We promise to keep you well nourished — literally and metaphorically." // Description for the third feature row
      image="/assets/images/feature3.svg" // Image source for the third feature row
      imageAlt="Third feature alt text" // Alt text for the image of the third feature row
    />
  </Section>
);

// Exporting VerticalFeatures component for use in other parts of the application
export { VerticalFeatures };
