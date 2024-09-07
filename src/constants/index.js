import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular Ionic Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
    const experiences = [
    {
      title: "fronten Developer",
      company_name: "Gventure",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Fab 2024 - Aug 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Working closely with UX/UI designers to translate wireframes and prototypes into functional, user-friendly applications.",
        "Developed 5+ dashboards and admin panels in Angular, focusing on creating intuitive, scalable, and efficient user interfaces for enhanced data management and user experience.",
        "Designed and prototyped over 8 website UIs using Figma, delivering visually appealing and user-centric designs that align with client goals and brand identity.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Oasis Infobyte",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Building scalable and maintainable frontend architectures using React.js and modern JavaScript frameworks.",
        "Writing clean, maintainable code and comprehensive documentation to support long-term project sustainability.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "lLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Lorem Ipsum",
      designation: "xyz",
      company: "xyz.co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "lLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Lorem Ipsum",
      designation: "xyz",
      company: "xyz.in",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "lLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "Lorem Ipsum",
      designation: "xyz",
      company: "456xyz",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "B2B FAX  Website and Admin Panel",
      description:
      "An integrated platform combining a user-friendly B2B fax website with a robust admin panel, offering features like reports, billing, upload management, and purchase tracking for efficient fax operations.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
    
        {
          name: "Material Ui",
          color: "green",
        },
      ],
      image: carrent,
      source_code_link: "https://panel.b2befax.com/#/login",
    },
    {
      name: "Cybell Admin Panel",
      description:
        "A sleek and intuitive admin panel designed for managing user data, monitoring system performance, and streamlining administrative tasks with advanced analytics and reporting tools.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://signalmash.gventure.info/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: " ",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };