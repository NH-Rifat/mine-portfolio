//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "",
  },
  {
    icon: <FiDribbble />,
    href: "",
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

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "React/node js",
  },
  {
    name: "React",
  },
  {
    name: "JS/API",
  },
  {
    name: "UI/UX Design",
  },
];

// skill
// export const skills = [
//   {
//     image: SkillImg1,
//   },
//   {
//     image: SkillImg2,
//   },
//   {
//     image: SkillImg3,
//   },
//   {
//     image: SkillImg4,
//   },
//   {
//     image: SkillImg5,
//   },
//   {
//     image: SkillImg6,
//   },
//   {
//     image: SkillImg7,
//   },
//   {
//     image: SkillImg8,
//   },
// ];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Front-end Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Back-end Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Problem Solving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "Core Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
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
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hasanrifat@.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Dhaka, Bangladesh",
    description: "Front-end Developer",
  },
];
