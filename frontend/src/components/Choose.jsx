import React, { useContext } from "react";
import { assets } from "../assets/assets";
import Image from "./Image";
import { CanContext } from "../context/CanContext";

const Choose = () => {
  const why = [
     "Accurate ML-Based Predictions",
  "Simple and User-Friendly",
  "Focus on Early Detection",
  "Accessible Anytime, Anywhere",
  "Guidance and Support Resources",
  "Completely Free to Use",
  ];

  const {navigate} = useContext(CanContext)

  return (
    <div className="w-full mt-28 ">
      <div className="flex justify-between flex-col max-lg:gap-10 lg:flex-row lg:items-end lg:mt-0 mt-[300px]">
        <div className="flex">
          <Image img={assets.image5} />
        </div>

        <div className="h-full space-y-6">
          <h1 className="font-bold xl:text-[40px] text-[20px]">Why Use Our Application?</h1>

          <div className="space-y-4">
            {why.map((wh) => (
              <div className="flex gap-3 items-center">
                <img src={assets.group} alt="" />
                <p className="xl:text-[20px] text-[16px] font-medium">{wh}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-5">
        <h1 className="font-bold lg:text-[35px] sm:text-[30px] text-[20px]">  Empowering You with Technology <br /> and Care
</h1>
        <p className="font-medium xl:text-[20px] text-[16px] xl:w-[600px] md:w-[500px] w-full">
           Our platform combines advanced machine learning with a compassionate, 
  patient-centered approach. By answering a short health questionnaire, 
  you can instantly know if your risk is Negative or Positive — helping you 
  take control of your health early, and it’s completely free.
        </p>
        <button onClick={() => navigate("/diagnose")} className="font-medium text-white bg-[#00A0AA] px-6 py-3 rounded-lg">
  Get Your Result
        </button>
      </div>
    </div>
  );
};

export default Choose;
