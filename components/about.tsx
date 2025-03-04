"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.75 });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          BCA(Bachelor in Computer Application){" "}
        </span>
        , I decided to pursue my passion for programming.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        {/* My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js
          , Node.js, and MongoDB
        </span> */}
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        frontend software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games and watching movies.
      </p>
    </motion.section>
  );
}
