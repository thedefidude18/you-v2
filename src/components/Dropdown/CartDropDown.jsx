import React, { useEffect, useState } from "react";
import styles from "./DrobStyle.module.css";
import { useAccount } from "wagmi";
import { contriTokenLogos, contriTokens } from "@/utils/constant";
function CartDropDown({ token, setToken }) {
  const { chainId } = useAccount();
  const [active, setActive] = useState(false);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (chainId) {
      setTokens(contriTokens[chainId]);
    }
  }, [chainId])

  return (
    <div className={styles.filter__btn__cont}>
      <button onClick={() => setActive(!active)}>
        <img className={styles.tokenLogo} src={contriTokenLogos[token.name]} alt="" /> <img src="/svgs/Arrow.svg" />
      </button>
      <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
        <ul>
          {
            tokens.map((token, index) => (
              <li key={index}>
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

export default CartDropDown;
