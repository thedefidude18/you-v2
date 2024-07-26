import React, { useContext, useEffect, useState } from "react";
import styles from "./DrobStyle.module.css";
import { sharedState } from "@/app/layout";
import { useAccount } from "wagmi";
import { contriTokenLogos, contriTokens } from "@/utils/constant";
function DropDown() {
  const stateRecived = useContext(sharedState);
  const { contriToken, setContriToken } = stateRecived;

  const { chainId } = useAccount();
  const [active, setActive] = useState(false);

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (chainId) {
      setContriToken(contriTokens[chainId][0]);
      setTokens(contriTokens[chainId]);
    }
  }, [chainId])
  return (
    <div className={styles.filter__btn__cont}>
      <button onClick={() => setActive(!active)}>
        <img className={styles.tokenLogo} src={contriTokenLogos[contriToken?.name]} alt="" /> <img src="/svgs/Arrow.svg" />
      </button>
      <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
        <ul>
          {
            tokens.map((token, index) => (
              <li key={index}>
                <p
                  onClick={() => {
                    setContriToken(token);
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
