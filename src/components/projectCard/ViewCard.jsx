'use client'
import React from "react";
import Button from "../Button/Button";
import styles from "./ViewCardStyle.module.css";
import { useAccount, useConfig } from "wagmi";
import { chainLogos } from "@/utils/constant";

function ViewCard({ title, id, num = 0, total = 0, claimable = 0, claim=() => {} }) {

  const config = useConfig();
  const { address, chainId } = useAccount();

  const referralURL =
    "http://" +
    (window.location.host ?? "no-host") +
    "?r=" +
    window.btoa(address ?? "");

  const textURI = encodeURIComponent(
    "Use my referral code to take part in the grant platform."
  );

  const urlURI = encodeURIComponent(referralURL);
  const tweetIntent = `https://twitter.com/intent/tweet?text=${textURI}&url=${urlURI}`;

  return (
    <div
      className={styles.view_card_cont}
    >
      <div>
        <h3>{title}</h3>
        {id == 1 && (
          <p className={styles.description}>
            You have received <span>{total} BuidlPoints</span> reward for funding {num} {" "}
            projects.
          </p>
        )}
        {id == 2 && (
          <p className={styles.description}>
            You have received <span>{total} USDT</span> reward for funding {num} {" "}
            projects.
          </p>
        )}
        {id == 3 && (
          <>
            <p className={styles.description}>
              You have referred<span> {num} </span> contributors.
            </p>
            <p className={styles.description}>
              {" "}
              You get
              <span> +10% </span>of the referred user.
            </p>
          </>
        )}
      </div>
      <img src="/svgs/Jewellery.svg" alt="" className={styles.jullery} />
      {id == 1 && (
        <div className={styles.last_Row}>
          <div>
            <div
              style={{
                color: "#F3F6FB",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src={chainLogos[chainId]}
                style={{ width: "20px", height: "20px" }}
              />
              <p style={{ fontSize: "10px" }}>
                <span style={{ fontSize: "24px" }}>{claimable}</span>BuidlPoints
              </p>
            </div>
          </div>
        </div>
      )}
      {id == 2 && (
        <div className={styles.last_Row}>
          <div>
            <div
              style={{
                color: "#F3F6FB",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src={chainLogos[chainId]}
                style={{ width: "20px", height: "20px" }}
              />
              <p style={{ fontSize: "10px" }}>
                <span style={{ fontSize: "24px" }}>${claimable}</span>USDT
              </p>
            </div>
          </div>
          <div className={styles.btns__cont}>
              <button
                onClick={claim}
                className="rounded-[4px] flex-1 bg-[#12d69b] py-1 w-full font-bold sm:py-2 text-white px-4"
              >
                Claim Now
              </button>
          </div>
        </div>
      )}
      {id == 3 && (
        <div
          className={styles.last_Row}
          style={{ justifyContent: "flex-end", gap: "16px" }}
        >
          <button className="rounded-[4px] flex-1 bg-[#12d69b] font-bold py-1 w-full sm:py-2 text-white">
            <a href={tweetIntent} target="_new">
              {" "}
              Tweet Link
            </a>
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(referralURL);
              alert("Copied!")
            }}
            className="rounded-[4px] flex-1 bg-[#12d69b] py-1 w-full font-bold sm:py-2 text-white"
          >
            Copy Referral
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewCard;
