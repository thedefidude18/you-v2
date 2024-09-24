import Image from 'next/image'
import React from 'react'

const Search = ({ setSearch, setFound, setNotfound }) => {
    return (
        <div className='relative'>
            <div className='w-full flex max-sm:flex-col-reverse sm:gap-10 mt-24 max-sm:mt-14'>
                <div className='max-sm:w-full w-[60%] h-full px-2 flex flex-col items-center sm:pt-20 max-sm:pt-12'>
                    <h1 className='text-[36px] leading-[84px] font-semibold font-poppins text-[#423F96] max-sm:w-10/12 w-full text-center max-sm:text-[32px] max-sm:leading-[30px]'>Mint your .YouBuidl web3 name!</h1>
                    <h2 className='text-[20px] leading-[30px] sm:w-[60%] font-semibold text-center max-sm:text-[16px] max-sm:leading-[30px] sm:flex hidden'>Your domain helps people find you on chain and makes a first impression. Find one that represents you perfectly.</h2>
                    <h2 className='text-[20px] leading-[30px] max-sm:w-[65%] font-semibold text-center max-sm:text-[16px] max-sm:leading-[30px] sm:hidden flex'>Your domain helps people find you on chain and makes a first impression.</h2>
                </div>
                <div className='max-sm:w-full w-[40%] h-full flex max-sm:justify-center'>
                    <div className='inline-block border-8 p-1 rounded-xl'>
                        <div className='bg-black bg-gradient-to-b from-black to-[#4458A8] bg-opacity-20 h-[230.26px] w-[240.99px] pb-5 flex flex-col justify-between rounded-[12px]'>
                            <div className=' pt-5 w-full justify-start'>
                                <Image src={'/domain/youbuidl_logolargeround (2) 2 1@2x.png'} height={69} width={105} alt='img' />
                            </div>
                            <h4 className='w-full text-center text-[18px] leading-[22.63px] font-source text-white'>Vitalik.Youbuidl</h4>
                        </div>
                        <div className=' flex justify-between px-3 py-1'>
                            <div>
                                <h2 className='text-[12px] leading-[15.08px]'>Current Price </h2>
                                <h2 className='text-[18px] leading-[22.63px]'>0.0014 ETH <span className='text-[12px] leading-[15.08px]'>$3.33</span></h2>
                            </div>
                            <div className=''>
                                <Image src={'/domain/Arb Logo.png'} alt='logo' height={16.69} width={17.15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-24 max-sm:px-5'>
                <div className="p-2 rounded-md relative w-[596px] max-sm:w-[322px] placeholder:text-[#949aaf]">
                    <input
                        type="text"
                        placeholder="Search domain name"
                        suppressHydrationWarning={true}
                        className="w-full border-4 border-black p-1 sm:pl-10"
                    />
                    <img
                        className="absolute left-[12px] top-[25%] sm:block hidden"
                        src="/svgs/Search.svg"
                        alt="Search"
                    />
                </div>
                <button onClick={() => {
                    setNotfound(true)
                    setSearch(false)
                    setFound(false)
                }} className='bg-[#423F96] text-white text-[20px] leading-[24px] font-semibold px-5 py-4 rounded-md'>
                    Search
                </button>
            </div>
            <div className='w-full flex justify-center pt-10'>
                <button onClick={() => {
                    setFound(true)
                    setSearch(false)
                }
                } className='bg-[#423F96] text-white flex px-4 py-3 gap-2 rounded-md'>
                    <Image src={'/domain/Ellipse 1.png'} alt='ellipse' width={40} height={40} />
                    <h2 className='text-[16px] leading-[24px] font-semibold'>My Domain</h2>
                </button>
            </div>
            <div className='absolute top-0 max-sm:hidden flex left-[15%] z-[-9]'>
                <Image src={"/domain/Star 1.png"} alt='star' height={195} width={195} className='object-contain' />
            </div>
        </div>
    )
}

export default Search