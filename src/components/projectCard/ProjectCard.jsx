"use client";
import React, { useEffect, useState } from "react";
import styles from "./Project.module.css";
// import Button from "../Button/Button";
import Button from "../Button/Button";
import { getEllipsisTxt } from "@/utils";
import { useAccount } from "wagmi";
import { chainLogos } from "@/utils/constant";
function ProjectCard({ project }) {
  const { chain } = useAccount();

  const [hasCart, setHasCart] = useState(false)

  useEffect(() => {
    if (chain?.id ==project && project?.chainId) {
      setHasCart(true);
    }
  }, [chain])

  return (
    <div
      className={styles.project_Card_cont}
    >
      <div className={styles.image__cont}>
        <img
          src={project?.coverURL}
          alt=""
          className={styles.view}
        />
        <div className={styles.tools}>
          {/* <img src="/svgs/proj/tools.svg" alt="" /> */}
          {project?.filterTags}
        </div>
      </div>
      <div className={styles.first__Row}>
        <h2>{project?.title}</h2>
        <div className={styles.brands__cont}>
          <img src={chainLogos[project?.chainId]} alt="brand" />
          <img
            src="/svgs/proj/Share.svg"
            style={{ marginInlineStart: "8px" }}
            alt="brand"
          />
        </div>
      </div>


      <p className={styles.description}>
        {project?.description}
      </p>

      <div
        className={styles.prices}
      >
        <div>
          <p className={styles.price_Num_cont}>
            <span style={{ color: "#00A3FF" }}>${project?.currentRaised}</span>
            <span className={styles.point}>
              <img
                src={"/svgs/proj/GreenPoint.svg"}
                alt=""
              />
            </span>
          </p>
          <p className={styles.small_Caption}>Raised</p>
        </div>
        <div className={styles.middle}>
          <p className={styles.price_Num_cont}>5000</p>
          <p className={styles.small_Caption}>Donations</p>
        </div>
        <div

        >
          <p className={styles.price_Num_cont}>$10,000</p>
          <p className={styles.small_Caption}>Target</p>
        </div>

      </div>
      <div className={styles.last__Row}>
        <div className={styles.left}>
          <img src="/svgs/proj/ByImage.svg" alt="" />
          <p>By {getEllipsisTxt(project?.creator, 3)}</p>
        </div>
        <div className={styles.left}>
          {hasCart && (
            <img src="/svgs/proj/Cartcard.svg" alt="" />
          )}
          <Button path={`/projects/${project?.id}`} type="link" text="Donate Now" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
