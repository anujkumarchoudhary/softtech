import React from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/logo-cetech.png";
import Image from "next/image";
import { footerMenuData, menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#001845]">
      <MaxWidth className="grid grid-cols-4 gap-[2rem] py-[6rem] text-white">
        <div className="">
          <h2 className="text-[2rem] font-bold">SoftTech</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-x-20">
            {/* Left column */}
            <div className="space-y-2">
              <h2 className="text-[1.25rem] font-bold mb-4">Quick Link</h2>
              {footerMenuData.slice(0, 5).map((menu, idx) => (
                <div
                  key={idx}
                  className="flex gap-1 uppercase cursor-pointer"
                >
                  <IoIosArrowForward className="my-auto" />
                  <p>
                    <span className="my-auto">{menu.title}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-2">
              <h2 className="text-[1.25rem] font-bold mb-4">Quick Link</h2>
              {footerMenuData.slice(5).map((menu, idx) => (
                <div
                  key={idx}
                  className="flex gap-1 uppercase cursor-pointer"
                >
                  <IoIosArrowForward className="my-auto" />
                  <p>
                    <span className="my-auto">{menu.title}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-[1.25rem] font-bold">Head Office Address</h2>
          <p>Lumbung Hidup St 425 East Java Madiun City Block ABC 123</p>
          <h2 className="text-[1.25rem] pt-2 font-bold">Days Open</h2>
          <p>Monday - Friday 08 AM - 10 PM</p>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
