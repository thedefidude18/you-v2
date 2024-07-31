import axios from "axios";
import { adminWallet, bscId, subgraphURLs, tokenDecimals } from "./constant";
import { formatUnits } from "viem";

const getDataFromSubgraph = async (query, subgraphURL) => {
    try {
        const result = await axios.post(subgraphURL, {
            query,
        });

        return { isSuccess: true, data: result.data.data };
    } catch (error) {
        return { isSuccess: false, data: "" };
    }
};

export const getProjects = async (account) => {
    const query = `{
        projects(where: {isVisible: true}, orderBy: blockTime, orderDirection: desc) {
          id
          creator
          currentAmount {
            amount
            token
          }
          description
          filterTags
          noOfContributors
          coverURL
          socialURL
          githubURL
          title
          target
          websiteURL
          isVerified
          isVisible
          isBlocked
          qfRoundID
          qfMatched
        }
        qfrounds(first: 1, orderBy: blockTime, orderDirection: desc) {
          id
          amount
          totalRootSum
          startTime
          endTime
        }
      }`;
    try {
        let projects = []
        let adminProjects = []
        let otherProjects = []
        await Promise.all(
            Object.entries(subgraphURLs).map(async ([key, value]) => {
                const res = await getDataFromSubgraph(query, value);
                if (res.isSuccess) {
                    let index = 0;
                    let projectsList = res.data.projects;
                    const qfRounds = res.data.qfrounds;
                    const qfRound = qfRounds.length > 0 ? qfRounds[0] : null;

                    projectsList = projectsList.map((project) => {
                        const currentTime = Math.floor(Date.now() / 1000)

                        let currentAmount = 0;
                        for (const token of project.currentAmount) {
                            currentAmount += +formatUnits(
                                token.amount,
                                tokenDecimals[key][token.token]
                            )
                        }

                        let projectData;
                        if (qfRound && qfRound.id == project.qfRoundID) {
                            const isOnQF = currentTime >= +(qfRound.startTime) && currentTime <= +(qfRound.endTime);
                            projectData = { ...project, currentRaised: currentAmount, chainId: key, index: index++, isOnQF: isOnQF, matchingPool: qfRound.amount, qfRaised: qfRound.totalRootSum == 0 ? 0 : project.qfMatched / qfRound.totalRootSum * qfRound.amount };

                        }

                        projectData = { ...project, currentRaised: currentAmount, chainId: key, index: index++, isOnQF: false, matchingPool: 0, qfRaised: 0 }

                        if (project.creator == adminWallet)
                            adminProjects.push(projectData);
                        else
                            otherProjects.push(projectData)
                    }
                    )
                }
            })
        )
        projects = adminProjects.concat(otherProjects);
        return { myProjects: projects.filter((proj) => proj.creator == account.toLowerCase()), othersProjects: projects.filter((proj) => proj.creator != account.toLowerCase()) };
    } catch (e) {
        console.log(e, "=========error in get projects============")
        return [];
    }
};

export const getProject = async (projectContractAddress, chainId) => {
    const query = `{
        project(id: "${projectContractAddress}") {
            id
            description
            currentAmount {
            token
            amount
            }
            creator
            filterTags
            noOfContributors
            coverURL
            qfRoundID
            qfMatched
            githubURL
            socialURL
            githubURL
            title
            websiteURL
            isVerified
            target
        }
        qfrounds(first: 1, orderBy: blockTime, orderDirection: desc) {
          id
          amount
          totalRootSum
          startTime
          endTime
        }
      }`;

    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            const project = res.data.project;
            if (project) {
                const data = project;
                const qfRounds = res.data.qfrounds;
                const qfRound = qfRounds.length > 0 ? qfRounds[0] : null;
                if (qfRound && qfRound.id == data.qfRoundID) {
                    const currentTime = Math.floor(Date.now() / 1000)
                    const isOnQF = currentTime >= +(qfRound.startTime) && currentTime <= +(qfRound.endTime);
                    return { ...data, isOnQF: isOnQF, matchingPool: qfRound.amount, qfRaised: qfRound.totalRootSum == 0 ? 0 : data.qfMatched / qfRound.totalRootSum * qfRound.amount }
                }

                let currentAmount = 0;
                for (const token of project.currentAmount) {
                    currentAmount += +formatUnits(
                        token.amount,
                        tokenDecimals[chainId][token.token]
                    )
                }

                return { ...data, currentRaised: currentAmount, chainId: chainId, isOnQF: false, matchingPool: 0 };
            }
            return null
        }
        return null;
    } catch (e) {
        console.log(e, "=========error in get project============")
        return null;
    }
}

export const getQFRounds = async () => {
    const query = `{
        qfrounds(first: 1, orderBy: blockTime, orderDirection: desc) {
            id
            title
            imgUrl
            desc
            amount
            totalContributions
            contriNumber
            token
            projectNum
            startTime
            endTime
        }
      }`;
    try {
        let qfRoundsList = []
        let totalMatchingPool = 0;
        let totalContributions = 0;
        let contriNumber = 0;
        await Promise.all(
            Object.entries(subgraphURLs).map(async ([key, value]) => {
                const res = await getDataFromSubgraph(query, value);
                if (res.isSuccess) {
                    const qfRounds = res.data.qfrounds;
                    if (qfRounds.length > 0) {
                        const currentTime = Math.floor(Date.now() / 1000)
                        let leftTime;
                        if (currentTime >= +qfRounds[0].endTime) {
                            leftTime = 0;
                        } else {
                            leftTime = +qfRounds[0].endTime - currentTime;
                        }
                        totalMatchingPool += +formatUnits(qfRounds[0].amount, (key == bscId ? 18 : 6))
                        totalContributions += +formatUnits(qfRounds[0].totalContributions, (key == bscId ? 18 : 6))
                        contriNumber += qfRounds[0].contriNumber;

                        const daysLeft = Math.floor(leftTime / (24 * 60 * 60));
                        const hoursLeft = Math.floor((leftTime % (24 * 60 * 60)) / 3600);
                        qfRoundsList.push({ ...qfRounds[0], chainId: key, leftDays: daysLeft, leftHours: hoursLeft });
                    }
                }
            })
        )

        return { qfRoundsList: qfRoundsList, totalMatchingPool: totalMatchingPool, totalContributions: totalContributions, contriNumber: contriNumber }
    } catch (e) {
        console.log(e, "=========error in get qfRoundsList============")
        return { qfRoundsList: [], totalMatchingPool: 0, totalContributions: 0, contriNumber: 0 };
    }
};

export const getContributors = async (chainId) => {
    const query = `{
        contributors(orderBy: totalContribution, orderDirection: desc) {
          id
          referralNumber
          totalContribution
          totalBuidlPointRewards
          totalStableRewards
          totalBuidlPointReferralRewards
        }
      }`;
    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            return res.data.contributors;
        }

        return []
    } catch (e) {
        console.log(e, "=========error in get contributors============")
        return [];
    }
};

export const getContributionDetails = async (address, chainId) => {
    const query = `{
        contributor(id: "${address}") {
            referralNumber
            totalBuidlPointReferralRewards
            totalBuidlPointRewards
            totalContribution
            claimableBuidlPointReferralRewards
            claimableBuidlPointRewards
            totalStableRewards
            claimableStableRewards
            contributions {
                project {
                    id
                }
            }
        }
      }`;
    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            const contributor = res.data.contributor;
            const contributions = contributor.contributions;
            let projectsNum = 0;
            if (contributions.length > 0) {
                const uniqueProjects = Array.from(new Set(contributions.map(a => JSON.stringify(a))))
                    .map(str => JSON.parse(str));
                projectsNum = uniqueProjects.length;
            }

            return {...contributor, projectsNum: projectsNum};
        }

        return null
    } catch (e) {
        console.log(e, "=========error in get contributor============")
        return null;
    }
}

export const getRequets = async (address, chainId) => {
    const query = `{
        withdrawRequests(where: {project_: {contriList_contains: ["${address.toLowerCase()}"]}} orderBy: time) {
            reqID
            description
            isSucceed
            time
            project {
                id
                title
                creator
                coverURL
                noOfContributors
            }
            votes {
                choice
                voter {
                    id
                }
            }
            tokens {
                amount
                token
            }
        }
        votes(where: {voter: "${address}"}) {
            choice
        }
      }`;
    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            const requests = res.data.withdrawRequests;
            const votes = res.data.votes;

            let requestList = [];
            for (const request of requests) {
                const votes = request.votes;
                let numOfFor = 0;
                let numOfAgainst = 0;

                let reqAmount = 0;
                for (const token of request.tokens) {
                    reqAmount += +formatUnits(
                        token.amount,
                        tokenDecimals[chainId][token.token]
                    )
                }
                let isVote = false;
                if (votes.length > 0) {
                    numOfFor = votes.filter((vote) => vote.choice).length;
                    numOfAgainst = votes.filter((vote) => !vote.choice).length;
                    isVote = votes.filter((vote) => vote.voter.id == address.toLowerCase()).length > 0;
                }

                requestList.push({ reqId: request.reqID, requestDesc: request.description, isSucceed: request.isSucceed, time: request.time, project: request.project, tokens: request.tokens, numOfFor: numOfFor, numOfAgainst: numOfAgainst, isVote: isVote, reqAmount: reqAmount })
            };

            const myRequests = requestList.filter((req) => req.project.creator == address.toLowerCase());
            const othersRequests = requestList.filter((req) => req.project.creator != address.toLowerCase());

            const numFor = votes.filter((vote) => vote.choice).length;
            const numAgainst = votes.filter((vote) => !vote.choice).length;

            return { myRequests: myRequests, othersRequests: othersRequests, numFor: numFor, numAgainst: numAgainst };
        }

        return null
    } catch (e) {
        console.log(e, "=========error in get requests============")
        return null;
    }
}

export const getRecentWithdrawals = async (chainId) => {
    const query = `{
        withdrawRequests(
             first: 5
             orderBy: time
             orderDirection: desc
             where: {isSucceed: true}
         ) {
             project {
                title
                coverURL
                creator
             }
             tokens {
                amount
                token
             }
             votes {
                choice
             }
         }
       }`;
    try {
        const res = await getDataFromSubgraph(query, subgraphURLs[chainId]);
        if (res.isSuccess) {
            const requests = res.data.withdrawRequests;

            let requestList = [];
            for (const request of requests) {

                let reqAmount = 0;
                for (const token of request.tokens) {
                    reqAmount += +formatUnits(
                        token.amount,
                        tokenDecimals[chainId][token.token]
                    )
                }

                requestList.push({ project: request.project, reqAmount: reqAmount, voteNum: request.votes.length })
            };


            return requestList;
        }

        return []
    } catch (e) {
        console.log(e, "=========error in get recent requests============")
        return [];
    }
}

export const getEllipsisTxt = (str, n = 6) => {
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return '';
};