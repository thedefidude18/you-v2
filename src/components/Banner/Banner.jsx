import React from "react";
import styled from "./Banner.module.css";
import Image from "next/image";
function Banner({ text, image }) {

  return (
    <div className=" flex justify-between items-center custom-gradient-bg  px-4 w-full  ">
      <h1 className=" text-white sm:text-[40px] text-[20px]" dangerouslySetInnerHTML={{ __html: text }} />

      <img
        src={image}
        alt="bannerImage"
        className="sm:h-[160px] sm:w-[180px] h-[80px] w-[90px] "
      />
    </div>
  );
}

export default Banner;
