import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Found = ({ setSearch, setFound, setNotfound }) => {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[95%]'>
                <div className='w-full flex items-center max-sm:px-5 py-14'>
                    <div className="p-2 border rounded-md w-[596px] max-sm:w-[322px] placeholder:text-[#949aaf]">
                        <input
                            type="text"
                            placeholder="Search domain name"
                            defaultValue={'Vitalik.Youbuidl'}
                            suppressHydrationWarning={true}
                            className="w-full p-1"
                        />
                    </div>
                    <button className='bg-[#423F96] text-white text-[20px] leading-[24px] font-semibold px-5 py-4 rounded-md'>
                        Search
                    </button>
                </div>
                <div className='w-full'>
                    <h2 className="font-poppins text-[20px] font-medium leading-4 tracking-[0.03em] text-left py-2">Search Result</h2>
                    <div className='flex max-sm:flex-col justify-between h-fit sm:space-x-4'>
                        <div className='min-h-[300px] space-y-8 w-[60%] max-sm:w-full'>
                            <Card className='w-full rounded-lg flex  h-full'>
                                <div className='w-[83%] xl:pl-8 lg:pl-5 max-sm:pl-8 flex justify-evenly'>
                                    <div className='flex w-full h-full gap-3'>
                                        <div className='w-[15%] max-sm:w-[32.65px] max-sm:h-[29.87px]'>
                                            <Image src={'/domain/Layer_1.png'} alt='success logo' width={48} height={44} className='object-contain' />
                                        </div>
                                        <div className='w-[85%] flex max-sm:flex-col justify-between'>
                                            <div className='flex items-center max-sm:flex-col-reverse max-sm:w-full'>
                                                <h2 className="font-inter lg:text-[16px] xl:text-[20px] max-sm:text-[15px] font-semibold leading-[21px] text-left max-sm:w-full flex justify-start">Vitalik.Youbuidl</h2>
                                                <div className='inline-flex items-center rounded-xl ml-1 border px-2.5 py-0.5 max-sm:mb-2 sm:mb-5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#1BA27A] text-white shadow hover:bg-[#1BA27A]'>Available</div>
                                            </div>
                                            <h2 className='font-poppins text-nowrap lg:text-[16px] xl:text-[22px] max-sm:text-[15px] max-sm:w-full flex justify-end font-semibold leading-[21px] lg:pr-10 max-sm:pr-8'>0.0012 ETH </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="!w-[17%] !h-full bg-[#4458A8] py-5 flex items-center justify-center">
                                    <Image src={'/domain/cart-add.svg'} alt='addtocart' width={50} height={50} className='object-contain' />
                                </div>
                            </Card>
                            <Card className='w-full rounded-lg flex  h-full'>
                                <div className='w-[83%] xl:pl-8 lg:pl-5 max-sm:pl-8 flex justify-evenly'>
                                    <div className='flex w-full h-full gap-3'>
                                        <div className='w-[15%] max-sm:w-[32.65px] max-sm:h-[29.87px]'>
                                            <Image src={'/domain/Layer_1.png'} alt='success logo' width={48} height={44} className='object-contain' />
                                        </div>
                                        <div className='w-[85%] flex max-sm:flex-col justify-between'>
                                            <div className='flex items-center max-sm:flex-col-reverse max-sm:w-full'>
                                                <h2 className="font-inter lg:text-[16px] xl:text-[20px] max-sm:text-[15px] font-semibold leading-[21px] text-left max-sm:w-full flex justify-start">Vitalik.Youbuidl</h2>
                                                <div className='inline-flex items-center rounded-xl ml-1 border px-2.5 py-0.5 max-sm:mb-2 sm:mb-5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#1BA27A] text-white shadow hover:bg-[#1BA27A]'>Available</div>
                                            </div>
                                            <h2 className='font-poppins text-nowrap lg:text-[16px] xl:text-[22px] max-sm:text-[15px] max-sm:w-full flex justify-end font-semibold leading-[21px] lg:pr-10 max-sm:pr-8'>0.0012 ETH </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="!w-[17%] !h-full bg-[#FF5151] py-5 flex items-center justify-center">
                                    <Image src={'/domain/cart-minus.svg'} alt='addtocart' width={50} height={50} className='object-contain' />
                                </div>
                            </Card>
                        </div>
                        <Card className='max-sm:w-full w-[35%] p-5 h-[300px]'>
                            <h4 className="font-poppins max-sm:text-[13px] max-sm:[19.5] text-base font-bold leading-6 text-left pb-6">Domain Order summary </h4>
                            <div className='flex flex-col gap-8'>
                                <div className='flex justify-between w-full'>
                                    <h2 className="font-nunito text-sm font-bold max-sm:text-[15px] max-sm:leading-[20.46px] leading-[21.82px] text-left">Vitalik.Youbuidl</h2>
                                    <h2 className="font-nunito text-sm font-medium leading-[21.82px] text-right max-sm:text-[15px] max-sm:leading-[20.46px]">0.0012 ETH</h2>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <h2 className="font-nunito text-sm font-bold leading-[21.82px] text-left max-sm:text-[15px] max-sm:leading-[20.46px]">Ape.Youbuild</h2>
                                    <h2 className="font-nunito text-sm font-medium leading-[21.82px] text-right max-sm:text-[15px] max-sm:leading-[20.46px]">0.0012 ETH</h2>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <h2 className="font-nunito text-sm font-bold leading-[21.82px] text-left max-sm:text-[15px] max-sm:leading-[20.46px]">Total</h2>
                                    <h2 className="font-nunito text-sm font-medium leading-[21.82px] text-right max-sm:text-[15px] max-sm:leading-[20.46px]">0.0024 ETH $6.26</h2>
                                </div>
                            </div>
                            <button className='bg-[#423F96] w-full rounded-lg py-2 mt-6'><h2 className="font-poppins text-white text-[18px] font-semibold leading-[27px] text-center">Check Out</h2></button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Found