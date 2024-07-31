"use client"
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ViewCard from "../projectCard/ViewCard";
import styles from "./Oddstyle.module.css";
import Button from "../Button/Button";
import Table from "./Table";
import { useAccount, useConfig } from "wagmi";
import { getContributionDetails } from "@/utils";
import { formatEther } from "viem";
import { claimUserReward } from "@/utils/interact";

function OddComponent() {
  const { address, chainId } = useAccount();
  const config = useConfig();
  const [contriDetail, setContriDetail] = useState({
    referralNumber: 0,
    totalBuidlPointReferralRewards: "0",
    totalBuidlPointRewards: "0",
    totalContribution: "0",
    claimableBuidlPointReferralRewards: "0",
    claimableBuidlPointRewards: "0",
    totalStableRewards: "0",
    claimableStableRewards: "0",
    projectsNum: 0
  });

  const claimUSDT = async () => {
    await claimUserReward(config, chainId, false);
  }

  const initContriDetail = async () => {
    const contriData = await getContributionDetails(address, chainId);
    setContriDetail(contriData);
  }
  useEffect(() => {
    if (address) {
      initContriDetail();
    }
  }, [address])

  return (
    <div>
      <Banner
        text="Claim and keep Track of Rewards"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.view_cont}>
        <ViewCard title="Buildpoints" num={contriDetail?.projectsNum} total={formatEther(contriDetail?.totalBuidlPointRewards)} claimable={formatEther(contriDetail?.claimableBuidlPointRewards)} id={1} />
        <ViewCard title="Contribution Rewards" num={contriDetail?.projectsNum} total={formatEther(contriDetail?.totalStableRewards)} claimable={formatEther(contriDetail?.claimableStableRewards)} id={2} claim={claimUSDT} />
        <ViewCard title="Referrals" num={contriDetail?.referralNumber} id={3} />
      </div>
      <div className={styles.last_Cont}>
        <Button
          type="link"
          text="Leather Board"
          color="var(--primary-color)"
          path="#"
        />
        <Table />
      </div>
    </div>
  );
}

export default OddComponent;
