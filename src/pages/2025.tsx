import type { NextPage } from 'next';
import React from 'react';

// Importing components
import { MemberHero } from '../components/hero/MemberHero';
import membersData from '../data/2025_members.json'; // Import the 2024 members JSON file
import { Footer } from '../templates/Footer';

const AboutPage: NextPage = () => {
  // Extract executive members and class data from imported JSON
  const { executiveMembers, classesData } = membersData;

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
          className={`h-full w-full border-4 object-cover ${member.borderColor}`} // Changed to w-full and h-full
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
      <MemberHero title="2024-2025" imageSrc="/assets/coming_soon.png" />{' '}
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

export default AboutPage;
