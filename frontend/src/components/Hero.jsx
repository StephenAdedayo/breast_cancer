import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { CanContext } from "../context/CanContext";

const Hero = () => {

  const {navigate} = useContext(CanContext)

  return (
    <div className="flex gap-20 mt-10 w-full">
      <div className="bg-[#FFC567] relative flex-[50%] w-[497px] h-[480px] rounded-xl flex items-center justify-center">
        <img src={assets.image} alt="" />
        <div className="bg-white p-3 absolute top-18 -left-14 flex gap-2 items-center">
          <img src={assets.image1} alt="" />
          <p className="text-[14px] font-medium">Get Tested</p>
        </div>
      </div>

      <div className="space-y-5  flex-[50%]">
        <p className="text-[#00A0AA] font-bold text-[20px]">
          Welcome to Medico Healthcare
        </p>
        <p className="font-bold text-[70px]">
          Your Journey to Better Health Starts Here
        </p>

        <button onClick={() => navigate("/diagnose")} className="font-[bold] bg-[#00A0AA] px-6 py-3 rounded text-white">
          Diagnose Yourself
        </button>
      </div>
    </div>
  );
};

export default Hero;
