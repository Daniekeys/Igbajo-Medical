import React from 'react'
import { styles } from "../styles";
import about from '../assets/house.png';

const About = () => {
  return (
    <div className={styles.aboutParent}>
      <h1 className={styles.mainTitle}>About Us</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeft}>
          <img src={about} alt="about" className={styles.aboutImage} />
        </div>
        <div className={styles.aboutRight}>
          <p className={styles.aboutStory}>
            The Igbajo Baptist Medical Center covers about 705 square meter
            floor space which is divided into three three parts.
          </p>
          <p className={styles.aboutStory}>
            On the central wing are the waiting area, the nursing
            station/record, offices of doctors and nurses and a multipurpose
            room, the other
          </p>
          <p className={styles.aboutStory}>
            On the lest wing comprises of 2 consulting rooms , observatory room,
            equipment room and operating room.
          </p>
          <p className={styles.aboutStory}>
            On the right wing are the pharmacy, side laboratory,
            treatment/injection room and 2 call rooms.
          </p>
          <p className={styles.aboutStory}>
            With the floor plan conceptualized in the shape of a cross , a
            symbol of healing, the entire plan was concieved to be expanded into
            a bigger health facility as the need arises.
          </p>
          <button className={styles.aboutBtn}>
              Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About