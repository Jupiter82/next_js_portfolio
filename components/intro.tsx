"use client";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-(2).png"
              alt="Profile Picture"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0, y: 0 }}
      >
        {" "}
        <span className="font-bold">Hello, I'm Jupiter Bade.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div>
        <Link href="#contact">
          Contact me here <BsArrowRight />
        </Link>
        <a className="group bg-white">Download CV</a>
      </motion.div>
    </section>
  );
}
