import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

import membersData from '../data/2023_members.json'; // Import the JSON file directly
import { Footer } from '../templates/Footer';
import { MemberHero } from '../templates/MemberHero'; // Import the reusable Hero component

// Props type for the component
interface AboutPageProps {
  executiveMembers: any[];
  classesData: {
    [key: string]: any[];
  };
}

const AboutPage: NextPage<AboutPageProps> = ({
  executiveMembers,
  classesData,
}) => {
  // Function to render individual member squares
  const renderMemberSquare = (member: any) => (
    <div
      key={member.id}
      className="flex w-full flex-col items-center p-4 sm:w-1/2 md:w-1/4"
    >
      <div className="relative h-48 w-48 sm:h-60 sm:w-60">
        {/* Adjust sizes here */}
        <img
          src={member.imageUrl}
          alt={member.name}
          className={`h-full w-full object-cover`} // Changed class here
        />
      </div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-semibold">{member.name}</h2>
        <p className="text-sm text-black">
          <strong>Major:</strong> {member.major.replace('Major: ', '')}
        </p>
        <p className="text-sm text-black">
          <strong>Hometown:</strong> {member.hometown.replace('Hometown: ', '')}
        </p>
        <p className="text-sm text-black">
          <strong>Languages:</strong>{' '}
          {member.languages.replace('Languages: ', '')}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Use the Hero component with dynamic title and image */}
      <MemberHero title="2022-2023" imageSrc="/assets/ld_2022.png" />{' '}
      {/* Update title and image as needed */}
      {/* Main Content */}
      <div className="container mx-auto mb-8 p-8 text-center">
        {/* Executive Members Section */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl">The House Council</h2>
          <div className="flex flex-wrap justify-center">
            {executiveMembers.map((member) => renderMemberSquare(member))}
          </div>
        </div>

        {/* Additional Sections for Classes */}
        {Object.entries(classesData).map(([classYear, members]) => (
          <div key={classYear}>
            <h2 className="mb-4 mt-8 text-3xl">{`Class of ${classYear}`}</h2>
            <div className="flex flex-wrap justify-center">
              {members.map((member) => renderMemberSquare(member))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Directly use imported data instead of fetching
  const data = membersData;

  return {
    props: {
      executiveMembers: data.executiveMembers,
      classesData: data.classesData,
    },
  };
};

export default AboutPage;
