"use client"
import { sharedState } from '@/app/layout'
import { domainChains } from '@/utils/constant'
import { isRegistered, registerDomains } from '@/utils/interact'
import { Card } from '@mui/material'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useAccount, useConfig } from 'wagmi'

const dExtension = {
    0: "youbuidl",
    1: "givestation"
}
const items = [
    {
      name: 'vitalik',
      domain: '.youbuidl',
      status: 'available',
      price: '0.005ETH',
      cart: 'add',
    },
    {
      name: 'vitalik',
      domain: '.givestation',
      status: 'added to cart',
      price: '0.005ETH',
      cart: 'added',
    },
    {
      name: 'vitalik',
      domain: '.youbuidl',
      status: 'not available',
      price: '0.005ETH',
      cart: 'disabled',
    },
  ];

const DomainCart = ({ searchName, setPage = () => { } }) => {

    const config = useConfig();
    const { chainId } = useAccount();

    const [sValue, setSValue] = useState(searchName);
    const stateRecived = useContext(sharedState);
    const { domainCartItems, setDomainCartItems, totalPrice, setTotalPrice } = stateRecived;
    const [sResult, setSResult] = useState([]);

    const getPrice = (len) => {
        if (len == 3) return 0.005;
        else if (len == 4) return 0.003;
        else return 0.001;
    }

    const isValid = (sValue) => {
        return sValue.length >= 3 && sValue.length < 10;
    }

    const search = async () => {
        if (domainChains.includes(chainId)) {
            if (isValid(sValue)) {
                const data = await isRegistered(config, chainId, sValue);
                const temp = [];
                for (const i in data) {
                    let dmn = { name: sValue, dType: i, status: data[i].result, isOnCart: false, price: getPrice(sValue.length) }
                    const filterRes = domainCartItems.filter((item) => item.name == dmn.name && item.dType == dmn.dType);
                    if (filterRes.length > 0) {
                        dmn.isOnCart = true;
                    }
                    temp.push(dmn);
                }

                setSResult(temp);
            } else {
                alert("The domain length should be 3 to 10 characters!")
            }
        } else {
            alert("please connect wallet!")
        }
    }

    const addCart = (domain) => {
        setDomainCartItems([...domainCartItems, domain])
        setTotalPrice(totalPrice + domain.price);

        const temp = sResult.map(item => {
            if (item.name == domain.name && item.dType == domain.dType) {
                return { ...item, isOnCart: true };
            }
            return item;
        })

        setSResult(temp);
    }

    const popCart = (domain) => {
        const temp = domainCartItems.filter((dmn) => dmn.name != domain.name || dmn.dType != domain.dType);
        setDomainCartItems(temp);
        setTotalPrice(totalPrice - domain.price);

        const sTemp = sResult.map(item => {
            if (item.name == domain.name && item.dType == domain.dType) {
                return { ...item, isOnCart: false };
            }
            return item;
        })

        setSResult(sTemp);
    }

    const checkOut = async () => {
        if (domainCartItems.length > 0) {
            let names = [];
            let dTypes = [];
            for (const domain of domainCartItems) {
                names.push(domain.name);
                dTypes.push(domain.dType);
            }
            const res = await registerDomains(config, chainId, names, dTypes, totalPrice);
            if (res) {
                setSResult([]);
                setDomainCartItems([]);
                setTotalPrice(0);
                setTimeout(() => {
                    setPage(2);
                }, 1500)
            }
        }

    }

    return (
        <div className='pb-20'>
            <div className='w-full'>
                <div className='w-full flex items-center max-sm:px-5 py-14'>
                    <div className="p-2 border border-[#ABB7C2] rounded-full rounded-md shadow-lg relative sm:w-[596px] w-1/2   placeholder:text-[#949aaf]">
                        
                        <input
                            type="text"
                            placeholder="Search domain name"
                            className="w-full border-4 border-black p-1 sm:pl-10"
                            value={sValue}
                            onChange={(e) => { setSValue(e.target.value) }}
                        />
                                          <img
                        className="absolute left-[12px] top-[25%] sm:block hidden"
                        src="/svgs/Search.svg"
                        alt="Search"
                    />  
                    </div>
                    <button className='bg-[#423F96] text-white text-[20px] leading-[24px] font-semibold px-5 py-4 rounded-md' onClick={search}>
                        Search
                    </button>
                </div>
                <div className='w-full'>
                    {/* <h2 className="font-poppins text-[20px] font-medium leading-4 tracking-[0.03em] text-left py-2">Search Result</h2> */}
                    <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between h-fit sm:space-x-4 pr-10'>
                    <div className='flex justify-center pt-10 '>
                <div className='w-[100%]'>
                {items.map((item, index) => (
        <div
          key={index}
          className="flex rounded-full items-center justify-between p-4 bg-white shadow-lg mb-4"
        >
          <div className="flex items-center w-[40%] justify-between flex gap-3 p-2">
          <Image src={"/TickMark.png"} width={20} height={20}/>
        
            <span className="text-[26px]">{item.name}</span>
            <span className="bg-custom-gradient p-6 text-white w-[132px] h-[39px] text-center flex justify-center rounded-[30px] relative">
              {item.domain}
              {item.status === 'available' && (
              <span className="ml-2 bg-green-200 text-green-600 px-2 py-1 text-xs rounded-full absolute" style={{top:"-35%", right:"-25%"}}>
                {item.status}
              </span>
            )}
            {item.status === 'added to cart' && (
              <span className="ml-2 bg-[#FF5151] text-white px-2 py-1 text-xs rounded-full absolute" style={{top:"-35%", right:"-35%"}}>
                {item.status}
              </span>
            )}
            {item.status === 'not available' && (
              <span className="ml-2 bg-[#FF5151] text-white px-2 py-1 text-xs rounded-full absolute" style={{top:"-35%", right:"-35%"}}>
                {item.status}
              </span>
            )}
            </span>
            
          </div>
          <div className='flex items-center w-[45%] justify-between flex gap-3 p-2'>
          <div className="text-gray-600 text-[26px] font-medium">{item.price}</div>
          <button
            className={`relative ml-4 p-2 rounded-md ${
              item.cart === 'add'
                ? 'bg-custom-gradient text-white'
                : item.cart === 'added'
                ? 'bg-custom-gradient text-white'
                : 'bg-gray-300 text-gray-500'
            } shadow`}
            disabled={item.cart === 'disabled'}
          >
             {/* {items.cart === "add" ? <Image src={"/PlusImage.png"} width={30} height={30}/> : item.cart === "added" ? <Image src={"/MinusImage.png"} width={10} height={10}/>: <Image src={"/DisabledImage.png"} width={10} height={10}/>} */}
             {item.cart === 'add' ? (
        <Image src={"/PlusImage.png"} className='absolute' style={{top:"-25%", left:"-20%"}} width={20} height={20}/>
      ) : item.cart === 'added' ? (
        <Image src={"/MinusImage.png"} className='absolute' style={{top:"-25%", left:"-20%"}} width={20} height={20}/>
      ) : (
        <Image src={"/DisabledImage.png"} className='absolute' style={{top:"-25%", left:"-20%"}} width={20} height={20}/>
      )}
           <Image src={"/cartImage.png"} width={30} height={30}/> 
          </button>
        </div>

        </div>
      ))}
                </div>
               
            </div>
                        {/* <div className='min-h-[300px] space-y-8 w-[60%] max-sm:w-full'>
                            {sResult.map((domain, index) => (
                                <Card className='w-full rounded-lg flex h-full' key={index}>
                                    <div className='w-[83%] xl:pl-8 lg:pl-5 max-sm:pl-8 flex justify-evenly'>
                                        <div className='flex w-full h-full gap-3'>
                                            <div className='w-[15%] max-sm:w-[32.65px] max-sm:h-[29.87px]'>
                                                <Image src={'/domain/Layer_1.png'} alt='success logo' width={48} height={44} className='object-contain' />
                                            </div>
                                            <div className='w-[85%] flex max-sm:flex-col justify-between'>
                                                <div className='flex items-center max-sm:flex-col-reverse max-sm:w-full'>
                                                    <h2 className="font-inter lg:text-[16px] xl:text-[20px] max-sm:text-[15px] font-semibold leading-[21px] text-left max-sm:w-full flex justify-start">{domain.name}.{dExtension[domain.dType]}</h2>
                                                    <div className={`inline-flex items-center rounded-xl ml-1 border px-2.5 py-0.5 max-sm:mb-2 sm:mb-5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${domain.status ? "bg-gray-500" : domain.isOnCart ? "bg-red-400" : "bg-[#1BA27A]"}  text-white shadow`}>{domain.status ? "sold" : domain.isOnCart ? "OnCart" : "available"}</div>
                                                </div>
                                                <h2 className='font-poppins text-nowrap lg:text-[16px] xl:text-[22px] max-sm:text-[15px] max-sm:w-full flex justify-end font-semibold leading-[21px] lg:pr-10 max-sm:pr-8'>{domain.price} ETH </h2>
                                            </div>
                                        </div>
                                    </div>
                                    {domain.isOnCart && (
                                        <div className="!w-[17%] !h-full bg-red-500 py-5 flex items-center justify-center">

                                            <Image src='/domain/cart-minus.svg' alt='addtocart' width={50} height={50} className='object-contain' onClick={() => { popCart(domain) }} />
                                        </div>
                                    )}
                                    {!domain.isOnCart && !domain.status && (
                                        <div className="!w-[17%] !h-full bg-[#4458A8] py-5 flex items-center justify-center">
                                            <Image src='/domain/cart-add.svg' alt='addtocart' width={50} height={50} className='object-contain' onClick={() => { addCart(domain) }} />
                                        </div>
                                    )}
                                    {domain.status && (
                                        <div className="!w-[17%] !h-[60px] py-5 flex items-center justify-center">
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div> */}
                        <div className='w-[40%]'>
                         <div className='flex justify-center items-stretch gap-2 mb-2'>
                            <div className='bg-[#43499E33] text-[#43499E] p-1 rounded-md flex justify-center'>
                              <Image src={"/FreeForever.png"} width={30} height={30}/>
                              Free forever
                              </div>
                              <div className='bg-[#43499E33] text-[#43499E] p-1 rounded-md flex justify-center'>
                              <Image src={"/CostImage.png"} width={30} height={30}/>
                              0$ Renewals
                              </div>
                         </div>
                        <Card className='max-sm:w-full w-[100%] p-5 min-h-[300px]  shadow-lg rounded:md'>
                            <div className='flex flex-col'>
                            <h4 className="font-poppins max-sm:text-[13px] max-sm:[19.5] text-base font-bold leading-6 text-left pb-6">Domain Order summary </h4>
   <div style={{border: "3px solid #9F9F9F", width:"68px"}}></div>
   </div>
                            <div className='flex flex-col gap-8'>
                                {
                                    domainCartItems.map((item, index) => (
                                        <div className='flex justify-between w-full' key={index}>
                                            <h2 className="font-nunito text-sm font-bold max-sm:text-[15px] max-sm:leading-[20.46px] leading-[21.82px] text-left">{item.name}.{dExtension[item.dType]}</h2>
                                            <h2 className="font-nunito text-sm font-medium leading-[21.82px] text-right max-sm:text-[15px] max-sm:leading-[20.46px]">{item.price} ETH</h2>
                                        </div>)
                                    )
                                }
                                <div className='flex justify-between w-full'>
                                    <h2 className="font-nunito text-sm font-bold leading-[21.82px] text-left max-sm:text-[15px] max-sm:leading-[20.46px]">Total</h2>
                                    <h2 className="font-nunito text-sm font-medium leading-[21.82px] text-right max-sm:text-[15px] max-sm:leading-[20.46px]">{totalPrice} ETH</h2>
                                </div>
                            </div>
                            <button className='bg-[#423F96] w-full rounded-lg py-2 mt-6' onClick={checkOut}><h2 className="font-poppins text-white text-[18px] font-semibold leading-[27px] text-center">Check Out</h2></button>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainCart