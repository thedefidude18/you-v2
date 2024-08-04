import React from 'react'
import styles from "../qfPageComponent/qf.module.css"
const Card = () => {
    const data =[
        {
            title:"2,000",
            subTitle:"Total Matching Pools"
        },
        {
            title:"$500,000 USDT",
            subTitle:"Total Contributions"
        },
        {
            title:"20,000",
            subTitle:"Total Contributors"
        },
    ]
  return (
    <div>
     <div className={styles.cardContainer}>
     {data.map((item)=>( <div className={styles.card}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.subtitle}>{item.subTitle}</div>
      </div>))}
     
    </div> 
    </div>
  )
}

export default Card
