"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { projectsDataDe } from "@/lib/data";
import Project from "./project.de";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Meine Projekte</SectionHeading>
      <div>
        {projectsDataDe.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
