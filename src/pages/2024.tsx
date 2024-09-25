import React from 'react';
import { NextPage } from 'next';
// Importing Meta component from '../layout/Meta' file
import { MemberHero } from '../templates/2024Hero';
import { Footer } from '../templates/Footer';

const AboutPage: NextPage = () => {
  // Sample data for executive members

  const executiveMembers = [
    {
      id: 1,
      name: 'Linda Cao, Co-President',
      major: 'Major: Biology, Pre-Med ',
      hometown: 'Hometown: Miami, FL',
      languages: 'Languages: Mandarin, Spanish',
      imageUrl: '/people/linda_cao.jpg',
    },
    {
      id: 2,
      name: 'Sophie Zhu, Co-President',
      major: 'Major: Economics, Creative Writing ',
      hometown: 'Hometown: Bay Area, CA',
      languages: 'Languages: Mandarin, Spanish',
      imageUrl: '/people/sophie_zhu.jpg',
    },
    {
      id: 3,
      name: 'Zach Pracher, Vice President',
      major: 'Major: Biology, Computer Science',
      hometown: 'Hometown: ',
      languages: 'Languages: Mandarin, Latin',
      imageUrl: '/people/zach_pracher.jpg',
    },
    {
      id: 4,
      name: 'Aidan Aronhime, HC Instructor',
      major: 'Major: Computer Science, German ',
      hometown: 'Hometown: ',
      languages: 'Languages: German, Spanish',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 5,
      name: 'Lia Lemieux, HC Instructor',
      major: 'Major: Public Policy, Climate Science ',
      hometown: 'Hometown: ',
      languages: 'Languages: Spanish',
      imageUrl: '/people/lia_lemieux.jpg',
    },
    {
      id: 6,
      name: 'Kaitlyn Yan, Event Planner',
      major: 'Major: Public Policy, Global Health ',
      hometown: 'Hometown: ',
      languages: 'Languages: Mandarin, Spanish',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 7,
      name: 'Valerie Tan, Social Chair',
      major: 'Major: ',
      hometown: 'Hometown: ',
      languages: 'Languages:',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 8,
      name: 'Anna Zhang, Event Planner',
      major: 'Major: Computer Science, German ',
      hometown: 'Hometown: ',
      languages: 'Languages: Mandarin, Cantonese, German',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 9,
      name: 'Jadelyn Ding, Communications Chair',
      major: 'Major: Biology, Evolutionary Anthropology ',
      hometown: 'Hometown: ',
      languages: 'Languages: Chinese, French',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 10,
      name: 'Jonathan Reyes, Treasurer',
      major: 'Major: Computer Science, Neuroscience',
      hometown: 'Hometown: Brooklyn, NY ',
      languages: 'Languages: Spanish, French, Mandarin, Cantonese, Korean',
      imageUrl: '/people/person_placeholder.png',
    },
    {
      id: 11,
      name: 'Montana Lee, Event Planner',
      major: 'Major: Math, Decision Sciences',
      hometown: 'Hometown: New York, NY',
      languages: 'Languages: French',
      imageUrl: '/people/person_placeholder.png',
    },
    // Add more executive members here if needed
  ];

  // Sample data for each class
  const classesData = {
    '2024': [
      { id: 1, name: 'Aimi Wen', major: 'Major: Statistics ', hometown: 'Hometown: Bay Area, CA ', languages: 'Languages: Mandarin', imageUrl: '/people/aimi_wen.jpg' },
      { id: 2, name: 'Aryaman Arora', major: 'Major: Mechanical Engineering, Materials Science ', hometown: 'Hometown: New Delhi, India ', languages: 'Languages: Hindi, Punjabi', imageUrl: '/people/aryaman_arora.jpeg' },
      { id: 3, name: 'Emilia Cordon', major: 'Major: Physics, Computer Science ', hometown: 'Hometown: ', languages: 'Languages: German', imageUrl: '/people/emilia_cordon.jpg' },
      { id: 4, name: 'Eric Zhao', major: 'Major: Biology, Pre-Med ', hometown: 'Hometown: Tampa, Florida', languages: 'Languages: Mandarin, Japanese', imageUrl: '/people/eric_zhao.jpg' },
      { id: 5, name: 'Helen Li', major: 'Major: Computer Science, Psychology', hometown: 'Hometown: Seattle, WA', languages: 'Languages: Mandarin, Spanish, Japanese', imageUrl: '/people/helen_li.jpg' },
      { id: 6, name: 'Jonathan Shi', major: 'Major: Biology, Computer Science ', hometown: 'Hometown: Redwood City, CA ', languages: 'Languages: Mandarin, Spanish', imageUrl: '/people/jonathan_shi.jpeg' },
      { id: 7, name: 'Liuren Yin', major: 'Major: ECE + VMS', hometown: 'Hometown: Beijing, China', languages: 'Languages: Mandarin', imageUrl: '/people/liuren_yin.jpg' },
      { id: 8, name: 'Prince Ahmed', major: 'Major: Computer Science ', hometown: 'Hometown: ', languages: 'Languages: Italian, Bengali', imageUrl: '/people/prince_ahmed.jpeg' },
      { id: 9, name: 'Rebecca Liu', major: 'Major: Biology, Chemistry ', hometown: 'Hometown: Florence, SC ', languages: 'Languages: German, Mandarin', imageUrl: '/people/rebecca_liu.jpg' },
      { id: 10, name: 'William Kim', major: 'Major: Mechanical Engineering ', hometown: 'Hometown: ', languages: 'Languages: Korean, Japanese', imageUrl: '/people/william_kim.jpg' }
    ]
    ,
    '2025': [
      { id: 1, name: 'Claire Barry', major: 'Major: Mechanical Engineering, Physics ', hometown: 'Hometown: ', languages: 'Languages: Mandarin, Spanish', imageUrl: '/people/person_placeholder.png' },
      { id: 2, name: 'Dasol Lee', major: 'Major: Computer Science, Psychology ', hometown: 'Hometown: Blacksburg, VA ', languages: 'Languages: Korean', imageUrl: '/people/dasol_lee.png' },
      { id: 3, name: 'Ellen Liu', major: 'Major: Economics, Sociology ', hometown: 'Hometown: Shenzhen, China ', languages: 'Languages: Mandarin, French, Cantonese', imageUrl: '/people/person_placeholder.png' },
      { id: 4, name: 'Emily Sun', major: 'Major: Computer Science, Statistics', hometown: 'Hometown: ', languages: 'Languages: Mandarin, French', imageUrl: '/people/person_placeholder.png' },
      { id: 5, name: 'Kulsoom Rizavi', major: 'Major: Political Science, Computer Science', hometown: 'Hometown: ', languages: 'Languages: Hindi, Urdu, French', imageUrl: '/people/kulsoom_rizavi.jpg' },
      { id: 6, name: 'Lyndrinn Yao', major: 'Major: Computer Science, Statistics', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/lyndrinn_yao.jpg' },
      { id: 7, name: 'Matthew Salfity', major: 'Major: Biomedical Engineering, AMES ', hometown: 'Hometown: Omaha, Nebraska ', languages: 'Languages: Arabic, Latin', imageUrl: '/people/matthew_salfity.jpg' },
      { id: 8, name: 'Nicole Lee Heberling', major: 'Major: Evolutionary Anthropology, Biology', hometown: 'Hometown: ', languages: 'Languages: French, German', imageUrl: '/people/person_placeholder.png' },
      { id: 9, name: 'Shivam Mani', major: 'Major: Political Science, CS ', hometown: 'Hometown: Bay Area, CA ', languages: 'Languages: Hindi, Nepali, Mandarin, Spanish. ', imageUrl: '/people/shivam_mani.png' },
      { id: 10, name: 'Sophia Li', major: 'Major: Neuroscience ', hometown: 'Hometown: Toronto, Canada', languages: 'Languages: Mandarin, French', imageUrl: '/people/sophia_li.JPG' }
    ],
    '2026': [
      { id: 1, name: 'Ajani Adovor', major: 'Major: Program II ', hometown: 'Hometown: Philadelphia, PA', languages: 'Languages: French, Japanese', imageUrl: '/people/ajani_adovor.jpeg' },
      { id: 2, name: 'Alex Ivan', major: 'Major: Biomedical Engineering ', hometown: 'Hometown: Huntsville, AL', languages: 'Languages:', imageUrl: '/people/person_placeholder.png' },
      { id: 3, name: 'Alyssa Gorbaneva', major: 'Major: Computer Science, Mathematics', hometown: 'Hometown: Washington D.C. ', languages: 'Languages: Russian, Japanese', imageUrl: '/people/alyssa_gorbaneva.jpg' },
      { id: 4, name: 'Angelli Garibaldi', major: 'Major: English, Spanish ', hometown: 'Hometown: Peru ', languages: 'Languages: Spanish, Italian', imageUrl: '/people/angelli_garibaldi.JPG' },
      { id: 5, name: 'Catherine Pyne', major: 'Major: Biology ', hometown: 'Hometown: New York, NY ', languages: 'Languages: Latin, Greek, French', imageUrl: '/people/catherine_pyne.png' },
      { id: 6, name: 'Elena Suarez', major: 'Major: Psychology, Spanish ', hometown: 'Hometown: Wake Forest, NC', languages: 'Languages: Spanish', imageUrl: '/people/elena_suarez.jpg' },
      { id: 7, name: 'Erica Shen', major: 'Major: Computer Science ', hometown: 'Hometown: ', languages: 'Languages: Mandarin, French', imageUrl:'/people/person_placeholder.png' },
      { id: 8, name: 'Hannah Hortman', major: 'Major: Neuroscience, Chinese', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/hannah_hortman.jpeg' },
      { id: 9, name: 'Irene Biju', major: 'Major: Computer Science, Public Policy', hometown: 'Hometown: ', languages: 'Languages: Spanish, Malayalam', imageUrl: '/people/person_placeholder.png' },
      { id: 10, name: 'Jackson Streit', major: 'Major: Public Policy, Psychology', hometown: 'Hometown: Austin, Texas', languages: 'Languages: Spanish', imageUrl: '/people/jackson_streit.jpg' },
      { id: 11, name: 'Katherine Chen', major: 'Major: Computational Media ', hometown: 'Hometown: ', languages: 'Languages: Mandarin', imageUrl: '/people/person_placeholder.png' },
      { id: 12, name: 'Nancy Zhang', major: 'Major: Statistics, Finance ', hometown: 'Hometown: Beijing, China', languages: 'Languages: Mandarin, Korean', imageUrl: '/people/nancy_zhang.JPG' },
      { id: 13, name: 'Shelby Hartman', major: 'Major: ', hometown: 'Hometown: ', languages: 'Languages: French', imageUrl: '/people/person_placeholder.png' },
      { id: 14, name: 'Zoey Chen', major: 'Major: Computational Media, Chinese', hometown: 'Hometown: ', languages: 'Languages: Mandarin, Indonesian', imageUrl: '/people/person_placeholder.png' },
      { id: 15, name: 'Eric Wang', major: 'Major: Chemistry, Music', hometown: 'Hometown: San Diego, CA ', languages: 'Languages: Mandarin, Cantonese', imageUrl: '/people/eric_wang.png' },
      { id: 16, name: 'Grace Richardson', major: 'Major: Neuroscience, Spanish', hometown: 'Hometown: Minneapolis, Minnesota', languages: 'Languages: Spanish', imageUrl: '/people/grace_richardson.jpeg' },
      { id: 17, name: 'William Chen', major: 'Major: Math, CS ', hometown: 'Hometown: Franklinton, NC', languages: 'Languages: Mandarin', imageUrl: '/people/william_chen.png' }
    ],
    '2027': [
      { id: 1, name: 'Amy Xu', major: 'Major: Statistics, CS ', hometown: 'Hometown: Tennesee', languages: 'Languages: Mandarin, French', imageUrl: '/people/amy_xu.jpeg'  },
      { id: 2, name: 'Bilguun Zolzaya', major: 'Major: Mechanical Engineering', hometown: 'Hometown: ', languages: 'Languages: Mongolian, Chinese', imageUrl: '/people/bilguun_zolzaya.jpeg' },
      { id: 3, name: 'Caroline Zhang', major: 'Major: Computer Science, Statistics ', hometown: 'Hometown: Bay Area, CA', languages: 'Languages: Mandarin, Japanese', imageUrl: '/people/caroline_zhang.jpg' },
      { id: 4, name: 'Claire Cullen', major: 'Major: English, Spanish ', hometown: 'Hometown: Greenville, NC ', languages: 'Languages: Spanish, Korean', imageUrl: '/people/claire_cullen.jpg' },
      { id: 5, name: 'Clara Sun', major: 'Major: Neuroscience, Visual Arts ', hometown: 'Hometown: Seattle, WA ', languages: 'Languages: Chinese, French', imageUrl: '/people/clara_sun.jpg' },
      { id: 6, name: 'Darsh Mandera', major: 'Major: Linguistics, Computer Science', hometown: 'Hometown: Portland, OR', languages: 'Languages: Gujarati, Spanish, Hindi', imageUrl: '/people/darsh_mandera.jpeg' },
      { id: 7, name: 'Eric Chen', major: 'Major: ECE, CS ', hometown: 'Hometown: Apex, NC', languages: 'Languages: Mandarin, Korean', imageUrl: '/people/person_placeholder.png'},
      { id: 8, name: 'Fiona Selle', major: 'Major: Biomedical Engineering ', hometown: 'Hometown: Birmingham, AL ', languages: 'Languages: Spanish', imageUrl:'/people/person_placeholder.png' },
      { id: 9, name: 'Jenni Wang', major: 'Major: Biomedical Engineering ', hometown: 'Hometown: State College, PA ', languages: 'Languages: Mandarin, Spanish', imageUrl: '/people/jenni_wang.jpg' },
      { id: 10, name: 'Johanna Murphy', major: 'Major: Undecided', hometown: 'Hometown: New Jersey ', languages: 'Languages: Spanish', imageUrl: '/people/johanna_murphy.jpeg' },
      { id: 11, name: 'Liane Ma', major: 'Major: Statistics, Computer Science ', hometown: 'Hometown: Cary, NC ', languages: 'Languages:', imageUrl: '/people/liane_ma.jpeg' },
      { id: 12, name: 'Larkin Woodard', major: 'Major: Spanish, Neuroscience', hometown: 'Hometown: Cary, NC ', languages: 'Languages: Spanish', imageUrl: '/people/larkin_woodard.jpeg' },
      { id: 13, name: 'Mark Gikas', major: 'Major: Economics, CS ', hometown: 'Hometown: Hong Kong ', languages: 'Languages: Mandarin', imageUrl: '/people/mark_gikas.jpeg' },
      { id: 14, name: 'Tanya Pan', major: 'Major: Physics', hometown: 'Hometown: Heidelberg, Germany', languages: 'Languages: Mandarin, German, French', imageUrl: '/people/tanya_pan.png' },
      { id: 15, name: 'Vedant Patel', major: 'Major: Computer Science, Biology', hometown: 'Hometown: Ellicot City, MD ', languages: 'Languages: Spanish, Gujarati, Hindi', imageUrl: '/people/vedant_patel.jpeg' },
      { id: 16, name: 'Yanlin Li', major: 'Major: Economics, Psychology ', hometown: 'Hometown: Shaghai, China', languages: 'Languages: Mandarin, Arabic', imageUrl: '/people/yanlin_li.png' },
      { id: 17, name: 'Yoojin Park', major: 'Major: Biology, Statistics ', hometown: 'Hometown: Nashville, TN ', languages: 'Languages: Korean, Mandarin', imageUrl: '/people/yoojin_park.jpg' }
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