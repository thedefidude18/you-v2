
"use client";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/qfPageComponent/Card";
import React from "react";

function page() {
  return (
    <div>
         <Banner
        text="Suitable text for QF round here"
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
<Card/>
    </div>
  );
}

export default page;
