import { writeContract, waitForTransactionReceipt } from "@wagmi/core";
import CrowdfundingABI from "../abis/Crowdfunding.json";
import { contractAddresses } from "./constant";


export const createProject = async (config, chainId, formData) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "createProject",
            args: [formData.title, formData.description, formData.target, formData.websiteURL, formData.socialURL, formData.githubURL, formData.coverURL, formData.filterTags]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch { }
    return false;
}

export const editProject = async (config, chainId, formData) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "editProject",
            args: [formData.id, formData.title, formData.description, formData.target, formData.websiteURL, formData.socialURL, formData.githubURL, formData.coverURL, formData.filterTags]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch {

    }
    return false;
}