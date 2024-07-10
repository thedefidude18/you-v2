import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Eventstyle.module.css";
import SocialIcon from "../Socialicon/SocialIcon";
import Button from "../Button/Button";
function EvenComponet() {
  return (
    <div>
      <Banner
        text="Claim and keep Track of Rewards"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.Title_Cont}>
        <img src="/svgs/BackArrow.svg" alt="" />
        <h3>Withdraw Rewards For Build a Web3 AI marketplace </h3>
      </div>
      <div className={styles.Card_Wrapper}>
        <div className={styles.Card_View}>
          <h2>Contribution Rewards</h2>
          <p className={styles.description}>
            You have received<span> USDT 2 </span>reward for funding 10
            projects.
          </p>
          <img className={styles.jewellery} src="/svgs/Jewellery.svg" alt="" />
          <div className={styles.lastRow_View}>
            <img
              src="/svgs/proj/Brand1.svg"
              alt=""
              style={{ width: "78px", height: "78px" }}
            />
            $500
            <span className={styles.price}>USDT</span>
          </div>
        </div>
        <div className={styles.midRow}>
          <h4>Build a Web3 AI marketplace</h4>
          <SocialIcon />
        </div>
        <div className={styles.aftermidRow}>
          <p>
            225% up to AU$ 5,000
            <br />
            You have received<span> USDT 2 </span> reward for funding 10
            projects.
          </p>
          <Button
            type="link"
            text="View in Explorer"
            color="var(--fivth-color)"
            path="#"
          />
        </div>
        <div className={styles.lastRow}>
          <div style={{ gap: "30px", alignItems: "end" }}>
            <p>
              Contract balance <span>$500 USDT</span>
            </p>
            <p>
              Total Votes <span>500 (10%)</span>
            </p>
          </div>
          <div style={{ gap: "8px" }}>
            <input type="text" placeholder="Enter Ammount" />
            <Button path="#" text="withdraw" type="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvenComponet;
