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
function Aside() {
  const pathName = usePathname();

  let show1;
  pathName === "/rewards" ? (show1 = true) : "";
  pathName === "/projects" ? (show1 = true) : "";
  let show2 =
    +pathName.split("/").slice(-1) % 2 === 0 && pathName.includes("/rewards");
  console.log(show1, show2, pathName);

  const Links = [
    {
      name: "Home",
      path: "/",
      icon: <HomeSvg />,
    },
    {
      name: "QF Rounds",
      path: "/qfrounds",
      icon: <QFround />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Projects />,
    },
    {
      name: "Rewards",
      path: "/rewards",
      icon: <RewardsSvg />,
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
      name: "Donation",
      path: "/donation",
      icon: <DonationSvg />,
    },
    {
      name: "Docs",
      path: "/docs",
      icon: <DocsSvg />,
    },
    {
      name: "Vote",
      path: "/vote",
      icon:"",
    },
  ];
  return (
    <aside className={styles.aside__cont}>
      <div className={styles.divide}>
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
              <li key={index} className={isActive ? styles.active : ""}>
                <Link href={`${item.path}`}>
                  <span className={styles.icon}> {item.icon}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
          {(show1 || show2) && (
            <li>
              <DoubleButton />
            </li>
          )}
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
