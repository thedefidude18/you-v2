import Banner from '@/components/Banner/Banner'
import Cart from '@/components/cart/Cart'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner
        text="Cross road cross network giving"
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
<Cart/>
    </div>
  )
}

export default page
