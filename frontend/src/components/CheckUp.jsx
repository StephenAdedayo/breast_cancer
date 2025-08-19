import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Image from "./Image";
import { CanContext } from "../context/CanContext";

const CheckUp = () => {
  const tabs = ["women health", "Cancer screening", "Kids Vaccines"];

  const [activeIndex, setActiveIndex] = useState(0);

  const {navigate} = useContext(CanContext)

  return (
    <div className="my-28">
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-bold xl:text-[40px] sm:text-[30px] text-[25px]">Health Checkup Plans</p>
          <p className="font-medium xl:text-[20px] text-[] xl:w-[520px] w-full">
            They live in Bookmarks grove right at the coast of the Semantics, a
            large language ocean named flows.
          </p>

          <div className="bg-white rounded-lg grid lg:grid-cols-3 sm:grid-cols-2 :grid-cols-1 p-5">
            {tabs.map((tab, index) => (
              <button
                onClick={() => setActiveIndex(index)}
                key={index}
                className={`${
                  activeIndex === index
                    ? "bg-[#18A0A9] font-bold text-white"
                    : "font-bold"
                } px-6 py-3 text-[16px] rounded-md capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        {activeIndex === 0 && (
          <div className="flex justify-between flex-col-reverse max-lg:gap-10 lg:flex-row lg:items-end">
            <div className="space-y-5">
              <img src={assets.Frame} alt="" />
              <p className="font-bold text-[32px]">Women Health Checkup</p>
              <p className="font-medium text-[18px]">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Complete Blood Count with ESR
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Lipid Profile, Live Profile, kidney Profile{" "}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    USG Abdomen with Pelvis, Mammography
                  </p>
                </div>
              </div>

              <button className="bg-[#00A0AA] px-6 py-3 rounded-lg text-white ">
                Diagnose yourself
              </button>
            </div>

            <div className="lg:mt-0 md:mt-[340px] sm:mt-[350px] mt-[340px]">
              <Image img={assets.image6} />
            </div>
          </div>
        )}

        {activeIndex === 1 && (
          <div className="flex justify-between flex-col-reverse max-lg:gap-10 lg:flex-row lg:items-end">
            <div className="space-y-5">
              <img src={assets.Frame} alt="" />
              <p className="font-bold text-[32px]">Women Health Checkup</p>
              <p className="font-medium text-[18px]">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Complete Blood Count with ESR
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Lipid Profile, Live Profile, kidney Profile{" "}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    USG Abdomen with Pelvis, Mammography
                  </p>
                </div>
              </div>

              <button className="bg-[#00A0AA] px-6 py-3 rounded-lg text-white ">
                Diagnose yourself
              </button>
            </div>

            <div className="lg:mt-0 md:mt-[340px] sm:mt-[370px] mt-[340px]">
              <Image img={assets.image6} />
            </div>
          </div>
        )}

        {activeIndex === 2 && (
          <div className="flex justify-between flex-col-reverse max-lg:gap-10 lg:flex-row lg:items-end">
            <div className="space-y-5">
              <img src={assets.Frame} alt="" />
              <p className="font-bold text-[32px]">Women Health Checkup</p>
              <p className="font-medium text-[18px]">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Complete Blood Count with ESR
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    Lipid Profile, Live Profile, kidney Profile{" "}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <img src={assets.group1} alt="" />
                  <p className="font-medium text-[18px]">
                    USG Abdomen with Pelvis, Mammography
                  </p>
                </div>
              </div>

              <button onClick={() => navigate('/diagnose')} className="bg-[#00A0AA] px-6 py-3 rounded-lg text-white ">
                Diagnose yourself
              </button>
            </div>

            <div className="lg:mt-0 md:mt-[340px] sm:mt-[350px] mt-[340px]">
              <Image img={assets.image6} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckUp;
