import React from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const TipsBanner = () => {
  return (
        <div>
      


    <div className="px-5 mt-10 lg:px-40 bg-[#FFC567] rounded-lg min-h-[50vh] flex items-center justify-center text-center">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-[#00A0AA] lg:text-[50px] md:text-[35px] text-[28px]">
          HealthTips
        </p>

        <p className="text-[#102D47] max-w-[500px] lg:text-[20px] text-[17px]">
We offer intelligent, accessible tools  to help users detect
          prostate cancer risks early  and make informed health decisions.
        </p>

        <div className="flex items-center justify-center gap-1">
          <NavLink
            className={"text-[17px] lg:text-[20px]"}
            to={"/"}
          >
            Home
          </NavLink>
           
           <div>
             <MdKeyboardArrowRight className="text-[21px]"/>

           </div>

          <NavLink
            className={"text-[#00A0AA] text-[17px]  lg:text-[20px]"}
            to={"/healthtips"}
          >
            Healthtips
          </NavLink>
        </div>
      </div>
    </div>
 

    </div>
  )
}

export default TipsBanner
