import { images } from "../assets";

export const aboutMockData = {
  aboutParaOne:
    "I’m a curious web developer who thrives on transforming ideas into sleek, intuitive, and responsive web experiences. With a solid grip on React, JavaScript, and modern development tools, I aim to craft fast, seamless, and user-focused interfaces.",
  aboutParaTwo: "When I’m not deep in code, I’m diving into emerging tech, sharpening my eye for design, or tinkering with side projects that fuel my creativity and growth.",
};

export const skillsMockData = [
  {
    id: 1,
    title: "Design",
    skills: [
      {
        name: "Figma",
        img: `${images.figma}`,
        expFrom: 0,
        expTo: 1,
      },
      {
        name: "Canva",
        img: `${images.canva}`,
        expFrom: 1,
        expTo: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Frontend",
    skills: [
      { name: "HTML5", img: `${images.html}`, expFrom: 2, expTo: 3 },
      { name: "CSS3", img: `${images.css3}`, expFrom: 2, expTo: 3 },
      {
        name: "JavaScript",
        img: `${images.javascript}`,
        expFrom: 1,
        expTo: 2,
      },
      {
        name: "React",
        img: `${images.react}`,
        expFrom: 1,
        expTo: 2,
      },
      {
        name: "Bootstrap",
        img: `${images.bootstrap}`,
        expFrom: 1,
        expTo: 2,
      },
      {
        name: "Tailwind CSS",
        img: `${images.tailwindcss}`,
        expFrom: 0,
        expTo: 1,
      },
      {
        name: "Next.js",
        img: `${images.nextjs}`,
        expFrom: 0,
        expTo: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        img: `${images.node}`,
        expFrom: 0,
        expTo: 1,
      },
      {
        name: "Express.js",
        img: `${images.express}`,
        expFrom: 0,
        expTo: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        img: `${images.mongodb}`,
        expFrom: 0,
        expTo: 1,
      },
      {
        name: "MySQL",
        img: `${images.mysql}`,
        expFrom: 0,
        expTo: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Version Control",
    skills: [
      {
        name: "GitLab",
        img: `${images.gitlab}`,
        expFrom: 0,
        expTo: 1,
      },
      {
        name: "GitHub",
        img: `${images.github}`,
        expFrom: 0,
        expTo: 1,
      },
    ],
  },
  {
    id: 6,
    title: "Others",
    skills: [
      {
        name: "Visual Studio Code",
        img: `${images.vs}`,
        expFrom: 2,
        expTo: 3,
      },
      {
        name: "Postman",
        img: `${images.postman}`,
        expFrom: 0,
        expTo: 1,
      },
    ],
  },
];

export const serviceMockData = [
  {
    id: 1,
    title: "UI/UX Design",
    para: "Designing user-friendly layouts, wireframes, and mockups using Figma and Canva. I focus on clean design and intuitive user journeys.",
  },
  {
    id: 2,
    title: "Frontend",
    para: "Building clean, responsive, and interactive user interfaces using React, JavaScript, HTML5, and CSS3 (with Bootstrap 5).",
  },
  {
    id: 3,
    title: "Backend",
    para: "Developing robust backend services and RESTful APIs using Node.js and Express.js to handle data operations, user authentication, and business logic.",
  },
  {
    id: 4,
    title: "API Development",
    para: "Developing RESTful APIs for seamless communication between frontend and backend.",
  },
  {
    id: 5,
    title: "SPA",
    para: "Creating smooth, fast-loading Single Page Application using React or by using Front end Tool for a seamless user experience.",
  },
  {
    id: 6,
    title: "Performance Optimization",
    para: "Enhancing website speed and performance using best practices like lazy loading, image compression, and code splitting.",
  },
  {
    id: 7,
    title: "Responsive Design",
    para: "Ensuring websites are mobile-friendly and responsive across all devices using CSS frameworks like Bootstrap and Tailwind CSS.",
  }
];

export const experienceMockData = [
  {
    id: 1,
    title: "Trainee Developer",
    company: "Hema's Enterprises Private Limited",
    startDate: "June 2024",
    endDate: "Feb 2025",
    responsibilities: [
      "Integrated RESTful APIs using Axios to enhance functionality and enable smooth data communication across the MERN stack.",
      "Built scalable and high-performance web applications with a focus on maintainability and clean architecture.",
      "Developed reusable and modular React components to ensure efficient code management and fast development cycles.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Indiaproduced.com",
    startDate: "Sept 2023",
    endDate: "Feb 2024", 
    responsibilities: [
      "Developed a responsive UI using React and Bootstrap 5.",
      "Built reusable components and managed routing with React Router.",
      "Improved site performance and cross-browser compatibility.",
    ],
  },
];

export const projectMockData = [
  {
    id: 1,
    title: "AG Property & Facility",
    img: `${images.ag}`,
    descriptionOne:
      "Ag Property & Facility is a responsive web application designed to streamline property and facility management tasks. Built using React and styled with Bootstrap 5, the project focuses on a clean user interface and smooth user experience across all devices.",
    descriptionTwo:
      "I was responsible for developing dynamic components, integrating responsive layouts, and ensuring the application remained scalable and easy to maintain. The project showcases my ability to build structured UIs using component-based architecture and modern styling tools.",
      technologies: [
      { name: "React", img: `${images.react}` },
      { name: "Bootstrap 5", img: `${images.bootstrap}` },
    ],
    link: "https://agpropertyfacility.com/",
  },
  {
    id: 2,
    title: "Educationsupport247.com",
    img: `${images.edu}`,
    descriptionOne:
      "Education Support is a responsive web application designed to streamline property and facility management tasks. Built using React and styled with Bootstrap 5, the project focuses on a clean user interface and smooth user experience across all devices.",
    descriptionTwo:
      "I was responsible for developing dynamic components, integrating responsive layouts, and ensuring the application remained scalable and easy to maintain. The project showcases my ability to build structured UIs using component-based architecture and modern styling tools.",
    technologies: [
      { name: "React", img: `${images.react}` },
      { name: "Bootstrap 5", img: `${images.bootstrap}` },
    ],
    link: "https://educationsupport247.com/",
  },
]

export const studyMockData = [
  {
    id: 1,
    grade: "10th Grade",
    institution: "St. John's Matriculation Higher Secondary School, Thiruninravur",
    from: "2017",
    to: "2018",
    specialization: "",
  },
  {
    id: 2,
    grade: "12th Grade",
    institution: "St. John's Matriculation Higher Secondary School, Thiruninravur",
    from: "2019",
    to: "2020",
    specialization: "Commerce with Computer Application",
  },
  {
    id: 3,
    grade: "Bachelor of Computer Applications",
    institution: "Dharmamurthi Rao Bahadur Calavala Cunnan Chetty's Hindu College, Pattabiram",
    from: "2020",
    to: "2023",
    specialization: "Computer Applications",
  },
  {
    id: 4,
    grade: "Master of Computer Applications (Correspondence)",
    institution: "University of Madras, Chennai",
    from: "2024",
    to: "Present",
    specialization: "Computer Applications",
  },
];

export const certificateMockData = [
  {
    id: 1,
    title: "The Complete 2023 Web Development Bootcamp",
    institution: "Udemy",
    numberId: "UC-d3cbc773-0743-4500-8934 1897cd4960f2",
  },
  {
    id: 2,
    title: "Bootstrap 5",
    institution: "Mindluster",
    numberId: "203282255",
  },
  {
    id: 3,
    title: "Junior Typewriting English (First Class)",
    institution: "Government Technical Examinations in Commerce",
    numberId: "GTE0216349",
  },
];