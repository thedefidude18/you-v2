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

const Page = () => {
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
      <div className=" py-10 bg-cover bg-[url('/bp.png')]">
        <div className="flex gap-[11rem]  ">
          <div className="2xl:w-[40%] xl:w-[50%] md:w-[60%] w-[90%]">
            <h1 className="text-4xl font-bold  ">Build Today </h1>
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
          </div>
          {/* <div className="w-[40%] "> */}
            {/* <Image
              className="h-[250px] mt-10  "
              src="/monk.png"
              height={200}
              width={400}
              alt={""}
            /> */}
          {/* </div> */}
        </div>
      </div>

      <div className=" ">
        <div className="flex justify-between mt-4  ">
          <div>
            <h2 className="font-bold text-2xl ">Trending Buidls</h2>
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

export default Page;

