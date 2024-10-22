import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((items, index) => (
          <React.Fragment key={index}>
            <Project {...items} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
