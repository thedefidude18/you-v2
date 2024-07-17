"use client";
import Banner from "@/components/Banner/Banner";
import FormFirstStep from "@/components/qrForms/FormFirstStep";
import Steps from "@/components/steps/Steps";
import React, { useContext, useEffect, useState } from "react";
import FormSecondStep from "@/components/qrForms/FormSecondStep";
import FormThirdStep from "@/components/qrForms/FormThirdStep";
import Loader from "@/components/Loader/Loader";
import SuccessCard from "@/components/SuccessCard/SuccessCard";
import { useRouter } from "next/navigation";

function page() {
  const styleBtn = {
    width: "164px",
    height: "40px",
    padding: "8px 18px",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "var(--primary-color)",
    color: "var(--secondary-color)",
    fontSize: "16px",
    fontWeight: "600",
  };
  const router = useRouter()
  const [stateStep,setStateStep] = useState(0)
  useEffect(() => {
    if (stateStep === 3) {
      setTimeout(() => {
        setStateStep(4);
      }, 1000);
    }
  }, [stateStep]);
  const handleNext = () => {
    setStateStep((prevStep) => (prevStep <= 1 ? prevStep + 1 : 4));
  };
  
  const handleBack = () => {
    if(stateStep ===0){
router.push("/projects");
    }
    setStateStep((prevStep) => (prevStep >0 &&  prevStep -1  ));
  };
 
  const steps = [
    { name: "Build Details", completed: true },
    { name: "Grant Mode", completed: false },
    { name: "Social Links", completed: false },
  ];
 
  return (
    <div>
<Banner
        text="Edit your project."
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
      <Steps step={stateStep} steps={steps}/>
      {stateStep === 0 && <FormFirstStep />}
      {stateStep === 1 && <FormSecondStep />}
      {stateStep === 2 && <FormThirdStep />}
      {stateStep === 3 && <Loader />}
      {stateStep === 4 && <SuccessCard />}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"40px"}}>
    <button style={styleBtn} onClick={handleBack}>
       Back
      </button>
      <button style={styleBtn} onClick={handleNext}>
        {stateStep === 2 ? "Submit" : "Next"}
      </button>
      </div>
      
    </div>
  );
}

export default page;
