'use client'

import "@rainbow-me/rainbowkit/styles.css";

import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Providers from "./provider";
import { createContext } from "react";
export const sharedState = createContext();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [stateStep, setStateStep] = useState(0);
  return (
    <html lang="en">
      <sharedState.Provider value={{ stateStep, setStateStep }}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <div className="main__Wrapper">
            <Aside />
            <main>
              <Providers>
                <Header />
                {children}
              </Providers>
            </main>
          </div>
        </body>
      </sharedState.Provider>
    </html>
  );
}
