import React, { useContext, useState } from "react";
import styles from "./Project.module.css";
// import Button from "../Button/Button";
import Link from "next/link";
import Button from "../Button/Button";
import DropDown from "../Dropdown/DropDown";
import SocialIcon from "../Socialicon/SocialIcon";
import { chainLogos, tokenDecimals } from "@/utils/constant";
import { getEllipsisTxt } from "@/utils";
import { sharedState } from "@/app/layout";
import { useAccount, useConfig } from "wagmi";
import { parseUnits } from "viem";
import { approve, canContribute, contributeToken, getAllowance } from "@/utils/interact";
import { useRouter } from 'next/navigation';
import ReactLoading from "react-loading";

function ProjectCard({ project, height, imageHight }) {
  const stateRecived = useContext(sharedState);
  const config = useConfig();
  const { contriToken, referral } = stateRecived;
  const [amount, setAmount] = useState(0);
  const { address, chainId } = useAccount();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const contribute = async () => {
    setIsLoading(true)
    const referralAddr = referral != "" ? window.atob(referral) : address;
    const isAbleToContribute = await canContribute(config, chainId, project.id);
    if (isAbleToContribute) {
      if (+amount > 0) {
        const deciAmount = parseUnits(amount, tokenDecimals[chainId][contriToken.address]);
        const allowance = await getAllowance(config, address, project.id, contriToken.address);

        let result;
        if (allowance < deciAmount) {
          const res = await approve(config, project.id, contriToken.address, deciAmount);
          if (res) {
            result = await contributeToken(config, chainId, referralAddr, project.id, contriToken.address, deciAmount);
          }
        } else {
          result = await contributeToken(config, chainId, referralAddr, project.id, contriToken.address, deciAmount);
        }
        if (result) {
          setTimeout(() => {
            router.push("/projects");
          }, 3000);
        }
      }
    } else {
      alert("That project already reached out the target!");
    }


    setIsLoading(false);
  }
  return (
    <div
      className={styles.project_Card_cont}
      style={{ height: height ? height : "", margin: height ? "20px 0" : "" }}
    >
      {isLoading && (
        <div className="fixed left-0 right-0 top-0 bottom-[0px] md:bottom-[0px] flex justify-center items-center backdrop-blur-sm bg-white/5 z-50">
          <ReactLoading type="spinningBubbles" color="#000" />
        </div>
      )}
      <div className={styles.image__cont}>
        <img
          src={project.coverURL}
          alt=""
          className={styles.view}
          style={{ height: imageHight ? imageHight : "" }}
        />
        <div className={styles.tools}>
          <img src="/svgs/proj/tools.svg" alt="" />
        </div>
      </div>
      <div className={styles.first__Row}>
        <h2>{project.title}</h2>
        <div className={styles.brands__cont}>
          <img src={chainLogos[project.chainId]} alt="brand" />
          <img
            src="/svgs/proj/Share.svg"
            style={{ marginInlineStart: "8px" }}
            alt="brand"
          />
        </div>
      </div>

      {height ? (
        <p className={styles.description} style={{ margin: "25px auto" }}>
          {project.description}
        </p>
      ) : (
        <p className={styles.description}>
          {project.description}
        </p>
      )}

      <div
        className={styles.prices}
        style={{
          marginBottom: `${height && "25px"}`,
          gridTemplateColumns: `${height && "repeat(4,1fr)"}`,
        }}
      >
        <div>
          <p className={styles.price_Num_cont}>
            <span style={{ color: "#00A3FF" }}>${project.currentRaised}</span>
            <span className={styles.point}>
              {/* <img
                src={`${
                  !red ? "/svgs/proj/GreenPoint.svg" : "/svgs/proj/RedPoint.svg"
                }`}
                alt=""
              /> */}
            </span>
          </p>
          <p className={styles.small_Caption}>Raised</p>
        </div>
        <div className={styles.middle}>
          <p className={styles.price_Num_cont}>{project.noOfContributors}</p>
          <p className={styles.small_Caption}>Donations</p>
        </div>
        {project.target > 0 && (
          <div
          >
            <p className={styles.price_Num_cont}>${project.target}</p>
            <p className={styles.small_Caption}>Target</p>
          </div>
        )}
      </div>
      {!height ? (
        <div className={styles.last__Row}>
          <div className={styles.left}>
            <img src="/svgs/proj/ByImage.svg" alt="" />
            <p>By {getEllipsisTxt(project.creator, 4)}</p>
          </div>
          <div className={styles.left}>
            <img src="/svgs/proj/Cartcard.svg" alt="" />
            <Button path={`/projects/${project.id}`} type="link" text="Donate Now" />
          </div>
        </div>
      ) : (
        <div className={styles.last__Row}>
          <SocialIcon project={project} />
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="text" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <DropDown />
          </div>
          <div className={styles.left}>
            <img src="/svgs/proj/Cartcard.svg" alt="" />
            <Button text="Contribute" confirm={contribute} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;