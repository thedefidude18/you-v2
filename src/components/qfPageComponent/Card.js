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
      <div className="w-full grid sm:grid-cols-3 gap-2 grid-cols-1  p-4 ">
        {data.map((item, index) => (<div className="w-full custom-gradient-bg shadow-xl p-4 py-8 sm:min-h-[150px] flex flex-col items-center justify-center rounded-lg   text-white text-center font-bold" key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subtitle}>{item.subTitle}</div>
        </div>))}

      </div>
    </div>
  )
}

export default Card
