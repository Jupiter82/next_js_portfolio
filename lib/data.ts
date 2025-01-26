import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "likhutamakoshi.palikasoft.com",
    description:
      "This project includes modules for Parichaye Patra management (Senior Citizens, Persons with Disabilities, and Single Women), Darta Chalani, and Business Registration",
    tags: ["React", "Next.js", "Redux", "Tailwind", "REST APIs"],
    imageUrl: "/likhutamakosi.PNG",
    href: "https://likhutamakoshi.palikasoft.com",
  },
  {
    title: "likhupike.palikasoft.com",
    description:
      "Includes modules for Parichaye Patra, Darta Chalani, Planning ,Personal Information System (PIS), Legal Case,Project MS and Business Registration",
    tags: ["React", "Next.js", "Redux", "Tailwind", "REST APIs"],
    imageUrl: "/Likhupike.PNG",
    href: "https://likhupike.palikasoft.com",
  },
  {
    title: "sdims-maiwakhola.palikasoft.com",
    description:
      "This project includes modules for Parichaye Patra management (Senior Citizens, Persons with Disabilities),Legal Case and Business Registration",
    tags: ["React", "Next.js", "Redux", "Tailwind", "REST APIs"],
    imageUrl: "/maiwakhola.PNG",
    href: "https://sdims-maiwakhola.palikasoft.com",
  },
  {
    title: "manangngisyang.palikasoft.com",
    description:
      "This project includes modules for Parichaye Patra management (Senior Citizens, Persons with Disabilities) and Business Registration",
    tags: ["React", "Next.js", "Redux", "Tailwind", "REST APIs"],
    imageUrl: "/maiwakhola.PNG",
    href: "https://manangngisyang.palikasoft.com",
  },
  {
    title: "Communist Party Of Nepal",
    description:
      "Worked on frontend development, collaborated with PHP backend developers to integrate and enhance front-end functionality",
    tags: ["Bootstrap", "JavaScript", "jquery"],
    imageUrl: "/CPNMC.PNG",
    href: "https://cpnmcbagmati.org.np",
  },
  {
    title: "Lumbini Devlopment Trust",
    description:
      "Worked on frontend development, collaborated with PHP backend developers to integrate and enhance front-end",
    tags: ["Bootstrap", "JavaScript", "jquery"],
    imageUrl: "/Lumbini.PNG",
    href: "https://lumbinidevtrust.gov.np",
  },
  {
    title: "Digital Profile",
    description:
      "Worked on frontend development, collaborated with .NET backend developers to integrate and enhance front-end functionality",
    tags: ["Bootstrap", "JavaScript", "jquery"],
    imageUrl: "/DigitalProfile.PNG",
    href: "http://digitalprofile-pratappur.palikaapps.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  // "Node.js",
  "Git",
  "Tailwind",
  "bootstrap",
  // "Prisma",
  // "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
