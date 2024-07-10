"use client";
import React, { useEffect, useState } from "react";
import styles from "./Project.module.css";
// import Button from "../Button/Button";
import Link from "next/link";
import Button from "../Button/Button";
import DropDown from "../Dropdown/DropDown";
import SocialIcon from "../Socialicon/SocialIcon";
import { getEllipsisTxt } from "@/utils";
import { useAccount } from "wagmi";
function ProjeectCard({ project }) {
  const { chain } = useAccount();

  const [hasCart, setHasCart] = useState(false)

  useEffect(() => {
    if (chain?.id == project.chainId) {
      console.log(project.chainId)
      console.log(chain?.id)
      setHasCart(true);
    }
  }, [chain])

  return (
    <div
      className={styles.project_Card_cont}
    >
      <div className={styles.image__cont}>
        <img
          src={project?.projectCoverUrl}
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
          <img src="/svgs/proj/Brand1.svg" alt="brand" />
          <img src="/svgs/proj/Brand2.svg" alt="brand" />
          <img src="/svgs/proj/Brand3.svg" alt="brand" />
          <img
            src="/svgs/proj/Share.svg"
            style={{ marginInlineStart: "8px" }}
            alt="brand"
          />
        </div>
      </div>


      <p className={styles.description}>
        {project?.desc}
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

export default ProjeectCard;
