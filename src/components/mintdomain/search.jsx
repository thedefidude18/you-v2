import Image from 'next/image'
import React from 'react'
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
  
const Search = ({ setPage, setSearchName = () => {} }) => {
    return (
        <div className='relative pb-20'>
            <div className='w-full flex sm:flex-row flex-col-reverse sm:gap-10  max-sm:mt-14'>
                <div className='max-sm:w-full w-[60%] h-full px-2 flex flex-col items-center sm:pt-20 max-sm:pt-12'>
                    <h1 className='text-[36px] leading-[84px] font-semibold font-poppins text-[#423F96] max-sm:w-10/12 w-[80%] text-center max-sm:text-[32px] max-sm:leading-[30px]'>Mint your .YouBuidl web3 name!</h1>
                    <h2 className='text-[20px] leading-[30px] md:w-[90%] sm:w-[60%] font-semibold text-center max-sm:text-[16px] max-sm:leading-[30px] sm:flex hidden'>Your domain helps people find you on chain and makes a first impression. Find one that represents you perfectly.</h2>
                    <h2 className='text-[20px] leading-[30px] max-sm:w-[65%] font-semibold text-center max-sm:text-[16px] max-sm:leading-[30px] sm:hidden flex'>Your domain helps people find you on chain and makes a first impression.</h2>
                </div>
                <div className='max-sm:w-full w-[40%] h-full flex max-sm:justify-center'>
                    <div className='inline-block border-8 p-1 rounded-xl'>
                        <div className='bg-black bg-gradient-to-b from-black to-[#4458A8] bg-opacity-20 h-[230.26px] w-[240.99px] pb-5 flex flex-col justify-between rounded-[12px]'>
                            <div className=' pt-5 w-full justify-start'>
                                <Image src={'/domain/domainbg.png'} height={69} width={105} alt='img' />
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
            <div className='w-full flex sm:justify-center justify-between gap-2  mt-24 sm:px-0 px-4'>
                <div  className="p-2 border border-[#ABB7C2] rounded-full shadow-lg relative sm:w-[596px] w-1/2   placeholder:text-[#949aaf]">
                    <input
                        type="text"
                        placeholder="Search domain name"
                        className="w-full border-4 border-black p-1 sm:pl-10"
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <img
                        className="absolute left-[12px] top-[25%] sm:block hidden"
                        src="/svgs/Search.svg"
                        alt="Search"
                    />
                </div>
                <button onClick={() => {
                    setPage(1)
                }} className='bg-[#423F96] text-white text-[20px] leading-[24px] font-semibold px-5 py-4 rounded-md'>
                    My Domains(0)
                </button>
            </div>
            {/* <div className='flex justify-center pt-10'>
                <button onClick={() => {
                    setPage(2)
                }
                } className='bg-[#423F96] text-white flex px-4 py-3 gap-2 rounded-md'>
                    <Image src={'/domain/Ellipse 1.png'} alt='ellipse' width={40} height={40} />
                    <h2 className='text-[16px]  font-semibold'>My Domain</h2>
                </button>
            </div>
            <div className='absolute top-0 max-sm:hidden flex left-[15%] z-[-9]'>
                <Image src={"/domain/Star 1.png"} alt='star' height={195} width={195} className='object-contain' />
            </div> */}
            <div className='flex justify-center pt-10 '>
                <div className=' lg:w-[80%] sm:w-[100%] md:w-[100%]'>
                {items.map((item, index) => (
        <div
          key={index}
          className="flex rounded-full items-center justify-between p-4 bg-white shadow-lg mb-4"
        >
          <div className="flex items-center lg:w-[40%] md:w-[50%] sm:w-[50%] justify-between sm:gap-1 flex gap-3 p-2">
          <Image src={"/TickMark.png"} width={20} height={20}/>
        
            <span className="lg:text-[26px] md:text-[20px] sm:[16px]">{item.name}</span>
            <span className="bg-custom-gradient p-4 text-white lg:w-[132px] md:w-[100px] sm:w-[80px] h-[39px] text-center flex justify-center rounded-[30px] relative">
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
          <div className='flex items-center lg:w-[30%] md:w-[50%] sm:w-[50%] sm:gap-2 md:gap-2 justify-between flex lg:gap-3 p-1'>
          <div className="text-gray-600 lg:text-[26px] md:text-[20px] sm:text-[16px]  font-medium">{item.price}</div>
          <button
            className={`relative ml-1 p-2 rounded-md ${
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
        </div>
    )
}

export default Search