import { chainLogos, tokenDecimals } from '@/utils/constant';
import React from 'react'
import { formatUnits } from 'viem';
import { useAccount } from 'wagmi'

const QfCard = ({ qfRound = null }) => {
  const {chainId} = useAccount();
  return (
    <>
      {qfRound && (
        <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  '>
          <div className=' bg-[#F3F6FB] p-4 rounded-md shadow-md'>
            <div>
              <img src={qfRound.qfRound.imgUrl} alt="" className=' rounded-md w-full h-[200px]' />
            </div>
            <div className=' flex justify-between items-center py-2'>
              <h1 className=' font-bold text-xl'>{qfRound.qfRound.title}</h1>
              <div className='flex gap-2 items-center'>
                <img src={chainLogos[chainId]} className='w-[20px]' alt="" />
                <div className=' p-1 bg-white rounded-md'>
                  <img src="Group 10.png" alt="" />
                </div>
              </div>
            </div>

            <div className=''>
              <p className=' text-[#0F1222]'>{qfRound.qfRound.desc}</p>
            </div>

            <div className=' flex py-3 px-2 bg-white justify-between rounded-md my-2'>
              <div className=' text-center  '>
                <p className='text-[#00A3FF] text-2xl font-bold'>${+formatUnits(qfRound.qfRound.amount, tokenDecimals[chainId][qfRound.qfRound.token])}</p>
                <p className='text-[#0F1222]'>Match</p>
              </div>
              <div className=' w-[1px] h-[50px] bg-black '></div>
              <div className=' text-center  '>
                <p className=' text-2xl font-bold'>{qfRound.qfRound.projectNum}</p>
                <p className='text-[#0F1222]'>Projects</p>
              </div>
            </div>
            <div className=' flex justify-between items-center gap-2 '>
              <div>
                {qfRound.leftTime > 0 ? `${Math.ceil(qfRound.leftTime / (24 * 60 * 60))} days left` : "Finished"}
              </div>
              <div className=' p-1 bg-white rounded-md'>

                <img src="cart.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default QfCard
