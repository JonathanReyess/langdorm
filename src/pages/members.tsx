import React from 'react';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  // Sample data for executive members
  const executiveMembers = [
    {
      id: 1,
      name: 'Linda Cao, Co-President',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 2,
      name: 'Sophie Zhu, Co-President',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 3,
      name: 'Zach Pracher, Treasurer',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 4,
      name: 'Executive Member 4',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 5,
      name: 'Executive Member 5',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 6,
      name: 'Executive Member 6',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 7,
      name: 'Executive Member 7',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 8,
      name: 'Executive Member 8',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 9,
      name: 'Executive Member 9',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 10,
      name: 'Executive Member 10',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 11,
      name: 'Executive Member 11',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 12,
      name: 'Executive Member 12',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 13,
      name: 'Executive Member 13',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    {
      id: 14,
      name: 'Executive Member 14',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: 'https://via.placeholder.com/150?text=Executive1',
    },
    // Add more executive members here if needed
  ];

  // Sample data for each class
  const classesData = {
    '2024': [
      {
        id: 1,
        name: 'Class of 2024 Member 1',
        major: 'Major: ',
        hometown: 'Hometown: ',
        languages: 'Languages:',
        imageUrl: 'https://via.placeholder.com/150?text=Class2024Member1',
      },
      // Add more members for Class of 2024 if needed
    ],
    '2025': [
      {
        id: 1,
        name: 'Class of 2025 Member 1',
        major: 'Major: ',
        hometown: 'Hometown: ',
        languages: 'Languages:',
        imageUrl: 'https://via.placeholder.com/150?text=Class2025Member1',
      },
      // Add more members for Class of 2025 if needed
    ],
    '2026': [
      {
        id: 1,
        name: 'Class of 2026 Member 1',
        major: 'Major: ',
        hometown: 'Hometown: ',
        languages: 'Languages:',
        imageUrl: 'https://via.placeholder.com/150?text=Class2026Member1',
      },
      // Add more members for Class of 2026 if needed
    ],
    '2027': [
      {
        id: 1,
        name: 'Class of 2027 Member 1',
        major: 'Major: ',
        hometown: 'Hometown: ',
        languages: 'Languages:',
        imageUrl: 'https://via.placeholder.com/150?text=Class2027Member1',
      },
      // Add more members for Class of 2027 if needed
    ],
  };

  // Function to render individual member squares
  const renderMemberSquare = (member: any) => (
    <div key={member.id} className="w-1/4 p-4">
      <img src={member.imageUrl} alt={member.name} className="w-full mb-2 rounded-md" />
      <div className="text-center">
        <h2 className="text-lg font-semibold">{member.name}</h2>
        <p className="text-sm text-black">{member.major}</p>
        <p className="text-sm text-black">{member.hometown}</p>
        <p className="text-sm text-black">{member.languages}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 text-center mb-8">
      <h1 className="text-3xl font-bold mb-8"></h1>

      {/* Executive Members Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">The House Council</h2>
        <div className="flex flex-wrap justify-center">
          {executiveMembers.map((member) => renderMemberSquare(member))}
        </div>
      </div>

      {/* Additional Sections for Classes */}
      {Object.entries(classesData).map(([classYear, members]) => (
        <div key={classYear}>
          <h2 className="text-2xl font-bold mt-8 mb-4">{`Class of ${classYear}`}</h2>
          <div className="flex flex-wrap justify-center">
            {members.map((member) => renderMemberSquare(member))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
