"use client";

import Image from "next/image";
import img from "../../../public/images/software-developer-at-office.jpg";
import MaxWidth from "../layout/MaxWidth";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const PageBanner = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="relative h-[35vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* Content */}
      <MaxWidth className="relative z-10 h-full">
        <div className="flex h-full items-center">
          <div className="max-w-3xl space-y-[2rem] text-white">
            {/* Heading */}
            <h1
              className={`capitalize text-4xl md:text-[70px] font-bold
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              About Us
            </h1>
            <p className="uppercase font-bold">{`Home > About`}</p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default PageBanner;
