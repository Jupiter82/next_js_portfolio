import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((items, index) => (
          <React.Fragment key={index}>
            <Project {...items} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>tags</p>
      <p>ProjectProps</p>
    </section>
  );
}
