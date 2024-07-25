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
import { sharedState } from "@/app/layout";
import { editProject } from "@/utils/interact";
import { useAccount, useConfig } from "wagmi";

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

  const config = useConfig();
  const { chain } = useAccount();

  const stateRecived = useContext(sharedState);
  const { currentProject } = stateRecived;

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

  const [stateStep, setStateStep] = useState(0);

  useEffect(() => {
    if (currentProject) setFormData(currentProject);
  }, [currentProject])

  const handleNext = async () => {
    if (stateStep == 2) {
      setStateStep(3);
      const res = await editProject(config, chain.id, formData);
      if (res) setStateStep(4);
      else setStateStep(2)
    } 
    if (stateStep < 2) {
      setStateStep((prevStep) => (prevStep <= 1 ? prevStep + 1 : prevStep));
    }
  };

  const handleBack = () => {
    if (stateStep === 0) {
      router.push("/projects");
    }
    setStateStep((prevStep) => (prevStep > 0 && prevStep - 1));
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
      <Steps step={stateStep} steps={steps} />
      {stateStep === 0 && <FormFirstStep formData={formData} setFormData={setFormData}/>}
      {stateStep === 1 && <FormSecondStep formData={formData} setFormData={setFormData}/>}
      {stateStep === 2 && <FormThirdStep formData={formData} setFormData={setFormData}/>}
      {stateStep === 3 && <Loader />}
      {stateStep === 4 && <SuccessCard />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px" }}>
        <button style={styleBtn} onClick={handleBack}>
          Back
        </button>
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

export default page;
