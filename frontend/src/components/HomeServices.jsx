import React from "react";
import { assets } from "../assets/assets";

const HomeServices = () => {
  const services = [
    {
      title: "Mental Health Service",
      img: assets.drop,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
      title: "Eye Diseasses Service",
      img: assets.round,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
      title: "Vaccination Service",
      img: assets.drop,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
      title: "Cardiology Service",
      img: assets.love,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
  ];

  return (
    <div className="my-28">
      <div className="flex justify-between items-center mb-10">
        <div className="space-y-3">
          <p className="text-[#09A4AD] font-bold text-[16px]">
            SERVICES & TREATMENTS
          </p>
          <p className="text-[46px] w-[538px] font-bold">
            More than 40 specialty and health care services
          </p>
        </div>

        <div className="">
          <button className="px-6 py-3 bg-[#00A0AA] text-white  items-end rounded-md">
            See All Services
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white relative w-full rounded-lg p-8 flex gap-5"
          >
            <img className="size-[50px]" src={service.img} alt="" />
            <div className="space-y-5">
              <p className="font-bold text-[32px]">{service.title}</p>
              <p className="text-[18px] font-medium">{service.details}</p>
            </div>

            <div className="bg-[#D9D9D9] absolute bottom-0 right-0 py-2 px-4 rounded-br-lg">
              <img className="w-[20px]" src={assets.arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
