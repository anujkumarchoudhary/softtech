"use client";
import React from "react";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

export interface HeadingProps {
  heading: string;
  isHeadingH1?: boolean;
  description?: string;
  label: string;
  isCenter?: boolean;
  className?: string;
  textColor?: string;
  isButton?:boolean;
}

const Heading = ({
  label,
  heading,
  isHeadingH1,
  description,
  isCenter,
  className,
  textColor,
  isButton
}: HeadingProps) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={`space-y-[2rem] text-[#001845] ${className}`}>
      <span
        className={`uppercase tracking-widest py-1 text-sm font-semibold text-[${textColor || "#000000"}] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
          isCenter ? "mx-auto flex justify-center text-center" : ""
        }`}
      >
        {label}
      </span>
      {isHeadingH1 ? (
        <h1
          className={`capitalize py-3 leading-tight text-[${textColor || "#000000"}] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
            isCenter ? "mx-auto flex justify-center text-center" : ""
          }`}
        >
          {heading}
        </h1>
      ) : (
        <h2
          className={`capitalize py-3 text-[${textColor || "#000000"}] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
            isCenter ? "mx-auto flex justify-center text-center" : ""
          }`}
        >
          {heading}
        </h2>
      )}

      <p
        className={`mt-4 text-[${textColor || "#000000"}] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {description}
      </p>
      {isButton && <Button name="Get a Quote" />  }
    </div>
  );
};

export default Heading;
