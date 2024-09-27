import type { NextPage } from 'next';
import React from 'react';

// Importing components
import { MemberHero } from '../templates/2025Hero';
import { Footer } from '../templates/Footer';
import membersData from '../data/2025_members.json'; // Import the 2025 members JSON file

const AboutPage: NextPage = () => {
  // Extract executive members and class data from the imported JSON
  const { executiveMembers, classesData } = membersData;

  // Function to render individual member squares
  const renderMemberSquare = (member: any) => (
    <div key={member.id} className="flex w-1/4 flex-col items-center p-4">
      <div className="relative h-60 w-60">
        {/* Set a fixed size for the image container */}
        <img
          src={member.imageUrl}
          alt={member.name}
          className={`absolute inset-0 h-full w-full border-4 object-cover ${member.borderColor}`} // Use object-cover to fit images
        />
      </div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-semibold">{member.name}</h2>
        <p className="text-sm text-black">{member.major}</p>
        <p className="text-sm text-black">{member.hometown}</p>
        <p className="text-sm text-black">{member.languages}</p>
      </div>
    </div>
  );

  return (
    <>
      <MemberHero />
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
