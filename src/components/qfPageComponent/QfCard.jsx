import React from 'react'

const QfCard = () => {
  return (
    <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  '>
      <div className=' bg-[#F3F6FB] p-4 rounded-md shadow-md'>
<div>
    <img src="/pro1.png" alt="" className=' rounded-md w-full h-[200px]' />
</div>
<div className=' flex justify-between items-center py-2'>
<h1 className=' font-bold text-xl'>GAMEION</h1>
<div className='flex gap-2 items-center'>
<img src="ArbLogo.png" alt="" />
<img src="Vector.png" alt="" />
<img src="PolygonBadge.png" alt="" />
<div className=' p-1 bg-white rounded-md'>

<img src="Group 10.png" alt="" />
</div>
</div>
</div>

<div className=''>
    <p className=' text-[#0F1222]'>Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE  </p>
</div>

<div className=' flex py-3 px-2 bg-white justify-between rounded-md my-2'>
<div className=' text-center  '>
    <p className='text-[#00A3FF] text-2xl font-bold'>$500</p>
<p className='text-[#0F1222]'>Raised</p>
</div>
<div className=' w-[1px] h-[50px] bg-black '></div>
<div className=' text-center  '>
    <p className=' text-2xl font-bold'>5000</p>
<p className='text-[#0F1222]'>Raised</p>
</div>
<div className=' w-[1px] h-[50px] bg-black '></div>
<div className=' text-center  '>
    <p className=' text-2xl font-bold'>$10,000</p>
<p className='text-[#0F1222]'>Raised</p>
</div>
</div>

<div className=' flex justify-between items-center gap-2 '>
<div className=' flex items-center gap-1'>
<img src="token1.png" alt="" />
<span>By 0xe2</span>
</div>
<div>
    300 days left
</div>
<div className=' p-1 bg-white rounded-md'>

<img src="cart.png" alt="" />
</div>
</div>
      </div>
    </div>
  )
}

export default QfCard
