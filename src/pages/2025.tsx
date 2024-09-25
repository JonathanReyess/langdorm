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
      major: 'Major: Political Science, CS',
      hometown: 'Hometown: Bay Area, CA ',
      languages: 'Languages: Hindi, Nepali, Mandarin, Spanish',
      imageUrl: '/people/shivam_mani.png',
    },
    {
      id: 5,
      name: 'Clara Sun, Communications Chair',
      major: 'Major: Neuroscience, Visual Arts ',
      hometown: 'Hometown: Seattle, WA',
      languages: 'Languages: Chinese, French',
      imageUrl: '/people/clara_sun.jpg',
    },
    {
      id: 6,
      name: 'Claire Cullen, Social Chair',
      major: 'Major: English, Spanish ',
      hometown: 'Hometown: Greenville, NC ',
      languages: 'Languages: Spanish, Korean',
      imageUrl: '/people/claire_cullen.jpg',
    },
    {
      id: 7,
      name: 'Nicole Lee Heberling, Service Chair',
      major: 'Major: Evolutionary Anthropology, Biology ',
      hometown: 'Hometown: ',
      languages: 'Languages: French, German',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 8,
      name: 'Fiona Selle, Event Planner',
      major: 'Major: Biomedical Engineering ',
      hometown: 'Hometown: Birmingham, AL',
      languages: 'Languages: Spanish',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 9,
      name: 'Vedant Patel, Event Planner',
      major: 'Major: Computer Science, Biology',
      hometown: 'Hometown: Ellicot City, MD',
      languages: 'Languages: Spanish, Gujarati, Hindi',
      imageUrl: '/people/vedant_patel.jpeg',
    },
    {
      id: 10,
      name: 'Ajani Adovor, Event Planner',
      major: 'Major: Program II',
      hometown: 'Hometown: Philadelphia, PA',
      languages: 'Languages:French, Japanese',
      imageUrl: '/people/ajani_adovor.jpeg',
    },
    // Add more executive members here if needed
  ];

  // Sample data for each class
  const classesData = {
    '2025': [
      { id: 1, name: 'Dasol Lee', major: 'Major: Computer Science, Psychology ', hometown: 'Hometown: Blacksburg, VA ', languages: 'Languages: Korean', imageUrl: '/people/dasol_lee.png' },
      { id: 2, name: 'Emily Sun', major: 'Major: Computer Science, Statistics', hometown: 'Hometown: Mandarin, French ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Kaitlyn Yan', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Kulsoom Rizavi', major: 'Major: Political Science, Computer Science ', hometown: 'Hometown: Hindi, Urdu, French ', languages: 'Languages:', imageUrl: '/people/kulsoom_rizavi.jpg' },
      { id: 5, name: 'Liuren Yin', major: 'Major: ECE, Visual Media', hometown: 'Hometown: Beijing, China', languages: 'Languages: Mandarin', imageUrl: '/people/liuren_yin.jpg' },
      { id: 6, name: 'Lyndrinn Yao', major: 'Major: Computer Science, Statistics ', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/lyndrinn_yao.jpg' },
      { id: 7, name: 'Zoey Chen', major: 'Major: Computational Media, Chinese', hometown: 'Hometown: ', languages: 'Languages:  Mandarin, Indonesian', imageUrl: '/people/person_placeholder.png' },
    ]
    ,
    '2026': [
      { id: 1, name: 'Alyssa Gorbaneva', major: 'Major: Computer Science, Mathematics', hometown: 'Hometown: Washington D.C. ', languages: 'Languages: Russian, Japanese', imageUrl: '/people/alyssa_gorbaneva.jpg' },
      { id: 2, name: 'Ananya Agrawal', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Angelli Garibaldi', major: 'Major: English, Spanish ', hometown: 'Hometown: Peru ', languages: 'Languages: Spanish, Italian', imageUrl: '/people/angelli_garibaldi.JPG' },
      { id: 4, name: 'Catherine Pyne', major: 'Major: Biology ', hometown: 'Hometown: New York, NY ', languages: 'Languages: Latin, Greek, French', imageUrl: '/people/catherine_pyne.png' },
      { id: 5, name: 'Elena Suarez', major: 'Major: Psychology, Spanish ', hometown: 'Hometown: Wake Forest, NC', languages: 'Languages: Spanish', imageUrl: '/people/elena_suarez.jpg' },
      { id: 6, name: 'Eric Wang', major: 'Major: Chemistry, Music', hometown: 'Hometown: San Diego, CA ', languages: 'Languages: Mandarin, Cantonese', imageUrl: '/people/eric_wang.png' },
      { id: 7, name: 'Grace Richardson', major: 'Major: Neuroscience, Spanish', hometown: 'Hometown: Minneapolis, Minnesota', languages: 'Languages: Spanish', imageUrl: '/people/grace_richardson.jpeg' },
      { id: 8, name: 'Hannah Hortman', major: 'Major: Neuroscience, Chinese', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/hannah_hortman.jpeg' },
      { id: 9, name: 'Katherine Chen', major: 'Major: Computational Media ', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 10, name: 'Sarah Gorbatov', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 11, name: 'Shelby Hartman', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 12, name: 'William Chen', major: 'Major: Math, CS ', hometown: 'Hometown: Franklinton, NC', languages: 'Languages: Mandarin', imageUrl: '/people/william_chen.png' },
      { id: 13, name: 'Yanlin Li', major: 'Major: Economics, Psychology ', hometown: 'Hometown: Shaghai, China', languages: 'Languages: Mandarin, Arabic', imageUrl: '/people/yanlin_li.png' },
    ],
    '2027': [
      { id: 1, name: 'Amy Xu', major: 'Major: Statistics, CS ', hometown: 'Hometown: Tennesee', languages: 'Languages: Mandarin, French', imageUrl: '/people/amy_xu.jpeg'  },
      { id: 2, name: 'Darsh Mandera', major: 'Major: Linguistics, Computer Science', hometown: 'Hometown: Portland, OR', languages: 'Languages: Gujarati, Spanish, Hindi', imageUrl: '/people/darsh_mandera.jpeg' },
      { id: 3, name: 'Jenni Wang', major: 'Major: Biomedical Engineering ', hometown: 'Hometown: State College, PA ', languages: 'Languages: Mandarin, Spanish', imageUrl: '/people/jenni_wang.jpg' },
      { id: 4, name: 'Johanna Murphy', major: 'Major: Undecided', hometown: 'Hometown: New Jersey ', languages: 'Languages: Spanish', imageUrl: '/people/johanna_murphy.jpeg' },
      { id: 5, name: 'Larkin Woodard', major: 'Major: Spanish, Neuroscience', hometown: 'Hometown: Cary, NC ', languages: 'Languages: Spanish', imageUrl: '/people/larkin_woodard.jpeg' },
      { id: 6, name: 'Mark Gikas', major: 'Major: Economics, CS ', hometown: 'Hometown: Hong Kong ', languages: 'Languages: Mandarin', imageUrl: '/people/mark_gikas.jpeg' },
      { id: 7, name: 'Tanya Pan', major: 'Major: Physics', hometown: 'Hometown: Heidelberg, Germany', languages: 'Languages: Mandarin, German, French', imageUrl: '/people/tanya_pan.png' },
      { id: 8, name: 'Yoojin Park', major: 'Major: Biology, Statistics ', hometown: 'Hometown: Nashville, TN ', languages: 'Languages: Korean, Mandarin', imageUrl: '/people/yoojin_park.jpg' }
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