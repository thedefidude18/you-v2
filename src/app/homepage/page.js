"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../projects/Projects.module.css";
import { getProjects } from "@/utils";
import ProjectCard from "@/components/projectCard/ProjectCard";
import ProjectBand from "@/components/projectCard/ProjectBand";
import { sharedState } from "../layout";
import { useAccount } from "wagmi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { TbFilterFilled } from "react-icons/tb";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="bg-red-600 font-sans text-black max-sm:h-[70vh]">
      <Swiper
        className="sm:w-[calc(100vw-370px)] max-sm:w-[calc(100vw-10px)] h-full"
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return "";
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="flex justify-center items-center text-xl bg-white">
          <div
            className={`bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg relative max-sm:h-[70vh]`}
          >
            <div
              className={`py-10 bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg pl-10 relative max-sm:h-[70vh]`}
            >
              <div className="flex gap-[11rem]">
                <div className="2xl:w-[40%] xl:w-[50%] md:w-[60%] w-[90%] text-white">
                  <h1 className="text-4xl font-bold text-white">
                    Build Today{" "}
                  </h1>
                  <h1 className="text-4xl mt-2  font-bold  "> Fund Tomorow</h1>
                  <p className=" mt-2  ">
                    YouBuidl is crowdfunding web3 tool created by GiveStation
                    for developers, creators and teams.
                  </p>
                  <Link
                    href={"/submit-project"}
                    className="bg-[#4450A3] mt-4 inline-block px-10 max-sm:px-5 rounded-md h-[51px] py-2 justify-center items-center text-white "
                  >
                    Submit a Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute sm:right-8 max-sm:left-14 sm:bottom-[-50px] bottom-0 sm:h-full">
              <div className="relative">
                <Image
                  src={"/home/Group14.png"}
                  alt="bgimage"
                  width={304.19}
                  height={258}
                />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={"/home/Monkey.png"}
                    alt="monkey"
                    width={388}
                    height={258}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-xl bg-white">
          <div
            className={`bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg relative max-sm:h-[70vh]`}
          >
            <div
              className={`py-10 bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg pl-10 relative max-sm:h-[70vh]`}
            >
              <div className="flex gap-[11rem]">
                <div className="2xl:w-[40%] xl:w-[50%] md:w-[60%] w-[90%] text-white">
                  <h1 className="text-4xl font-bold text-white">
                    Build Today{" "}
                  </h1>
                  <h1 className="text-4xl mt-2  font-bold  "> Fund Tomorow</h1>
                  <p className=" mt-2  ">
                    YouBuidl is crowdfunding web3 tool created by GiveStation
                    for developers, creators and teams.
                  </p>
                  <Link
                    href={"/submit-project"}
                    className="bg-[#4450A3] mt-4 inline-block px-10 max-sm:px-5 rounded-md h-[51px] py-2 justify-center items-center text-white "
                  >
                    Submit a Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute sm:right-8 max-sm:left-14 sm:bottom-[-50px] bottom-0 sm:h-full">
              <div className="relative">
                <Image
                  src={"/home/Group14.png"}
                  alt="bgimage"
                  width={304.19}
                  height={258}
                />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={"/home/Monkey.png"}
                    alt="monkey"
                    width={388}
                    height={258}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-xl bg-white">
          <div
            className={`bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg relative max-sm:h-[70vh]`}
          >
            <div
              className={`py-10 bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg pl-10 relative max-sm:h-[70vh]`}
            >
              <div className="flex gap-[11rem]">
                <div className="2xl:w-[40%] xl:w-[50%] md:w-[60%] w-[90%] text-white">
                  <h1 className="text-4xl font-bold text-white">
                    Build Today{" "}
                  </h1>
                  <h1 className="text-4xl mt-2  font-bold  "> Fund Tomorow</h1>
                  <p className=" mt-2  ">
                    YouBuidl is crowdfunding web3 tool created by GiveStation
                    for developers, creators and teams.
                  </p>
                  <Link
                    href={"/submit-project"}
                    className="bg-[#4450A3] mt-4 inline-block px-10 max-sm:px-5 rounded-md h-[51px] py-2 justify-center items-center text-white "
                  >
                    Submit a Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute sm:right-8 max-sm:left-14 sm:bottom-[-50px] bottom-0 sm:h-full">
              <div className="relative">
                <Image
                  src={"/home/Group14.png"}
                  alt="bgimage"
                  width={304.19}
                  height={258}
                />
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={"/home/Monkey.png"}
                    alt="monkey"
                    width={388}
                    height={258}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const HomePage = () => {
  const stateRecived = useContext(sharedState);
  const { isContributer } = stateRecived;
  const [othersProjects, setOthersProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const { address } = useAccount();

  const loadProjects = async () => {
    const projectsData = await getProjects(address);
    setOthersProjects(projectsData.othersProjects);
    setMyProjects(projectsData.myProjects);
  };

  useEffect(() => {
    loadProjects();
  }, [address]);
  return (
    <div className="px-10 max-sm:px-6 w-full">
      {/* <div className={`py-10 bg-cover sm:bg-[url('/home/Rectangle.png')] max-sm:bg-[url('/home/Rectangle4829.png')] rounded-lg pl-10 relative max-sm:h-[70vh]`}> */}
      {/* <div className="flex gap-[11rem]"> */}
      {/* <div className="2xl:w-[40%] xl:w-[50%] md:w-[60%] w-[90%] text-white">
                        <h1 className="text-4xl font-bold text-white">Build Today </h1>
                        <h1 className="text-4xl mt-2  font-bold  ">
                            {" "}
                            Fund Tomorow
                        </h1>
                        <p className=" mt-2  ">
                            YouBuidl is crowdfunding web3 tool created by GiveStation for
                            developers, creators and teams.
                        </p>
                        <button className="bg-[#4450A3] mt-4  px-10 max-sm:px-5 rounded-md h-[51px] flex justify-center items-center text-white ">
                            Submit a Project
                        </button>
                    </div> */}
      {/* </div> */}
      {/* // <div className="absolute sm:right-8 sm:bottom-[-35px] bottom-0 sm:h-full">
                //     <div className="relative">
                //         <Image src={'/home/Group14.png'} alt="bgimage" width={304.19} height={258} />
                //         <div className="absolute bottom-0 right-0">
                //             <Image src={'/home/Monkey.png'} alt="monkey" width={388} height={258} />
                //         </div>
                //     </div>
                // </div> */}
      {/* </div> */}
      <Slider />

      <div className=" ">
        <div className="sm:flex justify-between mt-4  ">
          <div>
            <h2 className="font-bold text-2xl max-sm:py-2">Trending Buidls</h2>
          </div>
          <div className="flex gap-4  ">
            <div className="flex gap-2  ">
              <TbFilterFilled />
              <h1>Entertainment</h1>
              <IoIosArrowDown />
            </div>
            <div className="flex gap-4 ">
              <PiSlidersHorizontalBold />
              <BsThreeDots />
            </div>
          </div>
        </div>
        {isContributer ? (
          <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full sm:p-4 p-2">
            {othersProjects.map((item, index) => (
              <ProjectCard project={item} key={index} />
            ))}
          </div>
        ) : (
          <div className=" w-full ">
            {myProjects.map((item, index) => (
              <ProjectBand project={item} key={index} refresh={loadProjects} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
