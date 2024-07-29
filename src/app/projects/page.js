"use client";
import Banner from "@/components/Banner/Banner";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import { getProjects } from "@/utils";
import ProjectCard from "@/components/projectCard/ProjectCard";
import ProjectBand from "@/components/projectCard/ProjectBand";
import { sharedState } from "../layout";
import { useAccount } from "wagmi";
function page() {

  const { address } = useAccount();

  const stateRecived = useContext(sharedState);
  const { isContributer } = stateRecived;

  const [othersProjects, setOthersProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);

  const [active, setActive] = useState(false);
  const [value, setValue] = useState("All");

  useEffect(() => {
    const loadProjects = async () => {
      const projectsData = await getProjects(address);
      setOthersProjects(projectsData.othersProjects);
      setMyProjects(projectsData.myProjects);
    };
    if (address)
      loadProjects();
  }, [address]);


  return (
    <div>
      <Banner
        text="My Project "
        image="/svgs/proj/BannerSvg.svg"
      />

      <div className={styles.main_Title}>
        <h2>Trending Buidls</h2>
        <div className={styles.process_cont}>
          <div className={styles.filter__btn__cont}>
            <button onClick={() => setActive(!active)} defaultValue={value}>
              <span>
                <img src="/svgs/proj/Filter.svg" alt="" />
              </span>
              {value} <img src="/svgs/Arrow.svg" />
            </button>
            <div
              className={`${styles.dropdown} ${active ? styles.active : ""}`}
            >
              <ul>
                <li>
                  <p
                    // href="#"
                    onClick={(e) => {
                      setValue("1");
                      setActive(!active);
                    }}
                  >
                    1
                  </p>
                </li>
                <li>
                  <p
                    onClick={(e) => {
                      setValue("2");
                      setActive(!active);
                    }}
                  >
                    2
                  </p>
                </li>
                <li>
                  <p
                    onClick={(e) => {
                      setValue("3");
                      setActive(!active);
                    }}
                  >
                    3
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <button>
            <img src="/svgs/proj/Sec.svg" alt="" />
          </button>
          <button>
            <img src="/svgs/proj/Menu.svg" alt="" />
          </button>
        </div>
      </div>
      {
        isContributer ? (
          <div className={styles.divide}>
            {othersProjects.map((item, index) => (
              <ProjectCard
                project={item}
                key={index}
              />
            ))}
          </div>
        ) : (
          <>
            {myProjects.map((item, index) => (
              <ProjectBand
                project={item}
                key={index}
              />
            ))}
          </>
        )
      }

    </div>
  );
}

export default page;
