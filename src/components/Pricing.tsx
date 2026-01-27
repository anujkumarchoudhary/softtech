"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import img from "../../public/images/pricing.jpg";
import Heading from "./common/Heading";
import PriceCard from "./card/PriceCard";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const pricingContents = [
  {
    title: "Starter",
    decription: "Lorem ipsum dolor sit amet",
    price: "15",
    features: [
      "Full Custimization",
      "Clean Code",
      "Exclusive Programs",
      "Expert Consultation",
    ],
  },
  {
    title: "Medium",
    decription: "Lorem ipsum dolor sit amet",
    price: "32",
    features: [
      "Full Custimization",
      "Clean Code",
      "Exclusive Programs",
      "Expert Consultation",
    ],
  },
  {
    title: "Expert",
    decription: "Lorem ipsum dolor sit amet",
    price: "69",
    features: [
      "Full Custimization",
      "Clean Code",
      "Exclusive Programs",
      "Expert Consultation",
    ],
  },
];

const Pricing = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="relative py-[6rem] w-full">
      {/* BACKGROUND IMAGE */}
      <Image
        src={img}
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* CONTENT */}
      <MaxWidth className="relative z-10 h-full">

        {/* HEADING */}
        <div
          className={`transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <Heading
            isCenter
            heading="Choose Our Flexible Pricing Plan For Customizing Software"
            label="Pricing Plan"
            className="w-[55%] mx-auto text-white mb-8"
          />
        </div>

        {/* PRICE CARDS */}
        <div className="grid grid-cols-3 pt-[2rem] gap-[2.5rem]">
          {pricingContents.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-1000
              delay-[${300 + index * 150}ms]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            >
              <PriceCard
                idx={index}
                title={plan.title}
                decription={plan.decription}
                price={plan.price}
                features={plan.features}
              />
            </div>
          ))}
        </div>

      </MaxWidth>
    </section>
  );
};

export default Pricing;
