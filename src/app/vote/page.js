import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import styles from './Vote.module.css'
import React from "react";
import Withdraw from "@/components/Withdraw/Withdraw";
import Voting from "@/components/Voting/Voting";

function Page() {
  const cardData = [
    {
      id: 1,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 2,
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      id: 3,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 4,
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      id: 5,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 6,
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      id: 7,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 8,
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      id: 9,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 10,
      image: "/ava2.jpg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: true,
    },
    {
      id: 11,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
    {
      id: 12,
      image: "/profile.jpeg",
      title: "GAMION",
      subTitle: "Milestone Description:",
      description:
        "Defi Promises to Revolutionize how People engage in economic activities. in the web 3 space.",
      bars: false,
    },
  ];
  return (
    <div>
      <Banner
        text="Vote for your favurite project"
        image="/svgs/RewardBanner.svg"
      />
      <div className={styles.divide__Cont}>
        <div className={styles.cards__cont}>
          {cardData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              bars={item.bars}
              id={item.id}
            />
          ))}
        </div>
        <div>
          <Withdraw />
          <Voting />
        </div>
      </div>
    </div>
  );
}

export default Page;
