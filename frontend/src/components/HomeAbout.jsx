import React from "react";
import { assets } from "../assets/assets";

const HomeAbout = () => {
  const health = [
    { img: assets.image2, note: "Pediatrician" },
    { img: assets.image3, note: "Cardiologist" },
    { img: assets.image4, note: "Dermatologist" },
  ];

  return (
    <div className="my-28 w-full">
      <div className="space-y-5 mb-20 ">
        <p className="font-bold text-[46px]">
          Dedicated to provide best treatment.
        </p>
        <p className="text-[18px] font-medium w-[883px]">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
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
