"use client";

import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import styles from './Vote.module.css'
import React, { useContext, useEffect, useState } from "react";
import Withdraw from "@/components/Withdraw/Withdraw";
import Voting from "@/components/Voting/Voting";
import { useAccount, useConfig } from "wagmi";
import { getRecentWithdrawals, getRequets } from "@/utils";
import { voteOnRequest, withdrawRequest } from "@/utils/interact";
import { sharedState } from "../layout";

function Page() {

  const config = useConfig()
  const { address, chainId } = useAccount();

  const stateRecived = useContext(sharedState);
  const { isContributer } = stateRecived;

  const [myRequests, setMyRequests] = useState([]);
  const [othersRequests, setOthersRequests] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [numFor, setNumFor] = useState(0);
  const [numAgainst, setNumAgainst] = useState(0);

  const vote = async (project, reqId, decision) => {
    const res = await voteOnRequest(config, chainId, project, reqId, decision)
    if (res) {
      await initRequests();
    }
  }

  const withdraw = async (project, reqId) => {
    const res = await withdrawRequest(config, chainId, project, reqId);
    if (res) {
      await initRequests();
      await getRWithdrawals();
    }
  }

  const initRequests = async () => {
    const data = await getRequets(address, chainId);
    if (data) {
      setMyRequests(data.myRequests);
      setOthersRequests(data.othersRequests);
      setNumFor(data.numFor);
      setNumAgainst(data.numAgainst);
    }
  }

  const getRWithdrawals = async () => {
    const data = await getRecentWithdrawals(chainId);
    if (data) {
      setWithdrawals(data);
    }
  }
  useEffect(() => {

    if (address) {
      initRequests();
      getRWithdrawals();
    }

  }, [address])
  return (
    <div>
      <Banner
        text="Vote for your favurite project"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.divide__Cont}>
        <div className={styles.cards__cont}>
          {isContributer ? (
            othersRequests.map((item, index) => (
              <Card
                key={index}
                isContributer={isContributer}
                request={item}
                confirm={vote}
              />
            ))) : (
            myRequests.map((item, index) => (
              <Card
                key={index}
                isContributer={isContributer}
                request={item}
                confirm={withdraw}
              />
            ))
          )}

        </div>
        <div>
          <Withdraw withdrawals={withdrawals} />
          <Voting numFor={numFor} numAgainst={numAgainst}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
