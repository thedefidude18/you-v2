
"use client";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/qfPageComponent/Card";
import QfCard from "@/components/qfPageComponent/QfCard";
import { getQFRound } from "@/utils";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

function page() {

  const { chainId } = useAccount();

  const [qfRound, setQFRound] = useState(null);

  const initQFRound = async () => {
    const data = await getQFRound(chainId);
    setQFRound(data);
  }

  useEffect(() => {
    if (chainId) initQFRound()
  }, [chainId])
  return (
    <div className="p-4">
      <Banner
        text={qfRound ? qfRound.leftTime > 0 ? `${qfRound.qfRound.title} has started, it will end in ${Math.floor(qfRound.leftTime / (24 * 60 * 60))} days.` : `${qfRound.qfRound.title} has ended` : ""}
        image={qfRound ? qfRound.qfRound.imgUrl : "/svgs/proj/BannerProduct.svg"}
        widthImage="180"
        heightImage="160"
      />
      {/* <div className=" grid sm:grid-cols-3 grid-cols-1 w-full gap-2 p-2"> */}

      <Card qfRound={qfRound} />
      <QfCard/>
      {/* </div> */}
    </div>
  );
}

export default page;
