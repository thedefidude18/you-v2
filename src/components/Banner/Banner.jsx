import React from "react";
import styled from "./Banner.module.css";
import Image from "next/image";
function Banner({ text, image,subtitle }) {

  return (
    <div className=" flex justify-between py-2 items-center custom-gradient-bg  px-4 w-full rounded-md">
      <div>

      <h1 className=" text-white sm:text-[40px] text-[20px]" dangerouslySetInnerHTML={{ __html: text }} />
{subtitle &&<p className="  text-[#4E5B72] text-[14px]">{subtitle}</p>}
      </div>
     {image && <img
        src={image}
        alt=""
        className="sm:h-[160px] sm:w-[180px] h-[80px] w-[90px] "
      />}
    </div>
  );
}

export default Banner;
