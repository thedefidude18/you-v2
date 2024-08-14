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
import { Close } from "@mui/icons-material";
import Vote from "../../../public/svgs/Vote";
function Aside({setOpen,open}) {
  const pathName = usePathname();
  
  let show1;
  pathName === "/rewards" ? (show1 = true) : "";
  pathName === "/projects" ? (show1 = true) : "";
  pathName === "/donation" ? (show1 = true) : "";
  let show2 =
    +pathName.split("/").slice(-1) % 2 === 0 && pathName.includes("/rewards");
  console.log(show1, show2, pathName);

  const Links = [
    {
      name: "Submit A Project",
      path: "/",
      icon: <HomeSvg />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Projects />,
    },
    {
      name: "QF Rounds",
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
      icon:<Vote/>,
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
    
  ];
  return (
    <aside className={`${styles.aside__cont} relative w-full `} >
      <div className={styles.divide}>
      {open && (
    <div
      className=" absolute right-[0px] top-4 p-2 rounded-full shadow-xl z-[1100] bg-white border-2 border-black flex justify-center items-center"
      style={{ width: "40px", height: "40px" }}
      onClick={()=>setOpen(false)} 
    >
      <Close />
    </div>
  )}
        <img
          style={{ width: "185px", height: "50px", margin: " 0 auto" }}
          src="/svgs/Logo.svg"
          alt=""
        />
        <ul>
          {Links.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathName === "/"
                : pathName.includes(item.path.substring(1)) &&
                  item.path.length !== 1;

            return (
              <li key={index} className={isActive ? styles.active : ""} onClick={()=>setOpen &&setOpen(false)}>
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
      <div>
        <Link id={styles.logOut} href="/">
          <span style={{ height: "24px" }}>
            <LogoutSvg />
          </span>
          Log Out
        </Link>
      </div>
    </aside>
  );
}

export default Aside;
