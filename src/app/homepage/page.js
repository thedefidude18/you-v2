"use client";
import Banner from "@/components/Banner/Banner";
import Steps from "@/components/steps/Steps";
import React, { useContext, useEffect } from "react";

import { sharedState } from "../layout";
import FormFirstStep from "@/components/qrForms/FormFirstStep";
import FormSecondStep from "@/components/qrForms/FormSecondStep";
import FormThirdStep from "@/components/qrForms/FormThirdStep";
import Loader from "@/components/Loader/Loader";
import SuccessCard from "@/components/SuccessCard/SuccessCard";

export default function HomePage() {
  const styleBtn = {
    width: "164px",
    height: "40px",
    position: "absolute",
    top: "823px",
    left: "1170px",
    padding: "8px 18px",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "var(--primary-color)",
    color: "var(--secondary-color)",
    fontSize: "16px",
    fontWeight: "600",
  };
  const stateRecived = useContext(sharedState);
  const { stateStep, setStateStep } = stateRecived;
  useEffect(() => {
    if (stateStep === 3) {
      setTimeout(() => {
        setStateStep(4);
      }, 1000);
    }
  }, [stateStep]);
  const handleNext = () => {
    console.log(stateRecived);
    setStateStep((prevStep) => (prevStep <= 1 ? prevStep + 1 : 3));
  };
  return (
    <div>
      <Banner
        text="Submit your project."
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
      <Steps step={stateStep} />
      {stateStep === 0 && <FormFirstStep />}
      {stateStep === 1 && <FormSecondStep />}
      {stateStep === 2 && <FormThirdStep />}
      {stateStep === 3 && <Loader />}
      {stateStep === 4 && <SuccessCard />}
      <button style={styleBtn} onClick={handleNext}>
        {stateStep === 2 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

