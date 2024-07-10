"use client";
import Banner from "@/components/Banner/Banner";
import ProjeectCard from "@/components/projectCard/ProjeectCard";
import { usePathname } from "next/navigation";
import React from "react";
import ProjectsData from "../ProjectsData";
import styles from "./page.module.css";
function page() {
  const pathName = usePathname();
  let routeId = +pathName.split("/").slice(-1)[0];
  let selectedProject = ProjectsData.find((item) => item.id === routeId);
  console.log(selectedProject);
  return (
    <div>
      <Banner
        text="Contribute to be able to vote!"
        image="/svgs/proj/BannerProduct.svg"
      />
      <div className={styles.page_cont}>
        <ProjeectCard
          image={selectedProject.image}
          height="589px"
          imageHight="221px"
        />
      </div>
      <p className={styles.lastCaption}>Fund this project to be able to vote</p>
    </div>
  );
}

export default page;
