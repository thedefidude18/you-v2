"use client";

import React from 'react'
import styles from "../qfPageComponent/qf.module.css"
import { useAccount } from 'wagmi';
import { bscId } from '@/utils/constant';
import { formatUnits } from 'viem';
const Card = ({ qfRound = null }) => {
  const { chainId } = useAccount();

  const data = [
    {
      title: +formatUnits(qfRound ? qfRound.qfRound.amount : "0", (chainId == bscId ? 18 : 6)),
      subTitle: "Total Matching Pools"
    },
    {
      title: `${qfRound ? qfRound.usdAmount : 0} USDT`,
      subTitle: "Total Contributions"
    },
    {
      title: qfRound ? qfRound.qfRound.contriNumber : 0,
      subTitle: "Total Contributors"
    },
  ]
  return (
    <div>
      <div className={styles.cardContainer}>
        {data.map((item, index) => (<div className={styles.card} key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subtitle}>{item.subTitle}</div>
        </div>))}

      </div>
    </div>
  )
}

export default Card
