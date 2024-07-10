// export const arbitrumId = 42161;
// export const bscId = 56;
// export const polygonId = 137;
// export const mainnetId = 1;
// export const optimismId = 10;

export const arbitrumId = 421614;
export const bscId = 97;
export const polygonId = 80002;
export const optimismId = 11155420;

export const adminWallet = "0x48ede9a182e23a3c7da3fae3a92f85214dcb926e"
export const chainLogos = {
    [bscId]: "/assets/images/polygon.png",
    [polygonId]: "/assets/images/polygon.png",
    [arbitrumId]: "/assets/images/arbitrum.png",
    [optimismId]: "/assets/images/oplogosmall.png"
}

export const categoryIcons = {
    "hackathons": "/assets/icons/popular.svg",
    "ai": "/assets/icons/icons8-ai-64.png",
    "web3": "/assets/icons/icons8-web3-64.png",
    "defi": "/assets/icons/gaming.svg",
    "nfts": "/assets/icons/icons8-nft-64.png",
    "tools": "assets/icons/icons8-tools-64.png",
    "public goods": "/assets/icons/icons8-publicgoods-47.png",
    "scholarships": "/assets/icons/icons8-scholarship-64.png",
    "infrastructure": "/assets/icons/icons8-infrastructure-64.png",
    "entertainment": "icons8-entertainment-64.png",
    "events": "/assets/icons/icons8-events-48.png",
    "gamefi": "/assets/icons/icons8-gamefi-64.png"
}

export const contractAddresses = {
    [bscId]: "0x34f6C5ac104568E98535Cb8c91C5c23AB2d26cAb",
    [polygonId]: "0x34f6C5ac104568E98535Cb8c91C5c23AB2d26cAb",
    [arbitrumId]: "0xcFB8Bf1d64bf4baE08582B5EF464E53326E5bCd4",
    [optimismId]: "0x187a9763FCC7EcFFA9bc50B0fE5BbAe71cDA7b59",
}

export const qfRoundsAddresses = {
    [bscId]: "0x5eFb24436C00938d3b7c4e1c5EBB1CD0AC99Dc0b",
    [polygonId]: "0x5eFb24436C00938d3b7c4e1c5EBB1CD0AC99Dc0b",
    [arbitrumId]: "0x789f71868a6fa58f1354e1226f807c51edbee3d6",
    [optimismId]: "0xcFB8Bf1d64bf4baE08582B5EF464E53326E5bCd4",
}

export const defaultEthLink = {
    [bscId]: "https://bscscan.com/address/",
    [polygonId]: "https://polygonscan.com/address/",
    [arbitrumId]: "https://arbiscan.io/address/",
    [optimismId]: "https://optimistic.etherscan.io/address/"
}

export const subgraphURLs = {
    [bscId]: "https://api.studio.thegraph.com/query/72239/youbuidl-bsc/v0.0.4",
    // [polygonId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuildpolygon",
    // [optimismId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuidl-optimism",
    // [arbitrumId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuildarbitrum",
}

export const tokenDecimals = {
    [bscId]: {
        ["0x11e3008c59b8a55b7525150c61b12b3fd2415a77"]: 18,
        ["0x5c2d5798ba7d59c381faed3a7a3565c0d51b81a8"]: 18
    }
}

export const contriTokens = {
    [bscId]: [
        {
            "name": "USDT",
            "address": "0x11E3008c59b8A55B7525150c61b12b3Fd2415a77"
        },
        {
            "name": "USDC",
            "address": "0x5C2D5798Ba7D59C381FaED3A7A3565c0d51b81a8"
        }
    ],
    [polygonId]: [
        {
            "name": "USDT",
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
        },
        {
            "name": "USDC",
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
    ],
    [optimismId]: [
        {
            "name": "USDT",
            "address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
        },
        {
            "name": "USDC",
            "address": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"
        }
    ],
    [arbitrumId]: [
        {
            "name": "USDT",
            "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
        },
        {
            "name": "USDC",
            "address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
        }
    ],
}