"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import blog from "../../public/images/blog_1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";

const data = [
  {
    id: 1,
    label: "Freelancer",
    image: blog,
    title: "Tips Recomendation Remote Worker Today",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-01",
    link: "/blog/1",
  },
  {
    id: 2,
    label: "Freelancer",
    image: blog2,
    title: "Best Choicing Frontend Framework Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-02",
    link: "/blog/2",
  },
  {
    id: 3,
    label: "Freelancer",
    image: blog3,
    title: "Tips For Get The Clean Code Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-03",
    link: "/blog/3",
  },
];

const Blog = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-[6rem]">
      <MaxWidth>
        {/* HEADING */}
        <div
          className={`transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <Heading
            isCenter
            heading="Lets Read Our Blog Post Content & Writing Resource"
            label="Blog Content"
            className="w-[60%] mx-auto"
          />
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-3 gap-[2rem] mt-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              className={`relative mt-10 bg-[#001845] text-[#ffffff]
              transition-all duration-1000
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            >
              <div className="relative">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[20rem] object-cover"
                  />
                )}
                {/* LABEL BADGE */}
                <span className="absolute top-4 left-4 bg-[#5C677D] px-4 py-2 uppercase font-semibold">
                  {item.label}
                </span>

                {/* DATE BADGE */}
                <p className="absolute top-[45%] left-2 bg-[#023E7D] p-5 font-bold text-[1.5rem]">
                  15 <br /> <span className="text-[1rem]">APR</span>
                </p>
              </div>

              <div className="p-[3rem]">
                <h3 className="text-[1.65rem] font-bold mt-2">{item.title}</h3>
                <p className="mt-4">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Blog;
