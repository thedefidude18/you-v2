"use client";
import Banner from "@/components/Banner/Banner";
import FormFirstStep from "@/components/qrForms/FormFirstStep";
import Steps from "@/components/steps/Steps";
import React, { useContext, useEffect, useState } from "react";
import { sharedState } from "../layout";
import FormSecondStep from "@/components/qrForms/FormSecondStep";
import FormThirdStep from "@/components/qrForms/FormThirdStep";
import Loader from "@/components/Loader/Loader";
import SuccessCard from "@/components/SuccessCard/SuccessCard";

function HomePage() {
  const styleBtn = {
    width: "164px",
    height: "40px",
    // position: "absolute",
    // top: "823px",
    // left: "1170px",
    padding: "8px 18px",
    marginBottom: "20px",
    gap: "8px",
    borderRadius: "4px",
    backgroundColor: "var(--primary-color)",
    color: "var(--secondary-color)",
    fontSize: "16px",
    fontWeight: "600",
  };

  const stateRecived = useContext(sharedState);
  const { stateStep, setStateStep } = stateRecived;
  const [formData, setFormData] = useState(
    {
      title: "",
      description: "",
      websiteURL: "",
      socialURL: "",
      githubURL: "",
      coverURL: "",
      filterTags: ""
    }
  );

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
    setStateStep((prevStep) => (prevStep - 1));
  };


  const steps = [
    { name: "Build Details", completed: true },
    { name: "Grant Mode", completed: false },
    { name: "Social Links", completed: false },
  ];

  return (
    <div>
      <Banner
        text="Submit your <br/> project."
        image="/svgs/proj/BannerProduct.svg"
        widthImage="206"
        heightImage="206"
      />
      <Steps step={stateStep} steps={steps} />
      {stateStep === 0 && <FormFirstStep formData={formData} setFormData={setFormData} />}
      {stateStep === 1 && <FormSecondStep formData={formData} setFormData={setFormData}/>}
      {stateStep === 2 && <FormThirdStep formData={formData} setFormData={setFormData}/>}
      {stateStep === 3 && <Loader />}
      {stateStep === 4 && <SuccessCard />}
      <div style={{ display: "flex", justifyContent: `${stateStep > 0 ? " space-between" : "flex-end"}`, alignItems: "center", marginTop: "40px" }}>
        {stateStep != 0 && <button style={styleBtn} onClick={handleBack}>
          Back
        </button>}
        <button style={styleBtn} onClick={handleNext}>
          {stateStep === 2 ? "Submit" : "Next"}
        </button>
      </div>

    </div>
  );
}

export default HomePage;
