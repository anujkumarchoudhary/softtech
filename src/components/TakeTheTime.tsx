"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import img from "../../public/images/thakethetime.jpg";
import img2 from "../../public/images/thakethetime2.jpg";
import { IoPlaySharp } from "react-icons/io5";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const TakeTheTime = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-[6rem]">
      <MaxWidth>

        {/* TOP ROW */}
        <div className="flex justify-between">

          {/* HEADING */}
          <div
            className={`w-[50%] transition-all duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Heading
              heading="We work closely with you to develop a customized solution"
              label="take the time to understand"
            />
          </div>

          {/* IMAGE */}
          <div
            className={`relative w-[35%] h-[15rem] bg-yellow-200 p-2
            transition-all duration-1000 delay-200
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <Image
              src={img}
              fill
              alt="Take the time"
              className="object-center"
            />
          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="mt-10 grid grid-cols-3 gap-[4rem]">

          {/* VIDEO CARD */}
          <div
            className={`relative transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <Image src={img2} alt="Take the time" fill />
            <span className="absolute top-1/2 left-1/2 transform
              -translate-x-1/2 -translate-y-1/2
              bg-[#FFFFFF] text-[#001845]
              hover:bg-[#001845] hover:text-[#FFFFFF]
              cursor-pointer transition-all p-5 rounded-full">
              <IoPlaySharp size={40} />
            </span>
          </div>

          {/* BLUE CARD */}
          <div
            className={`bg-[#001845] space-y-3 p-[3rem] text-[#FFFFFF]
            transition-all duration-1000 delay-450
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <p className="font-semibold">
              ” Lorem ipsum dolor sit amet, consectetur adipiscing elit sed “
            </p>

            <div className="flex gap-5 pt-6">
              <FaCheck size={20} />
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="flex gap-5">
              <FaCheck size={20} />
              <p>Sit amet consectetur</p>
            </div>

            <div className="flex gap-5">
              <FaCheck size={20} />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          {/* WHITE CARD */}
          <div
            className={`space-y-5 bg-[#FFFFFF] py-[3rem]
            transition-all duration-1000 delay-600
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="flex gap-3">
              <span className="bg-[#0466C8] h-1.5 w-20 my-auto" />
              <h3 className="text-[1.6rem] font-bold">
                Experienced Developer
              </h3>
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

        </div>
      </MaxWidth>
    </section>
  );
};

export default TakeTheTime;
