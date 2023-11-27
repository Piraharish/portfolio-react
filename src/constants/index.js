import {
  graduate,
  frontenddev,
  backenddev,
  djangodev,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mysql,
  git,
  bootstrap,
  sass,
  vhnsn,
  shasc,
  sumai,
  weather,
  learnershub,
  blog,
  ecommerce,
  freeCodeCamp,
  guvi,
  scaler,
  greatlearning,
  django,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Recent Graduate",
    icon: graduate,
  },
  {
    title: "Frontend Developer",
    icon: frontenddev,
  },
  {
    title: "Backend Developer",
    icon: backenddev,
  },
  {
    title: "Django Developer",
    icon: djangodev,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Master of Computer Applications",
    company_name: "VHN Senthikumara Nadar College",
    icon: vhnsn,
    iconBg: "#383E56",
    date: "Sep 2021 - April 2023",
    url: "https://vhnsnc.edu.in/",
    points: [
      "The rigorous curriculum and dedicated faculty at VHNSN College played a pivotal role in shaping my expertise in various aspects of the IT field.",
      "Also ignited my passion for leveraging technology to drive innovation and address real-world challenges.",
    ],
  },
  {
    title: "Bachelors in Mathematics",
    company_name: "Syed Hameedha Arts and Science College",
    icon: shasc,
    iconBg: "#383E56",
    date: "Jun 2017 - Mar 2020",
    url: "https://www.shartsandscience-edu.in/",
    points: [
      "My Bachelors in Mathematics laid the groundwork for my passion for problem solving and analytical thinking.",
      "I am excited to apply my mathematical and analytical skills in a dynamic and challenging professional environment.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "From this Course I gained a lot about React, Redux, and other libraries and certified by building 5 hands on projects.",
    name: "freeCodeCamp",
    designation: "Front End Development Libraries",
    company: "https://www.freecodecamp.org/",
    certificate:
      "https://www.freecodecamp.org/certification/Piraharish/front-end-development-libraries",
    image: freeCodeCamp,
  },
  {
    id: 2,
    testimonial:
      "I've never learnt like this from any other courses. The depth about hosting a website to live, user authentication are insane.",
    name: "GUVI",
    designation: "Full Stack Development 101",
    company: "https://www.guvi.in/",
    certificate: "https://www.guvi.in/verify-certificate?id=99105y8QP0jJ689u0E",
    image: guvi,
  },
  {
    id: 3,
    testimonial:
      "Apart from playing with chatGPT, Through this course, I've learned how to prompt, train, and get the desired output from an AI.",
    name: "GUVI",
    designation: "Chatgpt for Everyone",
    company: "https://www.guvi.in/",
    certificate: "https://www.guvi.in/verify-certificate?id=414w88fc06o6mn1919",
    image: guvi,
  },
  {
    id: 4,
    testimonial:
      "Through this tutorial, I've gone through a 9 modules,and 8 challenges. At the end I gathered some ideas on JavaScript.",
    name: "Scaler",
    designation: "Unlocking the Power of JavaScript",
    company: "https://www.scaler.com/academy/",
    certificate:
      "https://drive.google.com/file/d/1BVPekMyPpBno5uDJNo6nMcyhlQcUvTg1/view?usp=sharing",
    image: scaler,
  },
  {
    id: 5,
    testimonial:
      "After finishing this tutorial, I've got a strong knowledge in python packages like pandas, numpy, and MySQL for Database Management.",
    name: "Scaler",
    designation: "Python and SQL for Data Science",
    company: "https://www.scaler.com/academy/",
    certificate:
      "https://drive.google.com/file/d/1H3ZQ1s8jpD__a2ulfOMjH2KS10HvM11u/view?usp=sharing",
    image: scaler,
  },
  {
    id: 6,
    testimonial:
      "Every one starts from the beginning, like that this tutorial laid the foundation for my knowledge in Python Programming.",
    name: "Great Learning",
    designation: "Python for Machine Learning",
    company: "https://olympus.mygreatlearning.com/",
    certificate:
      "https://drive.google.com/file/d/1T9mi06kw7MO7bRHcuZCwZZ7ye2B4P7iJ/view?usp=sharing",
    image: greatlearning,
  },
];

const projects = [
  {
    name: "SumAI",
    description:
      "A web-based responsive weather platform built using reactjs, enabling users to input article URLs and obtain concise summaries with a single click. Ensured responsiveness across various devices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sumai,
    source_code_link: "https://github.com/Piraharish/AI-Summarizer",
    live_link: "https://sumai-aisummarizer.netlify.app/",
  },
  {
    name: "Forecastify",
    description:
      "A web-based responsive weather platform built using reactjs, providing details for both the current and searched locations, encompassing temperature, humidity, wind, and more.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "weatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Piraharish/Frontend-Weather",
    live_link: "https://forecastify-weather.netlify.app/",
  },
  {
    name: "Learners Hub",
    description:
      "An interactive and responsive front end design for a learning platform. Built using HTML, Bootstrap 5, CSS, and animate on scroll(aos) for scrolling animation. It's not functional, only contains the front end design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: learnershub,
    source_code_link: "https://github.com/Piraharish/Front-End-Project1",
  },
  {
    name: "Blog Site",
    description:
      "A user-friendly web app for writing and publishing blogs, featuring React Quill for easy post editing and streamlined image uploads using Multer. As a beginner project it needs more improvement",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Piraharish/Blog-site-react.js",
  },
  {
    name: "SkyKart",
    description:
      "A comprehensive e-commerce platform enabling users to purchase gadgets, fashion items, and dairy products. Integrated Razorpay for seamless payment gateway functionality.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Piraharish/E-Commerce-django",
  },
];

export { services, technologies, experiences, testimonials, projects };
