import Banner from '@/components/Banner/Banner'
import StoreHeader from '@/components/store/StoreHeader'
import Table from '@/components/store/Table'
import React from 'react'

const page = () => {
  return (
    <div >
        <Banner text="Explore a world of <br/> Public Goods on youBuidl. " subtitle="Connecting you with web3 Opportunities to make impact."  image="/svgs/proj/BannerSvg.svg"/>
        <div className=' sm:p-4 p-2'>

     <StoreHeader/>
     <div className='max-w-full'>

     <Table/>
     </div>
        </div>
    </div>
  )
}

export default page
