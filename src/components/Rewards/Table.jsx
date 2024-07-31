'use client'
import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";
import { useAccount } from "wagmi";
import { getContributors, getEllipsisTxt } from "@/utils";
import { chainLogos } from "@/utils/constant";
import { formatEther } from "viem";
function Table() {
  const { chainId } = useAccount();
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const initContri = async () => {
      const data = await getContributors(chainId);
      setContributors(data);
    }

    if (chainId)
      initContri();
  }, [chainId])
  return (
    <div className={styles.Table_cont}>
      <div className={styles.head}>
        <p></p>
        <p>Users</p>
        <p>Contributions</p>
        <p>Referrals</p>
        <p>BuidlPoints</p>
      </div>
      {contributors.map((contributor, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.content}>
            <img
              src={chainLogos[chainId]}
              alt="icon"
              style={{ margin: "auto", width: "40px" }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className={styles.data_Para}>{getEllipsisTxt(contributor.id, 4)}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <img
                className={styles.green_point}
                src="/svgs/TablegreenPoint.svg"
                alt="icon"
              />
              <p className={styles.data_Para}>{contributor.totalContribution / 10 ** 5}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <img
                className={styles.green_point}
                src="/svgs/TablegreenPoint.svg"
                alt="icon"
              />
              <p className={styles.data_Para}>{contributor.referralNumber}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",

                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#E6E6F2",
                  padding: "0px 0 0px 8px",
                  width: "110px",
                  borderRadius: "10px",
                }}
              >
                <img
                  className={styles.green_Star}
                  src="/svgs/Stars.svg"
                  alt="icon"
                />
                <p className={styles.data_Para}>{formatEther(contributor.totalBuidlPointRewards)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
