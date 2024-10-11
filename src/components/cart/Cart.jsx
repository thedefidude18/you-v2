"use client"

import { Delete } from '@mui/icons-material';
import styles from './cart.module.css';
import { useAccount, useConfig } from 'wagmi';
import { chainLogos, contriTokenLogosByAddress, contriTokens, tokenDecimals } from '@/utils/constant';
import { useContext, useEffect, useState } from 'react';
import { sharedState } from '@/app/layout';
import DropDown from '../Dropdown/DropDown';
import CartDropDown from '../Dropdown/CartDropDown';
import Image from 'next/image'
import { parseUnits } from 'viem';
import { approve, contributeBatch, getAllowance } from '@/utils/interact';
import { width } from '@mui/system';
const Cart = () => {
  const cartItem = {
    1: {
      coverURL: "https://via.placeholder.com/150?text=Project+Alpha",
      title: "Project Alpha",
      description: "This is a description of Project Alpha.",
      amount: 50,
      token: "ETH",
      tokenOptions: ["ETH", "BTC", "USDT", "USDC", "DAI"] // Token dropdown options
    },
    2: {
      coverURL: "https://via.placeholder.com/150?text=Project+Beta",
      title: "Project Beta",
      description: "This is a description of Project Beta.",
      amount: 75,
      token: "BTC",
      tokenOptions: ["ETH", "BTC", "USDT", "USDC", "DAI"]
    },
    3: {
      coverURL: "https://via.placeholder.com/150?text=Project+Gamma",
      title: "Project Gamma",
      description: "This is a description of Project Gamma.",
      amount: 100,
      token: "USDT",
      tokenOptions: ["ETH", "BTC", "USDT", "USDC", "DAI"]
    }
  };
  
  
  
  const config = useConfig();
  const { chain, address } = useAccount()
  const stateRecived = useContext(sharedState);
  const { cartItems, setCartItems, cartToken, referral } = stateRecived;
  const [amount, setAmount] = useState(0);

  const [summaryTokens, setSummaryTokens] = useState({});
  const [total, setTotal] = useState(0);

  const setProjectToken = (key, token) => {
    let temp = cartItems;
    temp[key] = { ...temp[key], token: token };
    temp = JSON.parse(JSON.stringify(temp));
    setCartItems(temp);
    updateSummaryTokens();
  }

  const updateProjectAmount = (key, amount) => {
    let temp = cartItems;
    temp[key] = { ...temp[key], amount: amount };
    temp = JSON.parse(JSON.stringify(temp));
    setCartItems(temp);
    updateSummaryTokens();
  }
  const applyToAll = () => {
    let temp = cartItems;
    let total = 0;
    for (let key in temp) {
      temp[key] = { ...temp[key], amount: amount, token: cartToken };
      total += amount;
    }
    temp = JSON.parse(JSON.stringify(temp));
    setCartItems(temp);
    updateSummaryTokens();
  }

  const updateSummaryTokens = () => {
    let data = {}
    contriTokens[chain.id].map((token) => data[token.address] = 0);
    Object.entries(cartItems).map(([_, project]) => {
      data[project.token.address] += +project.amount;
    })

    setSummaryTokens(data);
  }

  const removeProject = (key) => {
    let temp = cartItems;
    delete temp[key];
    setCartItems(JSON.parse(JSON.stringify(temp)));
  }

  const contribute = async () => {
    const referralAddr = referral != "" ? window?.atob(referral) : address;

    if (total > 0) {
      let isApproved = false;
      for (let key in summaryTokens) {
        if (summaryTokens[key] > 0) {
          const deciAmount = parseUnits(summaryTokens[key].toString(), tokenDecimals[chain.id][key]);
          const allowance = await getAllowance(config, chain.id, address, key);
          if (allowance < deciAmount) {
            isApproved = await approve(config, chain.id, key, deciAmount);
          } else {
            isApproved = true;
          }
        }
      }

      if (isApproved) {
        let normalContriList = [];
        let qfContriList = [];
        Object.entries(cartItems).map(([key, item]) => {
          if (item.isOnQF) {
            qfContriList.push({
              project: key,
              referrer: referralAddr,
              token: item.token.address,
              amount: parseUnits(item.amount, tokenDecimals[chain.id][item.token.address])
            })
          } else {
            normalContriList.push({
              project: key,
              referrer: referralAddr,
              token: item.token.address,
              amount: parseUnits(item.amount, tokenDecimals[chain.id][item.token.address])
            })
          }
        })
        await contributeBatch(config, chain.id, normalContriList, qfContriList);
      }
    }
  }

  useEffect(() => {
    if (chain) {
      updateSummaryTokens();
    }
  }, [cartItems])

  useEffect(() => {
    let temp = 0;
    Object.entries(summaryTokens).map(([_, amount]) => {
      temp += +amount;
    })
    setTotal(temp);
  }, [summaryTokens])

  return (
    <div className={styles.container}>
      <div className='flex justify-between'>
      <h2>My Cart</h2>
      <p >Projects ({Object.keys(cartItems).length})</p>
      </div>
      <div className={styles.header}>
        {chain && (
          <div className={styles.chainName}>
            <span className={styles.optimismIcon}> <img
              src={chainLogos[chain.id]}
              alt="Game Icon"
              className={styles.image1}
            /></span>
            {chain.name} ({Object.keys(cartItems).length})
          </div>
        )}
        {/* <div className={styles.amountInputWrapper}>
          Amount
          <input type="number" className={styles.amountInput} value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div className={styles.waletContainer}>
            <img
              src={chainLogos[chain?.id]}
              alt="Game Icon"
              className={styles.image1}
            />
            <DropDown isCart={true} />
          </div>
          <span className={styles.applyButton} onClick={applyToAll}>Apply to all</span>
        </div> */}
      </div>
      <div className={`${styles.container1} xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col`}>
        <div className={`${styles.items} lg:w-full md:w-[100%]`}>
          {Object.entries(cartItems).map(([key, project], index) => {
            return (
              <div key={index} className={`${styles.item} relative`}>
                <img
                  src={project.coverURL}
                  alt="Game Icon"
                  className={`${styles.image} w-[80px] h-[60px]  xl:w-[138px] xl:h-[101px]`}
                />
                <div className={styles.details}>
                  <h2 className={`${styles.title} text-[16px] xl:text-[24px]`}>{project.title}</h2>
                  <p className={`${styles.description} md:block md:text-[10px] max-sm:hidden sm:hidden `}>
                    {project.description}
                  </p>
                </div>
                <div className={styles.donation}>
                  <input type="number" className={styles.donationInput} value={project.amount} onChange={(e) => updateProjectAmount(key, e.target.value)} />
                  <div className={styles.price}><CartDropDown token={project.token} setToken={(token) => setProjectToken(key, token)} />${project.amount}</div>
                  {/* <button className={styles.deleteButton} onClick={() => removeProject(key)}><Delete sx={{ color: "#000 " }} /></button> */}
                  <Image src={'/DeleteProject.png'} alt='success logo' width={27} height={27} onClick={() => removeProject(key)} className='object-contain absolute' style={{right:"-2%", top:"-10%", cursor:"pointer"}} />
                
                </div>
              </div>
            )
          }
          )}
        </div>

        <div className={`${styles.summaryContainer} w-[100%]`}>
        <div className={`flex flex-col w-[100%]`}>
        <div className='flex justify-between w-[100%]'> 
          <p>Enter Amount</p>
          <span className={styles.applyButton} onClick={applyToAll}>Apply to all</span>

        </div>
          <input type="number" className={`${styles.amountInput} w-[100%]`} value={amount} onChange={(e) => setAmount(e.target.value)} />
          <p className='w-[100%] text-start'>Select Amount</p>
          <div className={`${styles.waletContainer} w-[100%] pl-2  bg-[#fff] mt-2`}>
            <img
              src={chainLogos[chain?.id]}
              alt="Game Icon"
              className={styles.image1}
            />
            <DropDown style={{width:"100%"}} isCart={true} />
          </div>
        </div>
          <h2 className={styles.summaryTitle}>Summary</h2>
          <div className='flex flex-row gap-2 w-full'>
            <div className='w-2/3 flex flex-col gap-4'>
              <div className='font-bold text-sm'>Your contribution on</div>
              <div className='flex flex-row'><img
                src={chainLogos[chain?.id]}
                alt="Game Icon"
                className={styles.image1}
              />{chain?.name}</div>
            </div>
            <div className='w-1/3 flex flex-col gap-2'>
              {
                Object.entries(summaryTokens).map(([key, amount], index) => {
                  return (
                    <div className='flex flex-row gap-2' key={index}>
                      <div>{amount}</div>
                      <img src={contriTokenLogosByAddress[chain.id][key]} className='w-[20px]' />
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
          <div className={styles.totalSection}>
            
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className={styles.submitButton} onClick={contribute}> <span className="mr-2">💜</span> Donate</button>
        </div>
      </div>

      <p className={styles.note}>
        Donation to each project must be valued at 1USD or more to be eligible for matching.
      </p>
    </div>
  );
};

export default Cart;
