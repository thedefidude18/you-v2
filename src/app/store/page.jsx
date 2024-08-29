import Banner from '@/components/Banner/Banner'
import StoreHeader from '@/components/store/StoreHeader'
import Table from '@/components/store/Table'
import React from 'react'

const page = () => {
  return (
    <div className=' p-4'>
        <Banner text="Explore a world of <br/> Public Goods on youBuidl. " subtitle="Connecting you with web3 Opportunities to make impact."  image="/svgs/proj/BannerSvg.svg"/>
     <StoreHeader/>
     <div className='max-w-full'>

     <Table/>
     </div>
    </div>
  )
}

export default page
