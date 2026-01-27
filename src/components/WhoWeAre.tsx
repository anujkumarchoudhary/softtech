"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import img from "../../public/images/whowe.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const data = [
  {
    title: "15 Years Experience",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Best Certification Team",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Unlimited Revision",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const WhoWeAre = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="bg-[#F9F9F9]">
      <MaxWidth className="grid grid-cols-3 gap-2 py-[6rem]">

        {/* LEFT CONTENT */}
        <div
          className={`col-span-2 my-auto transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <Heading
            label="Who We Are"
            heading="we specialize in providing tailor-made software solutions Custom Needed"
          />

          <div className="grid grid-cols-2 gap-[4rem]">

            {/* Overview Card */}
            <div
              className={`space-y-5 bg-white p-[3rem] border-[0.4rem]
              border-[#0466C8]/20 hover:border-[#0466C8]
              transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex gap-3">
                <span className="bg-[#0466C8] h-1.5 w-20 my-auto" />
                <h3 className="text-[1.6rem] font-bold">Overview</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
            </div>

            {/* Feature List */}
            <div className="my-auto">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 my-8 transition-all duration-700
                  delay-[${300 + idx * 150}ms]
                  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                >
                  <span className="bg-[#0466C8] w-1.5 h-12 my-auto" />
                  <div>
                    <h3 className="text-[1.3rem] font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`col-span-1 transition-all duration-1000 delay-300
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
        >
          <Image src={img} alt="Who we are" />
        </div>

      </MaxWidth>
    </section>
  );
};

export default WhoWeAre;
