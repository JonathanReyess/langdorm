import React from 'react';
import { NextPage } from 'next';
// Importing Meta component from '../layout/Meta' file
import { MemberHero } from '../templates/2023Hero';
import { Footer } from '../templates/Footer';

const AboutPage: NextPage = () => {
  // Sample data for executive members

  const executiveMembers = [
    {
      id: 1,
      name: 'Zhichen Guo, President',
      major: 'Major: Computer Science, ECE',
      hometown: 'Hometown: Iquique, Vancouver ',
      languages: 'Languages: Spanish, Mandarin',
      imageUrl: '/people/zhichen_guo.jpg',
      borderColor: 'border-green-500',
    },
    {
      id: 2,
      name: 'Isabella Wang, Vice-President',
      major: 'Major: Biomedical Engineering, CS ',
      hometown: 'Hometown: Briarcliff Manor, NY ',
      languages: 'Languages: Mandarin, French',
      imageUrl: '/people/isabella_wang.jpeg',
      borderColor: 'border-green-500',
    },
    {
      id: 3,
      name: 'Preston Bowman, Treasurer',
      major: 'Major: Neuroscience ',
      hometown: 'Hometown: Waco, Texas ',
      languages: 'Languages: Mandarin, German',
      imageUrl: '/people/preston_bowman.jpg',
      borderColor: 'border-green-500',
    },
    {
      id: 4,
      name: 'Emilia Cordon, Communications',
      major: 'Major: Physics, Math ',
      hometown: 'Hometown: Wilmington, NC ',
      languages: 'Languages: German, Spanish',
      imageUrl: '/people/emilia_cordon.jpg',
      borderColor: 'border-green-500',
    },
    {
      id: 5,
      name: 'Sophie Zhu, Event Planner',
      major: 'Major: Economics ',
      hometown: 'Hometown: Bay Area, California',
      languages: 'Languages: Spanish',
      imageUrl: '/people/sophie_zhu.jpg',
      borderColor: 'border-green-500',
    },
    {
      id: 6,
      name: 'Leona Lu, Event Planner',
      major: 'Major: Statistics, CS ',
      hometown: 'Hometown: Shanghai, China',
      languages: 'Languages: Mandarin, German',
      imageUrl: '/people/leona_lu.jpeg',
      borderColor: 'border-green-500',
    },
    {
      id: 7,
      name: 'Prince Ahmed, Event Planner',
      major: 'Major: Pre-Med ',
      hometown: 'Hometown: London, UK',
      languages: 'Languages: Italian, Bengali',
      imageUrl: '/people/prince_ahmed.jpeg',
      borderColor: 'border-green-500',
    },
    {
      id: 8,
      name: 'Min Ju Lee, Event Planner',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
      borderColor: 'border-green-500',
    },
    {
      id: 9,
      name: 'Linda Cao, Event Planner',
      major: 'Major: Biology, Pre-Med',
      hometown: 'Hometown: Miami, Florida',
      languages: 'Languages: Mandarin, Spanish',
      imageUrl: '/people/linda_cao.jpg',
      borderColor: 'border-green-500',
    },
    {
      id: 10,
      name: 'Gabrielle Lee, Event Planner',
      major: 'Major: Psychology ',
      hometown: 'Hometown: Edmond, Oklahoma',
      languages: 'Languages: Cantonese, Mandarin',
      imageUrl: '/people/gabrielle_lee.jpeg',
      borderColor: 'border-green-500',
    },
  
    // Add more executive members here if needed
  ];

  // Sample data for each class
  const classesData = {
    '2023': [
      { id: 1, name: 'Aryaman Arora', major: 'Major: Mechanical Engineering', hometown: 'Hometown: New Delhi, India', languages: 'Languages: Hindi', imageUrl: '/people/aryaman_arora.jpeg' },
      { id: 2, name: 'Cassie Lu', major: 'Major: Computer Science, Economics', hometown: 'Hometown: Taiwan', languages: 'Languages: Chinese, Taiwanese', imageUrl: '/people/cassie_lu.png' },
      { id: 3, name: 'Feng Cong', major: 'Major: Math, CS', hometown: 'Hometown: Singapore', languages: 'Languages: Chinese', imageUrl: '/people/feng_cong.jpg' },
      { id: 4, name: 'Himani Bhat', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Ishaan Ghosh', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/ishaan_ghosh.jpg' },
      { id: 6, name: 'Jack Smoot', major: 'Major: Public Policy', hometown: 'Hometown: ', languages: 'Languages: Spanish, Arabic', imageUrl: '/people/jack_smoot.jpg' },
      { id: 7, name: 'Jayesh Gupta', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/jayesh_gupta.jpeg' },
      { id: 8, name: 'Jen Wang', major: 'Major: Psychology', hometown: 'Hometown: Beijing, China', languages: 'Languages: Mandarin', imageUrl: '/people/jen_wan.jpg' },
      { id: 9, name: 'Lindsay Hu', major: 'Major: Civil Engineering', hometown: 'Hometown: Hong Kong', languages: 'Languages: Mandarin', imageUrl: '/people/lindsay_hu.jpg' },
      { id: 10, name: 'Maryam Shahid', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png'},
      { id: 11, name: 'William Kim', major: 'Major: Mechanical Engineering', hometown: 'Hometown: Las Vegas, Nevada', languages: 'Languages: Korean', imageUrl: '/people/william_kim.jpg' },
      { id: 12, name: 'Yihan Shi', major: 'Major: Neuroscience, Statistics', hometown: 'Hometown: Shanghai, China', languages: 'Languages: Mandarin', imageUrl: '/people/yihan_shi.jpeg' }
    ]
    ,
    '2024': [
      { id: 1, name: 'Ace Abdulrahman', major: 'Major: Computer Science', hometown: 'Hometown: ', languages: 'Languages: Arabic', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Cynthia France', major: 'Major: ECE + CS', hometown: 'Hometown: Omaha, NE', languages: 'Languages: Mandarin, Spanish', imageUrl: '/people/cynthia_france.jpg' },
      { id: 4, name: 'Dominic Martinez', major: 'Major: Computer Science', hometown: 'Hometown: Florida', languages: 'Languages: Japanese', imageUrl: '/people/dominic_martinez.jpg' },
      { id: 5, name: 'Islina Shan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 6, name: 'Lia Lemieux', major: 'Major: Public Policy', hometown: 'Hometown: Minnesota', languages: 'Languages: Spanish', imageUrl: '/people/lia_lemieux.jpg' },
      { id: 7, name: 'Liuren Yin', major: 'Major: ECE + VMS', hometown: 'Hometown: Beijing, China', languages: 'Languages: Mandarin', imageUrl: '/people/liuren_yin.jpg' },
      { id: 8, name: 'Muaz Bin Kashif', major: 'Major: Computer Science', hometown: 'Hometown: Pakistan', languages: 'Languages: Hindi-Urdu, Punjabi', imageUrl: '/people/muaz_kashif.jpg' },
      { id: 9, name: 'Zach Pracher', major: 'Major: Biology, Computer Science', hometown: 'Hometown: ', languages: 'Languages: Mandarin ', imageUrl: '/people/zach_pracher.jpg'}
    ]
    ,
    '2025': [
      { id: 1, name: 'Aidan Aronhime', major: 'Major: Computer Science ', hometown: 'Hometown: ', languages: 'Languages: German', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Claire Barry', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Elaine Guo', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Emily Sun', major: 'Major: Computer Science', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Grace Liu', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 6, name: 'Jaeden Toy', major: 'Major: Computer Science, Russian ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/jaeden_toy.jpg' },
      { id: 7, name: 'Kaitlyn Yan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 8, name: 'Kulsoom Rizavi', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 9, name: 'Lyndrinn Yao', major: 'Major: Computer Science', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 10, name: 'Malaika Khumalo', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 11, name: 'Nicole Lee Heberling', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png'},
      { id: 12, name: 'Spencer Chang', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 13, name: 'Valerie Tan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' }
    ],
    '2026': [
      { id: 1, name: 'Ananya Agrawal', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Anna Zhang', major: 'Major: Computer Science', hometown: 'Hometown: Brooklyn, NY', languages: 'Languages: Spanish, Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Erica Shen', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png'},
      { id: 4, name: 'Flora Ye', major: 'Major: Computer Science', hometown: 'Hometown: Brooklyn, NY', languages: 'Languages: Spanish, Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Irene Biju', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png'},
      { id: 6, name: 'Jadelyn Ding', major: 'Major: Computer Science', hometown: 'Hometown: Brooklyn, NY', languages: 'Languages: Spanish, Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 7, name: 'Jessie Chan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 8, name: 'Jonathan Reyes', major: 'Major: Computer Science', hometown: 'Hometown: Brooklyn, NY', languages: 'Languages: Spanish, Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 9, name: 'Katherine Chen', major: 'Major: Computer Science', hometown: 'Hometown: Brooklyn, NY', languages: 'Languages: Spanish, Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 10, name: 'Monatana Lee', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 11, name: 'Shelby Hartman', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' },
      { id: 12, name: 'Zoey Chen', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: ', imageUrl: '/people/person_placeholder.png' }
    ],
  };

   // Function to render individual member squares
   const renderMemberSquare = (member: any) => (
    <div key={member.id} className="w-1/4 p-4 flex flex-col items-center">
      <div className="relative w-60 h-60"> {/* Set a fixed size for the image container */}
        <img
          src={member.imageUrl}
          alt={member.name}
          className={`absolute inset-0 w-full h-full object-cover border-4`} // Use object-cover to fit images
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