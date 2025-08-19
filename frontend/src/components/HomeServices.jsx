import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { CanContext } from "../context/CanContext";
import Modal from "./Modal";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "Mental Health Service",
      img: assets.drop,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
       id: 2,
      title: "Eye Diseasses Service",
      img: assets.round,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
      id: 3,
      title: "Vaccination Service",
      img: assets.drop,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
    {
      id: 4,
      title: "Cardiology Service",
      img: assets.love,
      details:
        "The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention",
    },
  ];


   const {setIsModalOpen} = useContext(CanContext)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleModal = (id) => {
    setIsModalOpen(true)
    setActiveIndex(id)
  }

  return (
    <>
    <div className="my-28">
      <div className="flex flex-col gap-5  lg:flex-row justify-between lg:items-center mb-10">
        <div className="space-y-3">
          <p className="text-[#09A4AD] font-bold text-[16px]">
            SERVICES & TREATMENTS
          </p>
          <p className="xl:text-[46px] text-[25px] xl:w-[538px] w-full font-bold">
            More than 40 specialty and health care services
          </p>
        </div>

        <div className="">
          <button className="xl:px-6 px-4 py-2  bg-[#00A0AA] text-white  items-end rounded-md">
            See All Services
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleModal(service.id)}
            className="bg-white relative w-full rounded-lg p-8 flex gap-5"
          >
            <img className="size-[40px]" src={service.img} alt="" />
            <div className="space-y-5">
              <p className="font-bold text-[25px]">{service.title}</p>
              <p className="text-[14px] font-medium">{service.details}</p>
            </div>

            <div className="bg-[#D9D9D9] absolute bottom-0 right-0 py-1 px-4 rounded-br-lg">
              <img className="w-[20px]" src={assets.arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <Modal activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={services}/>
    </>
  );
};

export default HomeServices;
