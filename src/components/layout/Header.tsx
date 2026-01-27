import React from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/logo-cetech.png";
import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="bg-[#001845]">
      <MaxWidth className="flex justify-between h-[10vh] items-center py-4 text-white">
        <div>
          {/* <Image src={logo} width={200} height={40} alt="logo" /> */}
          <h1 className="capitalize text-4xl md:text-[50px] font-bold leading-tight">
            SoftTech
          </h1>
        </div>
        <div>
          {menuData?.map((menu, idx) => {
            return (
              <span key={idx} className="my-auto mx-4 uppercase cursor-pointer">
                {menu.title}
              </span>
            );
          })}
        </div>
        <div className="flex gap-8">
          <p className="cursor-pointer font-bold my-auto">+91: 9953176985</p>
          <Button
            name="Get a Quote"/>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Header;
