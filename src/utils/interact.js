import { writeContract, readContract, waitForTransactionReceipt } from "@wagmi/core";
import CrowdfundingABI from "../abis/Crowdfunding.json";
import VotingABI from "../abis/Voting.json";
import ERC20ABI from "../abis/ERC20.json";
import { contractAddresses, votingAddresses } from "./constant";


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

export const canContribute = async (config, chainId, project) => {
    const res = await readContract(config, {
        address: contractAddresses[chainId],
        abi: CrowdfundingABI,
        functionName: "canContribute",
        args: [project]
    })

    return res;
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

export const voteOnRequest = async (config, chainId, project, requestId, vote) => {
    try {
        console.log(chainId, project, requestId, vote, votingAddresses[chainId])
        const hash = await writeContract(config, {
            address: votingAddresses[chainId],
            abi: VotingABI,
            functionName: "voteWithdrawRequest",
            args: [project, requestId, vote]
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

export const withdrawRequest = async (config, chainId, project, reqId) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "withdrawRequestedAmount",
            args: [project, reqId]
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

export const claimUserReward = async (config, chainId, isBuidl) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "withdrawUserRewards",
            args: [isBuidl]
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
