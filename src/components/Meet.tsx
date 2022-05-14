import React, { FC, ReactElement } from "react";
import { styles } from "../styles";
import { departments } from "../helpers/medical";
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';

interface Props {
  icon: ReactElement;
  title: string;
  text?: string;
}

const Card: FC<Props> = ({ icon, title}) => {
  return (
    <div className={styles.deptCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h1 className={styles.cardTitle}>{title}</h1>
     
    </div>
  );
};

const Meet = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className={styles.whiteParker}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Meet our Planning Group</h1>
          <p className={styles.headerStory}>
            Igbajo Medical center collaborates and consistently provide medical
            services at subsidised rates for the people of Igbajo, associated
            villages and neighbouring towns and cities for improved healthcare
            with these members in the planning group
          </p>
        </div>
        <div className={styles.meetCard}>
          <div className={styles.meetImgContainer}>
            <img src={frame1} alt="frame1" className={styles.meetImg} />
            <p className={styles.member}>Member 1</p>
          </div>
          <div className={styles.meetImgContainer}>
            <img src={frame2} alt="frame2" className={styles.meetImg} />
            <p className={styles.member}>Member 2</p>
          </div>
          <div className={styles.meetImgContainer}>
            <img src={frame3} alt="frame3" className={styles.meetImg} />
            <p className={styles.member}>Member 3</p>
          </div>
        </div>
        <div className={styles.btnCenter}>
          <button className={styles.aboutBtn}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Meet;
