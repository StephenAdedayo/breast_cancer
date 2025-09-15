import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const whatsappPhone = "2348177776024";
  const defaultMessage = "Hi, I have a question about the app.";

  const waLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="bg-[#00A0AA] mb-5 w-full xl:px-40 md:px-20 px-3 flex justify-between items-center py-2">
      <div className="flex xl:gap-5 flex-col xl:flex-row gap-1 xl:items-center">
        <div className="flex items-center gap-2">
          <img src={assets.vector1} alt="" />
          <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px]">
            Adefarati, Akungba Akoko
          </p>
        </div>

        <div className="flex items-center gap-2">
          <img src={assets.mail} alt="" />
          <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px]">
            Emikeprecious2019@gmail.com
          </p>
        </div>
      </div>
      <a href={waLink}>
        <div className="flex items-center gap-2">
          <img src={assets.vector2} alt="" />
          <p className="text-[#F8F9FE] font-medium lg:text-[18px] md:text-[15px] text-[11px] underline">
            Connect on Whatsapp
          </p>
        </div>
      </a>
    </div>
  );
};

export default Header;
