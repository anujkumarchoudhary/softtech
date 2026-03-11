"use client";
import React from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/logo-cetech.png";
import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-[#001845]">
      <MaxWidth className="flex justify-between h-[10vh] items-center py-4 text-white">
        <div>
          {/* <Image src={logo} width={200} height={40} alt="logo" /> */}
          <h2
            onClick={() => router.push("/")}
            className="cursor-pointer text-[40px] capitalize text-[#FFFFFF]"
          >
            SoftTech
          </h2>
        </div>
        <div className="hidden lg:block">
          {menuData?.map((menu, idx) => {
            return (
              <span
                key={idx}
                onClick={() => router.push(menu.link)}
                className="my-auto mx-4 uppercase cursor-pointer"
              >
                {menu.title}
              </span>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-8">
          <p className="cursor-pointer text-[#FFFFFF] font-bold my-auto">+91: 9953176985</p>
          <Button name="Get a Quote" />
        </div>
      </MaxWidth>
    </div>
  );
};

export default Header;
