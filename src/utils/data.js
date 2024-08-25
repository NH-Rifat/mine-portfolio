//  icons
import {
  FiDribbble,
  FiGithub,
  FiInstagram,
  FiLayout,
  FiPenTool,
  FiSettings,
  FiTag,
  FiYoutube,
} from 'react-icons/fi';

import { IoIosMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
// skills images
import css from '/public/assets/tech/css.png';
import docker from '/public/assets/tech/docker.png';
import figma from '/public/assets/tech/figma.png';
import git from '/public/assets/tech/git.png';
import html from '/public/assets/tech/html.png';
import javascript from '/public/assets/tech/javascript.png';
import mongodb from '/public/assets/tech/mongodb.png';
import nodejs from '/public/assets/tech/nodejs.png';
import reactjs from '/public/assets/tech/reactjs.png';
import redux from '/public/assets/tech/redux.png';
import tailwind from '/public/assets/tech/tailwind.png';
import threejs from '/public/assets/tech/threejs.svg';
import typescript from '/public/assets/tech/typescript.png';

// project images
import Project2 from '/public/assets/projects/fishmyspot.png';
import Project3 from '/public/assets/projects/shoprowley.png';
import Project1 from '/public/assets/projects/tourfam.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blogs',
    href: 'blogs',
  },

  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: "",
//   },
//   {
//     img: UpworkBrandIcon,
//     href: "",
//   },
//   {
//     img: FiverBrandIcon,
//     href: "",
//   },
//   {
//     img: BehanceBrandIcon,
//     href: "",
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: "",
//   },
// ];

// projects
// export const projectsData = [
//   {
//     id: 1,
//     image: Project1,
//     name: "Parts manufacturing",
//     des: "This is a Parts manufacturing web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link:
//       "https://github.com/NH-Rifat/parts-manufacture-Application-client-side",
//     server_link: "https://github.com/NH-Rifat/parts-manufacturing-server",
//     live_link: "https://car-manufacturing-e90c4.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: "NEW",
//   },
//   {
//     id: 2,
//     image: Project3,
//     name: "Todo App",
//     des: "This is a Todo App web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link: "https://github.com/NH-Rifat/React-todo-App",
//     server_link: "https://github.com/NH-Rifat/todo-app-node-mongo",
//     live_link: "https://todo-app-20b59.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: "NEW",
//   },
//   {
//     id: 3,
//     image: Project2,
//     name: "car dealer warehouse",
//     des: "This is a car dealing inventory web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React/node js",
//     repo_link: "https://github.com/NH-Rifat/car_warehouse_management",
//     server_link:
//       "https://github.com/NH-Rifat/car-delearshipp_warehouse-server-side",
//     live_link: "https://car-dealer-407f1.web.app/",
//     technology: [
//       "React",
//       "node",
//       "firebase",
//       "mongodb",
//       "Authentication",
//       "React-Query",
//       "JWT",
//       "Tailwind",
//       "daisy UI",
//       "social Login",
//     ],
//     tag: " month ago",
//   },
//   {
//     id: 4,
//     image: Project4,
//     name: "Travel Guide",
//     des: "This is a Travel Guide web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link: "https://github.com/NH-Rifat/Travel-Guide-Application",
//     live_link: "https://travel-guide-4388b.web.app/",
//     technology: ["React", "firebase", "CSS"],
//     tag: "1 month ago",
//   },
//   {
//     id: 5,
//     image: Project5,
//     name: "Book shopping",
//     des: "This is a Book shopping web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link:
//       "https://github.com/NH-Rifat/javascript-book-shopping-application",
//     live_link: "https://javascrip-book-shopping.netlify.app/",
//     technology: ["React", "firebase", "Bootstrap"],
//     tag: "2 month ago",
//   },
//   {
//     id: 6,
//     image: Project6,
//     name: "Ema-jhon simple",
//     des: "This is a Ema-jhon simple web application where user can manage his/her car product which is more interesting as well as give",
//     category: "React",
//     repo_link: "https://github.com/NH-Rifat/Travel-Guide-Application",
//     live_link: "https://travel-guide-4388b.web.app/",
//     technology: ["React", "firebase", "localstorage", "API"],
//     tag: "3 month ago",
//   },
//   {
//     id: 7,
//     image: Project7,
//     name: "Smart phone Garage",
//     des: "This is a Smart phone Garage web application where user can manage his/her car product which is more interesting as well as give",
//     category: "JS/API",
//     repo_link: "https://github.com/NH-Rifat/smart__phone__garage-using-api",
//     live_link: "https://phone-garage-with-api.netlify.app/",
//     technology: ["HTML", "CSS", "Javascript", "API"],
//     tag: "4 month ago",
//   },
//   {
//     id: 8,
//     image: Project8,
//     name: "Panda Ecommerce",
//     des: "This is a Panda Ecommerce web application where user can manage his/her car product which is more interesting as well as give",
//     category: "UI/UX design",
//     repo_link: "https://github.com/NH-Rifat/panad-ecommerce",
//     live_link: "https://panda-ecommerce-design.netlify.app/",
//     technology: ["HTML", "CSS", "Bootstrap"],
//     tag: "2 Years ago",
//   },
//   {
//     id: 9,
//     image: Project9,
//     name: "Hot Gadget",
//     des: "This is a Hot Gadget web application where user can manage his/her car product which is more interesting as well as give",
//     category: "UI/UX design",
//     repo_link: "https://github.com/NH-Rifat/Hot-gadget-using-bootstrap",
//     live_link: "https://hot-gadgeted.netlify.app",
//     technology: ["HTML", "CSS", "Bootstrap"],
//     tag: "2 Years ago",
//   },
// ];

export const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: Project1,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: Project2,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: Project3,
  },
];
export const blogsData = [
  {
    id: 1,
    title: 'Understanding the React',
    des: 'Lean React fundamentals, hooks, and context API to build a fully functional app with the latest tech stack.',
    img: '/assets/blogs/basic_react01.jpg',
    iconLists: [
      '/assets/blogs/re.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/fm.svg',
    ],
    link: '/',
  },
  {
    id: 2,
    title: 'Beyond things the React',
    des: 'Discover the react beyond basics, under the hood, and advanced concepts to build a modern web app.',
    img: '/assets/blogs/react-advance.jpg',
    iconLists: [
      '/assets/blogs/next.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/stream.svg',
      '/assets/blogs/c.svg',
    ],
    link: '/',
  },
  {
    id: 3,
    title: 'Fundamentals of Javascript',
    des: 'Master the JavaScript fundamentals, ES6, and ES7 features to build a modern web app with pure JavaScript.',
    img: '/assets/blogs/p3.svg',
    iconLists: [
      '/assets/blogs/re.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/c.svg',
    ],
    link: '/',
  },
  {
    id: 4,
    title: 'JavaScript the big picture',
    des: 'Discover the JavaScript execution, hoisting, closures, scopes, and prototype-based inheritance in depth.',
    img: '/assets/blogs/p4.svg',
    iconLists: [
      '/assets/blogs/next.svg',
      '/assets/blogs/tail.svg',
      '/assets/blogs/ts.svg',
      '/assets/blogs/three.svg',
      '/assets/blogs/gsap.svg',
    ],
    link: '/',
  },
];
// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React/node js',
  },
  {
    name: 'React',
  },
  {
    name: 'JS/API',
  },
  {
    name: 'UI/UX Design',
  },
];

// skill
export const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Front-end Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Back-end Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Problem Solving',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Core Engineering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
// ];

// contact
export const contact = [
  {
    icon: <IoIosMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hasanrifatr1@gmail.com',
  },
  {
    icon: <IoLocationOutline />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Front-end Developer',
  },
];

export const blogNavigation = [
  {
    name: 'web',
  },
  {
    name: 'programming',
  },
  {
    name: 'others',
  },
];
