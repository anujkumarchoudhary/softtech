"use client";
import React from "react";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

export interface HeadingProps {
  heading: string;
  description?: string;
  label: string;
  isCenter?: boolean;
  className?: string;
}

const Heading = ({
  label,
  heading,
  description,
  isCenter,
  className,
}: HeadingProps) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={`space-y-[2rem] text-[#001845] ${className}`}>
      <span
        className={`uppercase tracking-widest py-1 text-sm font-semibold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
          isCenter ? "mx-auto flex justify-center text-center" : ""
        }`}
      >
        {label}
      </span>
      <h2
        className={`capitalize py-3 text-2xl md:text-[50px] font-bold leading-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
          isCenter ? "mx-auto flex justify-center text-center" : ""
        }`}
      >
        {heading}
      </h2>
      <p
        className={`mt-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading;
