import React, { useState } from "react";
import styles from "./DrobStyle.module.css";
function DropDown() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(
    <img src="/svgs/proj/Brand1.svg" alt="" />
  );
  return (
    <div className={styles.filter__btn__cont}>
      <button onClick={() => setActive(!active)} defaultValue={value}>
        {value} <img src="/svgs/Arrow.svg" />
      </button>
      <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
        <ul>
          <li>
            <p
              onClick={() => {
                setValue(<img src="/svgs/proj/Brand1.svg" alt="" />);
                setActive(!active);
              }}
            >
              <img src="/svgs/proj/Brand1.svg" alt="" />
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setValue(<img src="/svgs/proj/Brand2.svg" alt="" />);
                setActive(!active);
              }}
            >
              <img src="/svgs/proj/Brand2.svg" alt="" />
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setValue(<img src="/svgs/proj/Brand3.svg" alt="" />);
                setActive(!active);
              }}
            >
              <img src="/svgs/proj/Brand3.svg" alt="" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
