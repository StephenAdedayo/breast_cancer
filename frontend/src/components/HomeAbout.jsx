import React from "react";
import { assets } from "../assets/assets";

const HomeAbout = () => {
  const health = [
    { img: assets.image2, note: "Awareness & Education" },
    { img: assets.image3, note: "Early Diagnosis Support" },
    { img: assets.image4, note: "Care & Resources" },
  ];

  return (
    <div className="my-28 w-full">
      <div className="space-y-5 mb-20 ">
        <p className="font-bold xl:text-[40px] text-[35px]">
    Dedicated to Saving Lives <br /> Through  Early Detection
        </p>
        <p className="text-[18px] font-medium xl:w-[800px] lg:w-[800px] w-full">
         Our mission is simple: to raise awareness and make early diagnosis of 
    <span className="font-semibold"> Breast Cancer </span> and 
    <span className="font-semibold"> Prostate Cancer </span> accessible to everyone.  
    By combining education, risk assessment, and technology-driven tools, 
    we empower you to take control of your health and act early.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-14 grid-cols-1">
        {health.map((heal, index) => (
          <div className="relative ">
            <div className="overflow-hidden rounded-lg">
              <img
                className="rounded-md w-full transition-all duration-500 delay-75 hover:scale-110"
                src={heal.img}
                alt=""
              />
            </div>
            <div className="absolute -bottom-10 left-10 px-4 py-3 bg-[#00A0AA] rounded-lg">
              <p className="text-[14px] font-bold text-white">
                For your health
              </p>
              <p className="text-[18px] font-bold text-white">{heal.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
