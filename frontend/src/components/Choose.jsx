import React, { useContext } from "react";
import { assets } from "../assets/assets";
import Image from "./Image";
import { CanContext } from "../context/CanContext";

const Choose = () => {
  const why = [
    "Safety First Quality Must",
    "Patient-Centric Approach",
    "Focused Leadership",
    "Cutting-Edge Technology",
    "Transparent Pricing",
    "Coordinated Care",
  ];

  const {navigate} = useContext(CanContext)

  return (
    <div className="w-full mt-28 ">
      <div className="flex justify-between items-end">
        <div className="flex ">
          <Image img={assets.image5} />
        </div>

        <div className="h-full space-y-6">
          <h1 className="font-bold text-[40px]">Why Use Our Application?</h1>

          <div className="space-y-4">
            {why.map((wh) => (
              <div className="flex gap-3 items-center">
                <img src={assets.group} alt="" />
                <p className="text-[20px] font-medium">{wh}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-5">
        <h1 className="font-bold text-[40px]">Wellness, Compassion, Quality</h1>
        <p className="font-medium text-[20px] w-[700px]">
          They live in Bookmarks grove right at the coast of the Semantics, a
          large language ocean. A small river named Duden flows by their place
          and supplies it.
        </p>
        <button onClick={() => navigate("/diagnose")} className="font-medium text-white bg-[#00A0AA] px-6 py-3 rounded-lg">
          Diagnose yourself
        </button>
      </div>
    </div>
  );
};

export default Choose;
