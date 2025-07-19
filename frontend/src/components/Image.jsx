import React from "react";

const Image = ({ img }) => {
  return (
    // <div className="flex ">
      <div className="sm:w-[385px] w-full  h-[128px]  relative flex justify-center items-center rounded-lg bg-[#FFC567]">
        <img className="absolute bottom-0" src={img} alt="" />
      </div>
    // </div>
  );
};

export default Image;
