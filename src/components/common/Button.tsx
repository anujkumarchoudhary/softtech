import React from "react";

const Button = ({ name, name2, is2button }: any) => {
  return (
    <div className="flex gap-2">
      <div className="bg-[#0466C8] font-semibold uppercase text-[#FFFFFF] px-12 py-[0.85rem] cursor-pointer hover:scale-105 transition-transform">
        {name}
      </div>
      {is2button && (
        <div className="bg-transparent border-2 border-white font-semibold uppercase text-white px-12 py-[0.85rem] cursor-pointer hover:scale-105 transition-transform">
          {name2}
        </div>
      )}
    </div>
  );
};

export default Button;
