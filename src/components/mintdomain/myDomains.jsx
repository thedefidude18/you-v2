"use client"
import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, Divider } from '@mui/material'
import { useAccount, useConfig } from 'wagmi';
import { baseId, chainLogos } from '@/utils/constant';
import { getMyDomains } from '@/utils/interact';

const MyDomains = ({ }) => {
    const { address, chainId } = useAccount();
    const config = useConfig();
    const [domains, setDomains] = useState([]);

    const copyName = (dName) => {
        navigator.clipboard.writeText(dName);
        alert("copied");
    }
    useEffect(() => {
        const initDomains = async () => {
            const data = await getMyDomains(config, chainId, address);
            setDomains(data);
        }
        if (chainId && chainId == baseId) {
            initDomains();
        }
    }, [address, chainId])

    return (
        <div className='w-full h-screen flex justify-center pb-20'>
            <div className='w-[96%] h-full'>
                <h2 className="font-poppins text-xl font-medium leading-4 tracking-wide text-left py-5">My Domains ({domains.length})</h2>
                <div className='flex flex-col gap-4 w-full px-2'>
                    {domains.length > 0 ? (
                        domains.map((domain, index) => {
                            return (
                                <Card className='w-full h-[143px] rounded-[15px] flex flex-row justify-between px-8' key={index}>
                                    <div className='flex flex-row gap-4'>
                                        <img src={domain.image} alt="domainbg" className='w-[100px]' />
                                        <div className='relative font-bold text-3xl'>
                                            <div className='pr-6 py-1'>{domain.name}</div>
                                            <img src={chainLogos[chainId]} className='absolute w-[15px] right-1 top-0' />
                                        </div>
                                    </div>
                                    {domain.record.length > 0 && (
                                        <div className='text-xl'>
                                            {domain.record}
                                        </div>
                                    )}
                                    <div className='text-xl'>
                                        Reg Date: {(new Date(Number(domain.time) * 1000)).toDateString()}
                                    </div>
                                    <img src="/domain/copy.png" alt='copy' className='hover:scale-105' onClick={() => { copyName(domain.name) }} />
                                </Card>
                            )
                        })
                    ) : (
                        <Card className='h-[143px] rounded-[15px] flex justify-center items-center'>
                            <h2 className='font-poppins text-2xl font-medium leading-4 tracking-wide text-left'>No domains found</h2>
                        </Card>
                    )}
                </div>
                <div className='w-full flex justify-center mt-20'>
                    <button className='bg-[#423F96] w-[86px] text-[#FFFFFF] rounded-md h-[30px] flex justify-evenly items-center'>
                        <ArrowBackIosIcon className='opacity-50 text-lg' />
                        <Divider orientation="vertical" flexItem />
                        <ArrowForwardIosIcon className='text-lg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyDomains