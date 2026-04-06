import React from "react";

const Button = ({
  name,
  name2,
  is2button,
  buttonWidth,
  className,
  handleClick,
}: any) => {
  const widthClass = buttonWidth === "full" ? "w-full" : "w-auto";

  return (
    <div className={`flex gap-2 ${className}`}>
      <div
        onClick={handleClick}
        className={`bg-[#0466C8] text-center ${widthClass} font-semibold uppercase text-[#FFFFFF] px-6 lg:px-12 py-[0.85rem] cursor-pointer hover:scale-105 text-[16px] transition-transform`}
      >
        {name}
      </div>
      {is2button && (
        <div className="bg-transparent text-[16px] border-2 border-white font-semibold uppercase text-white px-6 lg:px-12 py-[0.85rem] cursor-pointer hover:scale-105 transition-transform">
          {name2}
        </div>
      )}
    </div>
  );
};

export default Button;
