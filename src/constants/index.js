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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Stage Dévelopeur FullStack",
    company_name: "Scalab",
    date: "Avril 2023 - Août 2023",
    iconBg: "#383E56",
    points: [
      "Développement d'une application web avec React et Tailwind pour la gestion des patients",
      "Développement d'une application mobile avec React Native pour faciliter la vie des patients avec des troubles mentaux",
      "Collaboration avec une équipe composée de médecins, de concepteurs et d'autres développeurs",
      "Participation aux réunions pour discuter des nouvelles fonctionnalités et des problèmes rencontrés",
      "Création d'un API RESTful avec Node.js et MongoDB pour rélaiser un login,inscription et la gestion des données",
    ],
  },
  {
    title: "Dévelopeur FullStack",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mars 2022 - Présent",
    points: [
      "développement d'une application web de e-commerce à l'aide de react",
      "création d'un API pour faciliter la gestion des produits et des commandes",
      "j'ai travaillé sur une interface web (un site de présentation) pour une petite entreprise ",
    ],
  },
  {
    title: "Stage Dévelopeur Backend",
    company_name: "Sami KODIA Experts",
    date: "Avril 2022 - Mai 2022",
    iconBg: "#383E56",
    points: [
      "Réalisations des scripts python pour la gestion des données",
      "Création d'un API RESTful avec Java Spring Boot",
      "Implementation des tests unitaires avec JUnit",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Plate-forme basée sur le web qui permet aux utilisateurs de rechercher, de réserver et de gérer des locations de voitures auprès de différents fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins en matière de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Application web qui permet aux utilisateurs de rechercher des offres d'emploi, de visualiser les fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur localisation actuelle.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et qui offre des recommandations sur les destinations les plus populaires.",
    tags: [
      {
        name: "nextjs",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
