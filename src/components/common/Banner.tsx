"use client";

import Image from "next/image";
import img from "../../../public/images/software-developer-at-office.jpg";
import MaxWidth from "../layout/MaxWidth";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";

const Banner = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, heading, description, button, button2 } = staticData?.home?.banner;

  return (
    <section ref={ref} className="relative py-[3rem] lg:py-[6rem] w-full overflow-hidden">
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
              className={`text-sm md:text-base uppercase tracking-widest block
              transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {label}
            </span>

            {/* Heading */}
            <h1
              className={`text-[#FFFFFF] capitalize
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {heading}
            </h1>

            {/* Description */}
            <p
              className={`mt-4 text-lg md:text-xl text-blue-100
              transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {description}
            </p>

            {/* Buttons */}
            <div
              className={`flex gap-4 transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button name={button} name2={button2} is2button={true} />
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Banner;
