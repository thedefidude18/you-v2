import { writeContract, readContract, waitForTransactionReceipt } from "@wagmi/core";
import CrowdfundingABI from "../abis/Crowdfunding.json";
import QFRoundsABI from "../abis/QFRounds.json";
import VotingABI from "../abis/Voting.json";
import DomainABI from "../abis/Domain.json";
import ERC20ABI from "../abis/ERC20.json";
import { contractAddresses, domainAddresses, qfRoundsAddresses, votingAddresses } from "./constant";


export const createProject = async (config, chainId, formData) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "createProject",
            args: [formData.title, formData.description, formData.target, formData?.websiteURL, formData.socialURL, formData.githubURL, formData.coverURL, formData.filterTags]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch { }
    return false;
}

export const deleteProject = async (config, chainId, project) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "deleteProject",
            args: [project]
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
            args: [formData.id, formData.title, formData.description, formData.target, formData?.websiteURL, formData.socialURL, formData.githubURL, formData.coverURL, formData.filterTags]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch {

    }
    return false;
}

export const contributeBatch = async (config, chainId, nContriData, qfContriData) => {
    try {
        const hash = await writeContract(config, {
            address: qfRoundsAddresses[chainId],
            abi: QFRoundsABI,
            functionName: "cartBatchContribute",
            args: [qfContriData, nContriData]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
        return false;
    }
    return false;
}

export const contributeToken = async (config, chainId, account, project, token, amount, isQF) => {
    try {
        let contriList = [];
        contriList.push({
            project: project,
            referrer: account,
            token: token,
            amount: amount
        })

        let hash;
        if (isQF) {
            hash = await writeContract(config, {
                address: qfRoundsAddresses[chainId],
                abi: QFRoundsABI,
                functionName: "qfContribute",
                args: [contriList]
            })
        } else {
            hash = await writeContract(config, {
                address: contractAddresses[chainId],
                abi: CrowdfundingABI,
                functionName: "contribute",
                args: [contriList]
            })
        }

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
        return false;
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

export const getAllowance = async (config, chainId, account, token) => {
    const res = await readContract(config, {
        address: token,
        abi: ERC20ABI,
        functionName: "allowance",
        args: [account, contractAddresses[chainId]]
    })

    return res;
}

export const approve = async (config, chainId, token, amount) => {
    try {
        const hash = await writeContract(config, {
            address: token,
            abi: ERC20ABI,
            functionName: "approve",
            args: [contractAddresses[chainId], amount]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
        return false;
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
        return false;
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
        return false;
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
        return false;
    }
    return false;
}

export const instantWithdraw = async (config, chainId, project) => {
    try {
        const hash = await writeContract(config, {
            address: contractAddresses[chainId],
            abi: CrowdfundingABI,
            functionName: "instantWithdraw",
            args: [project]
        })

        const res = await waitForTransactionReceipt(config, { hash });

        if (res.status == "success") {
            return true
        }
    } catch (e) {
        console.log(e)
        return false;
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
        return false;
    }
    return false;
}

export const getMyDomains = async (config, chainId, account) => {
    const res = await readContract(config, {
        address: domainAddresses[chainId],
        abi: DomainABI,
        functionName: "getHolderDomains",
        args: [account]
    })

    let domains = [];

    for (const domain of res) {
        const uri = atob(domain.tokenURI.split(',')[1]);
        const metadata = JSON.parse(uri);
        const imgUrl = metadata.image;
        const name = metadata.name;

        domains.push({
            name: name,
            image: imgUrl,
            time: domain.registerDate,
            record: domain.record
        })
    }

    return domains;
}
