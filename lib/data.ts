import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import zaidblogImg from "@/public/zaidblog.png";
import transcendenceImg from "@/public/transcendence.jpg";
import inceptionImg from "@/public/inception.jpeg";
import ircImg from "@/public/irc.png";

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
    title: "Baccalaureate",
    location: "Fes, Morocco",
    description: "International Baccalaureate Degree In Physical Science.",
    icon: React.createElement(LuGraduationCap),
    date: " 2021",
  },
  {
    title: "Computer Science",
    location: "Khouribga, Morocco",
    description:
      "I'm currently a software engineering student at 1337 (UM6P coding school) associated with 42 network.",
    icon: React.createElement(FaReact),
    date: " 2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ZaidBlog",
    description:
      "This project aims to create a simple and efficient blog website using modern web technologies",
    tags: ["Next.js", "shadcnUi", "Sanity", "Tailwind", "TypeScript"],
    imageUrl: zaidblogImg,
  },
  {
    title: "ft_transcendence",
    description:
      "A fullstack web app where you can play pong with players among other things such as JWT, 2fa authentification, chat...",
    tags: ["Next.js", "Prisma", "Nest.js", "PostgreSQL", "TypeScript"],
    imageUrl: transcendenceImg,
  },
  {
    title: "Inception",
    description:
      "This project consists in having you set up a small infrastructure composed of different services under specific rules.",
    tags: ["Docker", "WordPress", "NGINX", "Docker-compose", "MariaDB"],
    imageUrl: inceptionImg,
  },
  {
    title: "FT_IRC",
    description:
      "Simple IRC Server based on the RFC (mainly 2812) written in (C++ 98)",
    tags: [
      "C++",
      "Python",
      "OOP",
      "Socket Programming",
      "Network Administration",
    ],
    imageUrl: ircImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Java",
  "c++",
  "Docker",
  "PostgreSQL",
  "Unix",
  "Framer Motion",
  "Figma",
  "Jira",
] as const;
