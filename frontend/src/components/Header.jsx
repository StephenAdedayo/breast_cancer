import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-[#00A0AA] mb-5 w-full xl:px-40 md:px-20 px-5 flex justify-between items-center py-2">
      <div className="flex xl:gap-5 flex-col xl:flex-row gap-1 xl:items-center">
        <div className="flex items-center gap-3">
          <img src={assets.vector1} alt="" />
          <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px]">
            90919 Madie run Apt. 790
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={assets.mail} alt="" />
          <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px]">
            medico@health.care
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img src={assets.vector2} alt="" />
        <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px] underline">
          Connect on Whatsapp
        </p>
      </div>
    </div>
  );
};

export default Header;
