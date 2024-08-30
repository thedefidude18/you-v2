import React from "react";
import styled from "./Banner.module.css";
import Image from "next/image";
function Banner({ text, image,subtitle }) {

  return (
    <div className=" flex justify-between items-center custom-gradient-bg  px-4 w-full rounded-md">
      <div>

      <h1 className=" text-white sm:text-[40px] text-[20px]" dangerouslySetInnerHTML={{ __html: text }} />
<p className="  text-[#4E5B72]">{subtitle}</p>
      </div>
      <img
        src={image}
        alt=""
        className="sm:h-[160px] sm:w-[180px] h-[80px] w-[90px] "
      />
    </div>
  );
}

export default Banner;
