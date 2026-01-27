"use client";

import React, { useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import img from "../../public/images/software-developer-at-office.jpg";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const data = [
  {
    image: img,
    name: "John Doe",
    designation: "CEO, Company",
    feedback:
      "Excellent experience working with the team. Excellent experience working with the team.",
  },
  {
    image: img,
    name: "John Doe",
    designation: "CEO, Company",
    feedback:
      "Excellent experience working with the team. Excellent experience working with the team.",
  },
  {
    image: img,
    name: "John Doe",
    designation: "CEO, Company",
    feedback:
      "Excellent experience working with the team. Excellent experience working with the team.",
  },
];

const Feedback = () => {
  const [active, setActive] = useState(1);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-[6rem] bg-[#F9F9F9]">
      <MaxWidth>

        {/* HEADING */}
        <div
          className={`transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <Heading
            isCenter
            heading="We provide our clients with the most innovative and effective"
            label="Client Feedback"
            className="w-[60%] mx-auto"
          />
        </div>

        {/* FEEDBACK CARDS */}
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              className={`mt-10 p-8 bg-[#001845] text-[#FFFFFF]
              transition-all duration-1000
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>

              <p className="mb-4 italic font-semibold">
                "{item.feedback}"
              </p>

              <div className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="text-sm">{item.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div
          className={`flex items-center justify-center gap-4 mt-8
          transition-all duration-700 delay-800
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ease-in-out
              ${
                active === i
                  ? "bg-[#001845] w-12 h-3 rounded-full"
                  : "bg-[#001845]/20 w-3 h-3 rounded-full"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </MaxWidth>
    </section>
  );
};

export default Feedback;
