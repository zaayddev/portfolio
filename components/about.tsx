/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from high school{" "}
        <span className="font-medium">👾</span>, I decided to pursue my passion
        for programming 👨🏻‍💻. I enrolled in a well known coding school and learned{" "}
        <span className="font-medium">computer science fundamentals</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem ✨. My core
        stack is <span className="font-medium">React especially Next.js</span>.
        I am always looking to learn new technologies. I am currently looking
        for an <span className="font-medium">internship position</span> as a
        frontend developer. <span className="italic">When I'm not coding</span>,
        I enjoy watching movies🍿. I also enjoy doing some{" "}
        <span className="font-medium">codingames and codeforces 🤖</span>
      </p>
    </motion.section>
  );
}
