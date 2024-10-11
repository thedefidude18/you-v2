import React, { useContext, useEffect, useState } from "react";
import styles from "./DrobStyle.module.css";
import { sharedState } from "@/app/layout";
import { useAccount } from "wagmi";
import { contriTokenLogos, contriTokens } from "@/utils/constant";
function DropDown({ isCart = false }) {
  const stateRecived = useContext(sharedState);
  const { contriToken, cartToken, setContriToken, setCartToken } = stateRecived;

  const { chainId } = useAccount();
  const [active, setActive] = useState(false);

  const [tokens, setTokens] = useState([]);

  const setToken = (token) => {
    if (isCart) setCartToken(token);
    else setContriToken(token);
  }

  useEffect(() => {
    if (chainId) {
      if (isCart) {
        setCartToken(contriTokens[chainId][0]);
      } else {
        setContriToken(contriTokens[chainId][0]);
      }
      setTokens(contriTokens[chainId]);
    }
  }, [chainId])
  return (
    <div className={`${styles.filter__btn__cont} w-[100%]`}>
      <button onClick={() => setActive(!active)} className="w-[100%] justify-between">
        <img className={styles.tokenLogo} src={contriTokenLogos[isCart ? cartToken?.name : contriToken?.name]} alt="" /> <img src="/svgs/Arrow.svg" />
      </button>
      <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
        <ul>
          {
            tokens.map((token, index) => (
              <li key={index}  className="my-1">
                <p
                  onClick={() => {
                    setToken(token);
                    setActive(!active);
                  }}
                >
                  <img className={styles.tokenLogo} src={contriTokenLogos[token.name]} alt="" />
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
