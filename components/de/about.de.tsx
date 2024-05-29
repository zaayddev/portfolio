/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Über mich</SectionHeading>
      <p className="mb-3">
        Nach dem Abschluss der High School{" "}
        <span className="font-medium">👾</span> beschloss ich, meiner
        Leidenschaft für das Programmieren 👨🏻‍💻 nachzugehen. Ich schrieb mich in
        einer bekannten Codingschule ein und lernte{" "}
        <span className="font-medium">die Grundlagen der Informatik</span>.{" "}
        <span className="italic">Mein Lieblingsteil des Programmierens</span>{" "}
        ist der Aspekt des Problemlösens. Ich{" "}
        <span className="underline">liebe</span> das Gefühl, endlich eine Lösung
        für ein Problem gefunden zu haben ✨. Mein Kern-Stack ist{" "}
        <span className="font-medium">
          React Native, React, insbesondere Next.js
        </span>
        . Ich bin immer auf der Suche, neue Technologien zu lernen. Zurzeit
        suche ich eine <span className="font-medium">Praktikumsstelle</span> als
        Frontend-Entwickler.{" "}
        <span className="italic">Wenn ich nicht programmiere</span>, sehe ich
        gerne Filme 🍿. Ich mache auch gerne{" "}
        <span className="font-medium">Codingames und Codeforces 🤖</span>.
      </p>
    </motion.section>
  );
}
