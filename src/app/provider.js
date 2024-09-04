"use client";

import { WagmiProvider, http } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { baseSepolia, polygonAmoy, scrollSepolia, } from "viem/chains";
import { bscTestnet } from "@/utils/network";

const config = getDefaultConfig({
    appName: 'YouBuidl',
    projectId: 'a1dd57ddaed16cfb376bd7066679449f',
    chains: [baseSepolia, bscTestnet, polygonAmoy, scrollSepolia],
    transports: {
      [baseSepolia.id]: http(),
      [bscTestnet.id]: http(),
      [polygonAmoy.id]: http(),
      [scrollSepolia.id]: http(),
    },
  });

const queryClient = new QueryClient();

export default function Providers({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}