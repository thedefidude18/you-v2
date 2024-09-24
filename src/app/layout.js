'use client'

import "@rainbow-me/rainbowkit/styles.css";

import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Providers from "./provider";
import { createContext } from "react";
import Script from "next/script";
export const sharedState = createContext();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [stateStep, setStateStep] = useState(0);
  const [isContributer,setIsContributer] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);
  const [contriToken, setContriToken] = useState(null);
  const [cartToken, setCartToken] = useState(null);
  const [referral, setReferral] = useState('');
  const [cartItems, setCartItems] = useState({});
  return (
    <html lang="en">
      <Script 
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" 
          strategy="lazyOnload" 
        />
      <sharedState.Provider value={{ stateStep, setStateStep ,setIsContributer,isContributer,currentProject,setCurrentProject, contriToken, setContriToken, referral, setReferral, cartItems, setCartItems, cartToken, setCartToken}}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <div className="main__Wrapper">
           <div className="aside"><Aside /></div> 
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
