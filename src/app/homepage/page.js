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
import { useAccount, useConfig } from "wagmi";
import { createProject } from "@/utils/interact";

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

  const config = useConfig();
  const { chain } = useAccount();

  const stateRecived = useContext(sharedState);
  const { stateStep, setStateStep, setReferral } = stateRecived;

  const [formData, setFormData] = useState(
    {
      title: "",
      description: "",
      target: 0,
      websiteURL: "",
      socialURL: "",
      githubURL: "",
      coverURL: "",
      filterTags: "nft"
    }
  );

  const handleNext = async () => {
    if (stateStep == 2) {
      setStateStep(3);
      const res = await createProject(config, chain.id, formData);
      if (res) setStateStep(4);
      else setStateStep(2)
    }
    if (stateStep < 2) {
      setStateStep((prevStep) => (prevStep <= 1 ? prevStep + 1 : prevStep));
    }
  };

  const handleBack = () => {
    setStateStep((prevStep) => (prevStep - 1));
  };

  useEffect(() => {
    const pathName = window.location.href;
    const pieces = pathName.split("?r=");
    if (pieces.length == 2) {
      const referral = pieces[1];
      setReferral(referral);
    }
  }, [])


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
      {stateStep === 1 && <FormSecondStep formData={formData} setFormData={setFormData} />}
      {stateStep === 2 && <FormThirdStep formData={formData} setFormData={setFormData} />}
      {stateStep === 3 && <Loader />}
      {stateStep === 4 && <SuccessCard />}
      <div style={{ display: "flex", justifyContent: `${stateStep > 0 ? " space-between" : "flex-end"}`, alignItems: "center", marginTop: "40px" }}>
        {stateStep != 0 && <button style={styleBtn} onClick={handleBack}>
          Back
        </button>}
        {
          stateStep < 4 && (
            <button style={styleBtn} onClick={handleNext}>
              {stateStep == 2 ? "Submit" : "Next"}
            </button>
          )
        }
      </div>

    </div>
  );
}

export default HomePage;
