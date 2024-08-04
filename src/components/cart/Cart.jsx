

import { ArrowDownward, ArrowDownwardTwoTone, ArrowDropDown, Delete, KeyboardArrowDown } from '@mui/icons-material';
import styles from './cart.module.css';
const Cart = () => {

    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.chainName}>
          <span className={styles.optimismIcon}> <img
              src="/pro3.png" 
              alt="Game Icon"
              className={styles.image1}
            /></span> 
          Optimism (3)
        </div>
        <div className={styles.amountInputWrapper}>
          Amount
          <input type="text" className={styles.amountInput} />
          <div className={styles.waletContainer}>
          <img
              src="/pro2.jpg" 
              alt="Game Icon"
              className={styles.image1}
            />
            <span>Dal</span>
            <KeyboardArrowDown />
          </div>
          <span className={styles.applyButton}>Apply to all</span>
        </div>
      </div>
      <div className={styles.container1}>
      <div className={styles.items}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={styles.item}>
            <img
              src="/pro1.png" 
              alt="Game Icon"
              className={styles.image}
            />
            <div className={styles.details}>
              <h2 className={styles.title}>GAMEION</h2>
              <p className={styles.description}>
                Full-scale Blockchain Gaming Ecosystem for IGOS & NFT TOKEN STAKE
              </p>
            </div>
            <div className={styles.donation}>
              <input type="text" className={styles.donationInput} />
              <div className={styles.price}>Dal $100</div>
              <button className={styles.deleteButton}><Delete sx={{color:"#000 "}}/></button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summaryContainer}>
      <h2 className={styles.summaryTitle}>Summary</h2>
      <div className={styles.contributionSection}>
        <div className={styles.networkInfo}>

        <span>Your contribution on</span>
        <span className={styles.contributionAmount}>Dal $0</span>
        </div>
        <div className={styles.networkInfo}>
            <div style={{display:"flex",alignItems:"center"}}>

            <img
              src="/pro2.jpg" 
              alt="Game Icon"
              className={styles.image1}
            />
          <span className={styles.networkName}>Optimism</span>
            </div>
          <span className={styles.contributionAmount}>Dal $0</span>
        </div>
      </div>
      <div className={styles.totalSection}>
        <span>Total</span>
        <span>$100</span>
      </div>
      <button className={styles.submitButton}>Submit</button>
    </div>
    </div>
      
      <p className={styles.note}>
        Donation to each project must be valued at 1USD or more to be eligible for matching.
      </p>
    </div>
  );
};

export default Cart;
