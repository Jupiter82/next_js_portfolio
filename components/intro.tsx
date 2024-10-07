import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/profile-(2).png"
            alt="Profile Picture"
            width="192"
            height="192"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
