import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul>
            {tags.map((items, index) => {
              return (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {items}
                </li>
              );
            })}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Projects I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition"
        />
      </section>
    </div>
  );
}
