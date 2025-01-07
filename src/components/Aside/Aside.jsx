"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import HomeSvg from "../../../public/svgs/HomeSvg";
import QFround from "../../../public/svgs/QFround";
import Projects from "../../../public/svgs/Projects";
import styles from "./Aside.module.css";
import RewardsSvg from "../../../public/svgs/RewardsSvg";
import BridgeSvg from "../../../public/svgs/BridgeSvg";
import MintDomain from "../../../public/svgs/MintDomain";
import DonationSvg from "../../../public/svgs/DonationSvg";
import DocsSvg from "../../../public/svgs/DocsSvg";
import LogoutSvg from "../../../public/svgs/LogoutSvg";
import DoubleButton from "./DoubleButton";
import { Close, Search } from "@mui/icons-material";
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Vote from "../../../public/svgs/Vote";
import Image from "next/image";
import { Divider } from "@mui/material";
function Aside({ setOpen, open }) {
  const pathName = usePathname();

  let show1;
  pathName === "/rewards" ? (show1 = true) : "";
  pathName === "/projects" ? (show1 = true) : "";
  pathName === "/donation" ? (show1 = true) : "";


  const Links = [
    {
      name: "Home",
      path: "/",
      icon: <HomeSvg />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Projects />,
    },
    {
      name: "PG Store",
      path: "/store",
      icon: <HomeSvg />,
    },
    {
      name: "Builders",
      path: "/qfrounds",
      icon: <QFround />,
    },
    {
      name: "Donation",
      path: "/donation",
      icon: <DonationSvg />,
    },
    {
      name: "Rewards",
      path: "/rewards",
      icon: <RewardsSvg />,
    },
    {
      name: "Vote",
      path: "/vote",
      icon: <Vote />,
    },
    {
      name: "Bridge",
      path: "/bridge",
      icon: <BridgeSvg />,
    },
    {
      name: "Mint Domain",
      path: "/mintdomain",
      icon: <MintDomain />,
    },
    {
      name: "Docs",
      path: "/docs",
      icon: <DocsSvg />,
    },
    {
      name: "YouBuidl Social",  // New Link
      path: "/you-buidl",       // The path where YouBuidl Social will be displayed
      icon: <HomeSvg />,        // Add an appropriate icon for the YouBuidl Social
    },
  ];
  return (
    <div className="!w-full ">

      {/* <div className="w-full h-14 items-center px-5 max-sm:flex hidden">
        <div className="w-full h-full flex items-center">
          <Image src={'/svgs/Logo.svg'} width={125.2} height={33} alt="Logo" />
        </div>
        <div className="w-full h-full flex justify-between">
          <Image src="/svgs/Search.svg" alt="Cart" height={35} width={35} className="object-cover opacity-[55%]" />
          <Image src="/svgs/Cart.svg" alt="Cart" height={30} width={30} className="object-cover" />
          <Divider orientation="vertical" className="h-[60%]" />
          <div className="flex gap-0">
            <Image src="/domain/Arb Logo.png" alt="logos" height={30} width={30} className="object-cover" />
            <KeyboardArrowDownTwoToneIcon className="text-[30px] font-semibold" />
          </div>
          {open && (
            <Close onClick={() => setOpen(false)} className="!text-[40px]" />
          )}
        </div>
      </div> */}

      <aside className={`${styles.aside__cont} w-full relative px-4 max-sm:overflow-y-scroll max-h-screen !pb-4`} >
        <div className=" max-sm:flex hidden flex-col gap-4 px-4 pb-3">
          <button className=" rounded-md bg-[#424098] text-white font-semibold text-[16px] py-3 flex justify-center">
            Connect wallet
          </button>
          <Link href={"/submit-project"} className="w-full rounded-md bg-black text-white font-semibold text-[16px] py-3 flex justify-center">
            Submit a Project
          </Link>
        </div>
        <div className={`${styles.divide}`}>

          <img
            style={{ width: "185px", height: "50px", margin: " 0 auto" }}
            src="/svgs/Logo.svg"
            alt="logo"
            className="sm:flex hidden"
          />
          <ul>
            {Links.map((item, index) => {
              const isActive =
                item.path === "/"
                  ? pathName === "/"
                  : pathName.includes(item.path.substring(1)) &&
                  item.path.length !== 1;

              return (
                <li key={index} className={ isActive ? `${styles.active} !w-full`  : " "} onClick={() => setOpen && setOpen(false)}>
                  <Link href={`${item.path}`}>
                    <span className={styles.icon}> {item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* {(show1 || show2) && ( */}
            <li>
              <DoubleButton />
            </li>
            {/* )} */}
          </ul>
        </div>
        <div className=" max-sm:pb-24">
          <Link id={styles.logOut} href="/">
            <span style={{ height: "24px" }}>
              <LogoutSvg />
            </span>
            Log Out
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
