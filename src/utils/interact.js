import { writeContract, readContract, waitForTransactionReceipt } from "@wagmi/core";
import CrowdfundingABI from "../abis/Crowdfunding.json";
import ERC20ABI from "../abis/ERC20.json";
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

export const contributeToken = async (config, chainId, account, project, token, amount) => {
    try {
        let contriList = [];
        contriList.push({
            project: project,
            referrer: account,
            token: token,
            amount: amount
        })

        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "contribute",
            args: [contriList]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
    }
    return false;
}

export const getAllowance = async (config, account, project, token) => {
    const res = await readContract(config, {
        address: token,
        abi: ERC20ABI,
        functionName: "allowance",
        args: [account, project]
    })

    return res;
}

export const approve = async (config, project, token, amount) => {
    try {
        const hash = await writeContract(config, {
            address: token,
            abi: ERC20ABI,
            functionName: "approve",
            args: [project, amount]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
    }
    return false;
}

export const requestWithdraw = async (config, chainId, project, desc, receiver, tokens) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "createWithdrawRequest",
            args: [project, desc, receiver, tokens]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
    }
    return false;
}
