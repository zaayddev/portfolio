import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import zaidblogImg from "@/public/zaidblog.png";
import transcendenceImg from "@/public/transcendence.jpg";
import inceptionImg from "@/public/inception.jpeg";
import ircImg from "@/public/irc.png";
import swiftyImg from "@/public/swiftyApp.png";

export const links = [
  {
    name: "Home",
    deName: "Startseite",
    hash: "#home",
  },
  {
    name: "About",
    deName: "Über mich",
    hash: "#about",
  },
  {
    name: "Projects",
    deName: "Projekte",
    hash: "#projects",
  },
  {
    name: "Skills",
    deName: "Fähigkeiten",
    hash: "#skills",
  },
  {
    name: "Experience",
    deName: "Erfahrung",
    hash: "#experience",
  },
  {
    name: "Contact",
    deName: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesDataEn = [
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

export const experiencesDataDe = [
  {
    title: "Abitur",
    location: "Fes, Marokko",
    description: "Internationaler Abiturabschluss in Physik.",
    icon: React.createElement(LuGraduationCap),
    date: " 2021",
  },
  {
    title: "Computer Science",
    location: "Khouribga, Marokko",
    description:
      "Ich bin derzeit Student der Softwaretechnik an der 1337 (UM6P Coding School), die mit 42 network verbunden ist.",
    icon: React.createElement(FaReact),
    date: " 2021 - present",
  },
] as const;

export const projectsDataEn = [
  {
    title: "Swifty Campanion",
    description:
      "This project aims to Develop a mobile app utilizing the 42 API. Its primary function will be to display students information.",
    tags: ["React Native", "Expo", "TypeScript", "StyleSheet"],
    imageUrl: swiftyImg,
  },
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

export const projectsDataDe = [
  {
    title: "Swifty Campanion",
    description:
      "ist ein Projekt, das eine mobile App entwickeln soll, die die 42 API nutzt. Ihre Hauptfunktion wird darin bestehen, Informationen über Studierende anzuzeigen.",
    tags: ["React Native", "Expo", "TypeScript", "StyleSheet"],
    imageUrl: swiftyImg,
  },
  {
    title: "ZaidBlog",
    description:
      "hat zum Ziel, eine einfache und effiziente Blog-Website unter Verwendung moderner Webtechnologien zu erstellen.",
    tags: ["Next.js", "shadcnUi", "Sanity", "Tailwind", "TypeScript"],
    imageUrl: zaidblogImg,
  },
  {
    title: "ft_transcendence",
    description:
      " ist eine Full-Stack-Web-App, mit der Sie unter anderem Pong mit anderen Spielern spielen können, sowie Funktionen wie JWT, 2FA-Authentifizierung und Chat...",
    tags: ["Next.js", "Prisma", "Nest.js", "PostgreSQL", "TypeScript"],
    imageUrl: transcendenceImg,
  },
  {
    title: "Inception",
    description:
      "besteht darin, eine kleine Infrastruktur mit verschiedenen Diensten unter spezifischen Regeln einzurichten.",
    tags: ["Docker", "WordPress", "NGINX", "Docker-compose", "MariaDB"],
    imageUrl: inceptionImg,
  },
  {
    title: "FT_IRC",
    description:
      "ist ein einfacher IRC-Server, der auf dem RFC (hauptsächlich 2812) basiert und in C++ 98 geschrieben ist.",
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
  "React Native",
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
  "Notion"
] as const;
