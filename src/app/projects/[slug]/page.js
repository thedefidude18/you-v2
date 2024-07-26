"use client";
import Banner from "@/components/Banner/Banner";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectsData from "../ProjectsData";
import styles from "./page.module.css";
import { getProject } from "@/utils";
import { useAccount } from "wagmi";
function page() {
  const pathName = usePathname();
  let project = pathName.split("/").slice(-1)[0];

  const { chain } = useAccount();
  const [projectDetails, setProjectDetails] = useState(null)

  const initProjectDetail = async () => {
    const data = await getProject(project, chain?.id);
    if (data) setProjectDetails(data);
  }
  useEffect(() => {
    initProjectDetail();
  }, [])
  return (
    <div>
      <Banner
        text="Contribute to be able to vote!"
        image="/svgs/proj/BannerProduct.svg"
      />
      <div className={styles.page_cont}>
        {projectDetails && (
          <ProjectCard
            project={projectDetails}
            height="589px"
            imageHight="221px"
          />
        )}
      </div>
      <p className={styles.lastCaption}>Fund this project to be able to vote</p>
    </div>
  );
}

export default page;
