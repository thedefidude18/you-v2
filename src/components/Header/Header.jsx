import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { sharedState } from "@/app/layout";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Aside from "../Aside/Aside";
function Header() {
  const stateRecived = useContext(sharedState);
  const { stateStep } = stateRecived;
  const [ open,setOpen] = useState(false)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <header className={styles.header__cont}>
      <div className={styles.menubar}>

      <Menu style={{fontSize:"30px"}} onClick={()=>setOpen(true)}/>
      </div>

      <div className={styles.input__cont}>
        
        <input
          type="text"
          placeholder="Search for projects"
          suppressHydrationWarning={true}
        />
        <img
          className={styles.icon__search}
          src="/svgs/Search.svg"
          alt="Search"
        />
      </div>
      <div className={styles.divide}>
      <Link className={stateStep > 0 ? styles.cart : ""} href={"/cart"} >
          <img src="/svgs/Cart.svg" alt="Cart" />
        </Link>
        {/* {stateStep === 0 ? (
          <>
            <div className="Notification">
              <img src="/svgs/Notifications.svg" alt="notifications" />
            </div>
            <div className="flex">
              <img className={styles.avatar} src="/profile.jpeg" alt="user" />
              <img src="/svgs/Arrow.svg" alt="arrow" />
            </div>
          </>
        ) 
        : 
        ( */}
          <div className={styles.buttonGroup}>
            <p className={styles.leftBtn}>
              <img src="./svgs/qf/Star.svg" alt="star" />
              Star
            </p>
            <p className={styles.rightBtn}>1000</p>
          </div>
        {/* )} */}
        <div className="wallet">
          <ConnectButton />
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{width:"50%"}}>
 <Aside setOpen={setOpen}/>
</Drawer>
    </header>
  );
}

export default Header;
