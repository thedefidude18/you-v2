"use client";

import { WagmiProvider, http } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { bscTestnet, polygonAmoy } from "viem/chains";

const config = getDefaultConfig({
    appName: 'YouBuidl',
    projectId: 'a1dd57ddaed16cfb376bd7066679449f',
    chains: [bscTestnet, polygonAmoy],
    transports: {
      [bscTestnet.id]: http(),
      [polygonAmoy.id]: http(),
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