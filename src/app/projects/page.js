"use client";
import Banner from "@/components/Banner/Banner";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import ProjeectCard from "@/components/projectCard/ProjeectCard";
import ProjectsData from "./ProjectsData";
import { getProjects } from "@/utils";
function page() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("All");

  useEffect(() => {
    const loadProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };
    loadProjects();
  }, []);
  return (
    <div>
      <Banner
        text="Check Out Your favorite projects "
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
                      console.log(e.target);
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
                      console.log(e.target);
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
                      console.log(e.target);
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
      <div className={styles.divide}>
        {projects.map((item, index) => (
          <ProjeectCard
            project={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
