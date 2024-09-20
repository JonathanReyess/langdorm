import React from 'react';
import { NextPage } from 'next';
// Importing Meta component from '../layout/Meta' file
import { MemberHero } from '../templates/2025Hero';
import { Footer } from '../templates/Footer';

const AboutPage: NextPage = () => {
  // Sample data for executive members

  const executiveMembers = [
    {
      id: 1,
      name: 'Kaitlyn Yan, President',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 2,
      name: 'Jadelyn Ding, Vice President',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 3,
      name: 'Jonathan Reyes, Vice President',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 4,
      name: 'Shivam Mani, Treasurer',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 5,
      name: 'Clara Sun, Communications Chair',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 6,
      name: 'Claire Cullen, Social Chair',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 7,
      name: 'Nicole Lee Heberling, Service Chair',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 8,
      name: 'Fiona Selle, Event Planner',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 9,
      name: 'Vedant Patel, Event Planner',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 10,
      name: 'Ajani Adovor, Event Planner',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    // Add more executive members here if needed
  ];

  // Sample data for each class
  const classesData = {
    '2025': [
      { id: 1, name: 'Dasol Lee', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Emily Sun', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Kaitlyn Yan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Kulsoom Rizavi', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Liuren Yin', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 6, name: 'Lyndrinn Yao', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 7, name: 'Nicole Lee Heberling', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 8, name: 'Zoey Chen', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
    ]
    ,
    '2026': [
      { id: 1, name: 'Ajani Adovor', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Alyssa Gorbaneva', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Ananya Agrawal', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Angelli Garibaldi', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Catherine Pyne', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 6, name: 'Elena Suarez', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 7, name: 'Eric Wang', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 8, name: 'Grace Richardson', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 9, name: 'Hannah Hortman', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 10, name: 'Katherine Chen', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 11, name: 'Sarah Gorbatov', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 12, name: 'Shelby Hartman', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 13, name: 'William Chen', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 12, name: 'Yanlin Li', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' }
    ],
    '2027': [
      { id: 1, name: 'Amy Xu', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Darsh Mandera', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Jenni Wang', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Johanna Murphy', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Larkin Woodard', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 6, name: 'Mark Gikas', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 7, name: 'Tanya Pan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 8, name: 'Yoojin Park', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
    ],
    '2028': [
    ],
  };

   // Function to render individual member squares
   const renderMemberSquare = (member: any) => (
    <div key={member.id} className="w-1/4 p-4 flex flex-col items-center">
      <div className="relative w-60 h-60"> {/* Set a fixed size for the image container */}
        <img
          src={member.imageUrl}
          alt={member.name}
          className={`absolute inset-0 w-full h-full object-cover border-4 ${member.borderColor}`} // Use object-cover to fit images
        />
      </div>
      <div className="text-center mt-2">
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
      <div className="container mx-auto px-8 py-8 text-center mb-8">
        

        {/* Executive Members Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">The House Council</h2>
          <div className="flex flex-wrap justify-center">
            {executiveMembers.map((member) => renderMemberSquare(member))}
          </div>
        </div>

        {/* Additional Sections for Classes */}
        {Object.entries(classesData).map(([classYear, members]) => (
          <div key={classYear}>
            <h2 className="text-3xl mt-8 mb-4">{`Class of ${classYear}`}</h2>
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