import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { sharedState } from "@/app/layout";
function Header() {
  const stateRecived = useContext(sharedState);
  const { stateStep } = stateRecived;
  return (
    <header className={styles.header__cont}>
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
        <div className={stateStep > 0 ? styles.cart : ""}>
          <img src="/svgs/Cart.svg" alt="Cart" />
        </div>
        {stateStep === 0 ? (
          <>
            <div className="Notification">
              <img src="/svgs/Notifications.svg" alt="notifications" />
            </div>
            <div className="flex">
              <img className={styles.avatar} src="/profile.jpeg" alt="user" />
              <img src="/svgs/Arrow.svg" alt="arrow" />
            </div>
          </>
        ) : (
          <p className={styles.buttonGroup}>
            <p className={styles.leftBtn}>
              <img src="./svgs/qf/Star.svg" alt="star" />
              Star
            </p>
            <p className={styles.rightBtn}>1000</p>
          </p>
        )}
        <div className="wallet">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
