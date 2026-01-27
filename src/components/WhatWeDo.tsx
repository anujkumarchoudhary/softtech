"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { GrCertificate } from "react-icons/gr";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const data = [
  {
    icon: <GrCertificate size={40} />,
    title: "Software Ideas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    icon: <GrCertificate size={40} />,
    title: "Software Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    icon: <GrCertificate size={40} />,
    title: "Payment Gateway",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    icon: <GrCertificate size={40} />,
    title: "Point Of Sales",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref}>
      <MaxWidth className="py-[6rem]">
        <Heading
          isCenter
          label="What We Do"
          heading="Discover Our Best Service Provided From Expert"
          className="w-[50%] mx-auto"
        />

        <div className="grid grid-cols-4 gap-8 pt-[3rem]">
          {data.map((item, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`space-y-4 bg-white p-[4rem] shadow-xl text-center
              transition-all duration-700
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="flex justify-center">{item.icon}</span>

              <h3 className="text-[1.4rem] font-extrabold">
                {item.title}
              </h3>

              <p>{item.description}</p>

              <div className="flex gap-2 justify-center">
                <a
                  href={item.link}
                  className="text-[#001845] font-semibold my-auto"
                >
                  Learn More
                </a>
                <IoArrowForwardOutline className="my-auto" />
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhatWeDo;
