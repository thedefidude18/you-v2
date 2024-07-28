"use client"
import styles from "../Projects.module.css";
import Banner from '@/components/Banner/Banner';
import { sharedState } from '@/app/layout';
import { useContext, useEffect, useState } from 'react';
import { contriTokenLogosByAddress, tokenDecimals } from '@/utils/constant';
import { useAccount, useConfig } from 'wagmi';
import { formatUnits, parseUnits } from "viem";
import { requestWithdraw } from "@/utils/interact";

const page = () => {

  const { chainId, address } = useAccount();

  const config = useConfig();

  const stateRecived = useContext(sharedState);
  const { currentProject } = stateRecived;

  const [requestDesc, setRequestDesc] = useState("");
  const [requestTokens, setRequestTokens] = useState(null);

  const setReqeustToken = (token, amount) => {
    const data = { ...requestTokens, [token]: amount };
    setRequestTokens(data);
  }

  const createRequest = async () => {
    let tokens = [];
    Object.entries(requestTokens).forEach(([key, value]) => {
      tokens.push({
        token: key,
        amount: parseUnits(value, tokenDecimals[chainId][key])
      })
    })
    await requestWithdraw(config, chainId, currentProject.id, requestDesc, address, tokens)
  }

  useEffect(() => {
    if (currentProject) {
      const keys = Object.keys(contriTokenLogosByAddress[chainId]);
      const data = keys.reduce((prev, current) => {
        return {
          ...prev,
          [current]: 0
        };
      }, {});
      setRequestTokens(data);
    }
  }, [currentProject])

  return (
    <div >
      <Banner
        text="Request Withdrawal "
        image="/svgs/proj/BannerSvg.svg"
      />

      <div className={styles.form_container}>
        <div className={styles.withdrawal_form}>
          <div className={styles.form_group}>
            <label htmlFor="project">Project</label>
            <input
              id="project"
              name="project"
              type="text"
              value={currentProject?.title}
              disabled
            />
          </div>
          <div className='flex flex-col gap-4'>
            {currentProject?.currentAmount.map((token, index) => (
              <div className='flex flex-row gap-2' key={index}>
                <img src={contriTokenLogosByAddress[chainId][token.token]} alt="" className='w-6' />
                <input type='number' className='border border-black' value={requestTokens ? requestTokens[token.token] : 0} onChange={e => setReqeustToken(token.token, e.target.value)} />
                <p className="cursor-pointer" onClick={() => setReqeustToken(token.token, formatUnits(token.amount, tokenDecimals[chainId][token.token]))}>max</p>
              </div>
            ))}
          </div>
          <div className={styles.form_group}>
            <label htmlFor="description">Milestone reached - Describe your request</label>
            <textarea
              id="description"
              name="description"
              onChange={(e) => setRequestDesc(e.target.value)}
              value={requestDesc}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <button type="submit" className={styles.submit_button} onClick={createRequest}>Request Withdrawal</button>
        </div>
      </div>
    </div>
  );
};

export default page;
