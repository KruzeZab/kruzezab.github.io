import { FaReact, FaHtml5 } from 'react-icons/fa';
import { SiRedux, SiTypescript } from 'react-icons/si';
import {
  BiGitRepoForked,
  BiNetworkChart,
  BiTerminal,
} from 'react-icons/bi';
import {
  BsPersonFillGear,
  BsFillChatTextFill,
  BsSpeedometer2,
  BsUmbrella,
  BsRobot,
  BsMessenger,
} from 'react-icons/bs';
import {
  MdComputer,
  MdLeaderboard,
  MdOutlineVolunteerActivism,
  MdPeopleAlt,
  MdEnhancedEncryption,
} from 'react-icons/md';
import { TbSocial } from 'react-icons/tb';

export const PROJECTS = [
  {
    id: 'image-steganography',
    githubLink: 'https://github.com/kruzezab/image-steganography',
    liveDemoLink: 'https://demo.kaushalb.com.np/image-steganography/',
    title: 'Image Steganography',
    content: [
      'Powered by React and Redux for the development and Chakra-UI for design.',
      'Django and Django Rest Framework for the backend',
      'Implemented JWT Authentication',
      'Encrypt message and hide them in an image and decrypt message from an image',
      'Implemented sophisticated algorithms for encryption and decryption.',
      'Implemented a user-friendly interface for the user to interact with.',
    ],
    tags: [
      {
        title: 'React Developer',
        icon: <FaReact fontSize="16px" />,
        extraClass:
          'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900',
      },
      {
        title: 'Encryption',
        icon: <MdEnhancedEncryption fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:bg-green-900 dark:text-green-400',
      },
    ],
    screenshots: [
      {
        title: 'Home Page',
        src: '/assets/images/image-stegan/home.png',
        alt: 'Image Steganography Home Page',
      },
      {
        title: 'Home Page Dark Mode',
        src: '/assets/images/image-stegan/darkmode.png',
        alt: 'Image Steganography Home Page Dark Mode',
      },
      {
        title: 'Encrypt Page',
        src: '/assets/images/image-stegan/encrypt.png',
        alt: 'Image Steganography Encrypt Page',
      },
      {
        title: 'Decrypt Page',
        src: '/assets/images/image-stegan/decrypt.png',
        alt: 'Image Steganography Decrypt Page',
      },
      {
        title: 'Encrypt Page Dark Mode',
        src: '/assets/images/image-stegan/encrypt-dark.png',
        alt: 'Image Steganography Encrypt Page Dark Mode',
      },
    ],
  },
  {
    id: 'messenger-dictionary-bot',
    liveDemoLink: 'm.me/dictionarybotfb',
    title: 'Facebook Messenger Dictionary Bot',
    content: [
      'A Facebook messenger based bot to help users with their English.',
      "Users can send a word to the Messenger Dictionary Bot, and it will respond with the word's meaning, part of speech, and pronunciation if available.",
      'Integrated Facebook API and enabled permissions',
      'Enabled quick action buttons for synonyms, antonyms, and examples for the given word.',
      'It has 4,000+ daily messages and 2,000+ subscribers from all around the world.',
    ],
    tags: [
      {
        title: 'Bot Development',
        icon: <BsRobot fontSize="16px" />,
        extraClass:
          'text-blue-500 bg-blue-50 dark:text-blue-200 dark:bg-blue-900',
      },
      {
        title: 'Facebook Messenger',
        icon: <BsMessenger fontSize="16px" />,
        extraClass:
          'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900',
      },
      {
        title: 'Third Party Integration',
        icon: <MdComputer fontSize="16px" />,
        extraClass:
          'text-red-500 bg-red-50 dark:text-red-100 dark:bg-red-900',
      },
    ],
    screenshots: [
      {
        title: 'Example 1',
        src: '/assets/images/dictionary/example-1.png',
        alt: 'Messenger Dictionary Bot Example 1',
      },
      {
        title: 'Example 2',
        src: '/assets/images/dictionary/example-2.png',
        alt: 'Messenger Dictionary Bot Example 2',
      },
      {
        title: 'Example 3',
        src: '/assets/images/dictionary/example-3.png',
        alt: 'Messenger Dictionary Bot Example 3',
      },
      {
        title: 'Example 4',
        src: '/assets/images/dictionary/example-4.png',
        alt: 'Messenger Dictionary Bot Example 3',
      },
    ],
  },
  {
    id: 'realestate',
    githubLink: 'https://github.com/KruzeZab/Realtor-Estate-Agent',
    liveDemoLink: 'https://demo.kaushalb.com.np/realestate/',
    title: 'Real Estate Web App',
    content: [
      'User authentication and profile management functionalities are implemented, allowing users to create accounts, access personalized features, and save favorite properties.',
      'Realtors can browse and search for properties based on specific criteria, facilitating their interactions with potential clients.',
      'Users can browse and explore property listings based on their preferences, providing them with a wide range of options.',
      'A robust backend system enables easy management of property listings, including upload, editing, and removal functionalities.',
      'Users receive email notifications for property inquiries, and saved search alerts.',
    ],
    tags: [
      {
        title: 'React Developer',
        icon: <FaReact fontSize="16px" />,
        extraClass:
          'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900',
      },
      {
        title: 'Encryption',
        icon: <MdEnhancedEncryption fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:bg-green-900 dark:text-green-400',
      },
    ],
    screenshots: [
      {
        title: 'Home Page',
        src: '/assets/images/realestate/homepage.png',
        alt: 'Real Estate Home Page',
      },
      {
        title: 'Home Page Second',
        src: '/assets/images/realestate/homepage-2.png',
        alt: 'Real Estate Home Page Second',
      },
      {
        title: 'Listing Search',
        src: '/assets/images/realestate/search-listing.png',
        alt: 'Real Estate Listing Search',
      },
      {
        title: 'Listing Detail',
        src: '/assets/images/realestate/listing-detail.png',
        alt: 'Real Estate Listing Detail',
      },
      {
        title: 'Listing Detail Second',
        src: '/assets/images/realestate/listing-detail-2.png',
        alt: 'Real Estate Listing Detail Second',
      },
      {
        title: 'Realtor Search',
        src: '/assets/images/realestate/search-realtor.png',
        alt: 'Real Estate Realtor Search',
      },
      {
        title: 'Realtor Detail',
        src: '/assets/images/realestate/realtor-detail.png',
        alt: 'Real Estate Realtor Detail',
      },
    ],
  },
];

export const ACCOMPLISHMENTS = [
  {
    id: 'acc-mentor',
    title: 'Web Development Mentor for University',
    content: [
      'Worked on the development and maintenance of university websites using HTML, CSS and JavaScript Technologies',
      'Mentored junior students in the development and maintenance.',
      'Provided guidance on design principles, user experience, and web accessibility, helping students create websites that are visually appealing.',
      'Contributed to the development of documentation and tutorials to assist future students and volunteers in the web development program.',
      'Attended team meetings and provided ideas for project planning and execution.',
    ],
    tags: [
      {
        title: 'Mentorship',
        icon: <BsUmbrella fontSize="16px" />,
        extraClass:
          'text-purple-500 bg-purple-50 dark:bg-purple-900 dark:text-purple-200',
      },
      {
        title: 'Team Coordination',
        icon: <TbSocial fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:bg-green-900 dark:text-green-200',
      },
    ],
  },
  {
    id: 'acc-evlead',
    title: 'Event Lead on Web Development workshop',
    content: [
      'Led a successful workshop in university teaching HTML, CSS, and JavaScript for website building to 75 participants in collaboration with RR Decoders.',
      'Adapted the curriculum and teaching style to suit participants with varying levels of experience and learning styles.',
      "Encouraged participants' active involvement and collaboration, such as pair programming and code reviews.",
      'Demonstrated strong leadership skills by managing a team of trainers and providing guidance and feedback.',
    ],
    tags: [
      {
        title: 'Volunteered with College Board',
        icon: <MdOutlineVolunteerActivism fontSize="16px" />,
        extraClass:
          'text-indigo-500 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-200',
      },
      {
        title: 'Leadership',
        icon: <MdLeaderboard fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:bg-green-900 dark:text-green-200',
      },
      {
        title: 'Management',
        icon: <BsPersonFillGear fontSize="16px" />,
        extraClass:
          'text-blue-500 bg-blue-50 dark:bg-blue-900 dark:text-blue-200',
      },
    ],
  },
  {
    id: 'acc-hack',
    title: 'Participation in First Hackathon Event, 2019',
    content: [
      'Participated in a hackathon focused on developing technology solutions for social impact.',
      'Worked with a team of developers to create a React-based web application for a blood bank.',
      'Utilized React Router for client-side routing and Redux for state management.',
      'Integrated with a backend API to display real-time availability of blood types, locations of blood banks, donors, etc.',
    ],
    tags: [
      {
        title: 'Worked on Hackathon',
        icon: <BiTerminal fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:bg-green-900 dark:text-green-200',
      },
      {
        title: "Presented team's work",
        icon: <MdPeopleAlt fontSize="16px" />,
        extraClass:
          'text-blue-500 bg-blue-50 dark:bg-blue-900 dark:text-blue-200',
      },
    ],
  },
];

export const PROFILE_BADGES = [
  {
    text: 'React',
    icon: <FaReact fontSize="16px" />,
    extraClass: 'text-cyan-500 dark:text-cyan-400',
  },
  {
    text: 'Redux',
    icon: <SiRedux fontSize="16px" />,
    extraClass: 'text-purple-500 dark:text-purple-400',
  },
  {
    text: 'Typescript',
    icon: <SiTypescript fontSize="16px" />,
    extraClass: 'text-blue-500 dark:text-blue-400',
  },
  {
    text: 'Full Stack',
    icon: <MdComputer fontSize="16px" />,
    extraClass: 'text-indigo-500 dark:text-indigo-400',
  },
  {
    text: 'Open Source Contributor',
    icon: <BiGitRepoForked fontSize="16px" />,
    extraClass: 'text-green-500 dark:text-green-400',
  },
];

export const EDUCATION = [
  {
    title: "Bachelor's of Computer Application (BCA)",
    university: 'Tribhuvan University (TU)',
  },
  {
    title: 'High School',
    university: 'Bluebird Secondary School',
  },
];

export const EXPERIENCES = [
  {
    id: 'exp-201',
    title: 'React Developer, 201 IT Pvt. Ltd.',
    content: [
      ' Worked as a React Deceloper',
      'Created reusable React components and implemented complex state management using Redux or other similar frameworks.',
      'Collaborated with product managers, designers, and backend developers to implement features and functionalities that meet business requirements.',
      'Implemented lazy loading techniques to improve the initial load time of React applications.',
      'Provided technical guidance and support to team members and helped troubleshoot issues during development and testing phases.',
      "Mentored and conducted code reviews for intern's code and provided constructive feedback for improving code quality and maintainability.",
    ],
    tags: [
      {
        title: 'React Developer',
        icon: <FaReact fontSize="16px" />,
        extraClass:
          'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900',
      },
      {
        title: 'Performance Engineer',
        icon: <BsSpeedometer2 fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:text-green-400 dark:bg-green-900',
      },
      {
        title: 'Agile Enthusiast',
        icon: <BiNetworkChart fontSize="16px" />,
        extraClass:
          'text-blue-500 bg-blue-50 dark:text-blue-200 dark:bg-blue-900',
      },
    ],
  },
  {
    id: 'exp-shangrila',
    title: 'Software Engineer Intern, Youth of Shangrila',
    content: [
      'Collaborated with experienced web developers to design, code, test and debug websites using HTML, CSS, and JavaScript.',
      'Gained hands-on experience in various web development tools and technologies, such as react, redux, git, etc.',
      'Worked on client projects under the supervision of experienced web developers.',
    ],
    tags: [
      {
        title: 'Web Development',
        icon: <FaHtml5 fontSize="16px" />,
        extraClass:
          'text-red-500 bg-red-50 dark:text-red-100 dark:bg-red-900',
      },
      {
        title: 'Communication',
        icon: <BsFillChatTextFill fontSize="16px" />,
        extraClass:
          'text-green-500 bg-green-50 dark:text-green-400 dark:bg-green-900',
      },
    ],
  },
];
