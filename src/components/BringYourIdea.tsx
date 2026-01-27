"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import img from "../../public/images/theres-our-solution-.jpg";
import Button from "./common/Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const BringYourIdea = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section
      ref={ref}
      className="relative py-[6rem] w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* Content */}
      <MaxWidth className="relative z-10 h-full">
        <div className="flex h-full items-center">
          <div className="max-w-3xl space-y-[2rem] text-white">

            {/* Label */}
            <span
              className={`uppercase tracking-widest block
              transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Bring Your Ideas
            </span>

            {/* Heading */}
            <h1
              className={`capitalize text-4xl md:text-[70px] font-bold leading-tight
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              We Have Expertise To Build Customization Software From Idea
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-blue-100
              transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Button */}
            <div
              className={`transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <Button name="Get a Quote" />
            </div>

          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default BringYourIdea;
