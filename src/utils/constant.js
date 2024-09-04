// export const arbitrumId = 42161;
// export const bscId = 56;
// export const polygonId = 137;
// export const mainnetId = 1;
// export const optimismId = 10;

export const arbitrumId = 421614;
export const baseId = 84532;
export const bscId = 97;
export const polygonId = 80002;
export const optimismId = 11155420;
export const scrollId = 534351;

export const adminWallet = "0x48ede9a182e23a3c7da3fae3a92f85214dcb926e"
export const chainLogos = {
    [baseId]: "/svgs/proj/base.svg",
    [bscId]: "/svgs/proj/bsc.svg",
    [arbitrumId]: "/svgs/proj/arbitrum.svg",
    [optimismId]: "/svgs/proj/optimism.svg",
    [polygonId]: "/svgs/proj/polygon.svg",
    [scrollId]: "/svgs/proj/scroll.svg",
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
    [arbitrumId]: "0xcFB8Bf1d64bf4baE08582B5EF464E53326E5bCd4",
    [baseId]: "0x4E2dDc7CDdA81B5Ed89D9Ff34cb290fDE716EB14",
    [bscId]: "0xB2f69C54A366fB1BC4d8b892F7c6e34e368A241b",
    [optimismId]: "0x187a9763FCC7EcFFA9bc50B0fE5BbAe71cDA7b59",
    [polygonId]: "0x01970Df11cB5CEed537EEA0aB6D6Dc7366e8DF17",
    [scrollId]: "0x4E2dDc7CDdA81B5Ed89D9Ff34cb290fDE716EB14",
}

export const qfRoundsAddresses = {
    [arbitrumId]: "0x789f71868a6fa58f1354e1226f807c51edbee3d6",
    [baseId]: "0x42a4Be14F10a5ce747F603368679fFAE3451b027",
    [bscId]: "0x6AEe7760eb44F3694e3F7f9db64159c7B19367F3",
    [optimismId]: "0xcFB8Bf1d64bf4baE08582B5EF464E53326E5bCd4",
    [polygonId]: "0x1D4b3314C5FF6ea35F46f13cf100F6d2a2e73Bf2",
    [scrollId]: "0x42a4Be14F10a5ce747F603368679fFAE3451b027",
}

export const votingAddresses = {
    [arbitrumId]: "0xcFB8Bf1d64bf4baE08582B5EF464E53326E5bCd4",
    [baseId]: "0xc0Ee03960e57ebD40Ea332b340de05aD5d267492",
    [bscId]: "0xc7DDbBE4cF9d6b4A8461FD7FfB592443664a7f55",
    [optimismId]: "0x187a9763FCC7EcFFA9bc50B0fE5BbAe71cDA7b59",
    [polygonId]: "0xC52383b7A22e9687b4863B74D92c3d6c8Cd70F11",
    [scrollId]: "0xc0Ee03960e57ebD40Ea332b340de05aD5d267492",
}

export const defaultEthLink = {
    [arbitrumId]: "https://arbiscan.io/address/",
    [baseId]: "https://basescan.com/address/",
    [bscId]: "https://bscscan.com/address/",
    [optimismId]: "https://optimistic.etherscan.io/address/",
    [polygonId]: "https://polygonscan.com/address/",
    [scrollId]: "https://scrollscan.com/address/",
}

export const txBaseLink = {
    [arbitrumId]: "https://arbiscan.io/address/",
    [baseId]: "https://sepolia.basescan.org/tx/",
    [bscId]: "https://testnet.bscscan.com/tx/",
    [optimismId]: "https://optimistic.etherscan.io/address/",
    [polygonId]: "https://amoy.polygonscan.com/tx/",
    [scrollId]: "https://sepolia.scrollscan.com//tx/",
}

export const subgraphURLs = {
    [baseId]: "https://api.studio.thegraph.com/query/72239/youbuidl-base/version/latest",
    [bscId]: "https://api.studio.thegraph.com/query/72239/youbuidl-bsc/version/latest",
    [polygonId]: "https://api.studio.thegraph.com/query/72239/youbuidl-amoy/version/latest",
    [scrollId]: "https://api.studio.thegraph.com/query/72239/youbuidl-scroll/version/latest",
    // [optimismId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuidl-optimism",
    // [arbitrumId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuildarbitrum",
}

export const tokenDecimals = {
    [baseId]: {
        ["0x32e524477f8860151e8778804ee62ae3c55611ca"]: 6,
        ["0x03185ba0563b737d7629813bdec3db02cbba835c"]: 6
    },
    [bscId]: {
        ["0x11e3008c59b8a55b7525150c61b12b3fd2415a77"]: 18,
        ["0x5c2d5798ba7d59c381faed3a7a3565c0d51b81a8"]: 18
    },
    [polygonId]: {
        ["0xd194db06a4b2fcf3134c46984f3d3c8770eb4255"]: 18,
        ["0x253335b231f840428d692740edb288ce87a0ddd1"]: 6,
        ["0x98e607b3c6d16d42412f174a00221d7bccdc7c77"]: 18
    },
    [scrollId]: {
        ["0x32e524477f8860151e8778804ee62ae3c55611ca"]: 6,
        ["0x03185ba0563b737d7629813bdec3db02cbba835c"]: 6,
    },
}

export const contriTokenLogosByAddress = {
    [baseId]: {
        ["0x32e524477f8860151e8778804ee62ae3c55611ca"]: "/svgs/proj/usdt.svg",
        ["0x03185ba0563b737d7629813bdec3db02cbba835c"]: "/svgs/proj/usdc.png"
    },
    [bscId]: {
        ["0x11e3008c59b8a55b7525150c61b12b3fd2415a77"]: "/svgs/proj/usdt.svg",
        ["0x5c2d5798ba7d59c381faed3a7a3565c0d51b81a8"]: "/svgs/proj/usdc.png"
    },
    [polygonId]: {
        ["0x253335b231f840428d692740edb288ce87a0ddd1"]: "/svgs/proj/usdt.svg",
        ["0xd194db06a4b2fcf3134c46984f3d3c8770eb4255"]: "/svgs/proj/usdc.png",
        ["0x98e607b3c6d16d42412f174a00221d7bccdc7c77"]: "/svgs/proj/GloDollar.png"
    },
    [scrollId]: {
        ["0x32e524477f8860151e8778804ee62ae3c55611ca"]: "/svgs/proj/usdc.png",
        ["0x03185ba0563b737d7629813bdec3db02cbba835c"]: "/svgs/proj/usdt.svg",
    },
}


export const contriTokenLogos = {
    "USDT": "/svgs/proj/usdt.svg",
    "USDC": "/svgs/proj/usdc.png",
    "USDGLO": "/svgs/proj/GloDollar.png"
}

export const contriTokens = {
    [baseId]: [
        {
            "name": "USDT",
            "address": "0x03185ba0563b737d7629813bdec3db02cbba835c"
        },
        {
            "name": "USDC",
            "address": "0x32e524477f8860151e8778804ee62ae3c55611ca"
        }
    ],
    [bscId]: [
        {
            "name": "USDT",
            "address": "0x11e3008c59b8a55b7525150c61b12b3fd2415a77"
        },
        {
            "name": "USDC",
            "address": "0x5c2d5798ba7d59c381faed3a7a3565c0d51b81a8"
        }
    ],
    [polygonId]: [
        {
            "name": "USDT",
            "address": "0x253335b231f840428d692740edb288ce87a0ddd1"
        },
        {
            "name": "USDC",
            "address": "0xd194db06a4b2fcf3134c46984f3d3c8770eb4255"
        },
        {
            "name": "USDGLO",
            "address": "0x98e607b3c6d16d42412f174a00221d7bccdc7c77"
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
    [scrollId]: [
        {
            "name": "USDT",
            "address": "0x03185ba0563b737d7629813bdec3db02cbba835c"
        },
        {
            "name": "USDC",
            "address": "0x32e524477f8860151e8778804ee62ae3c55611ca"
        }
    ],
}