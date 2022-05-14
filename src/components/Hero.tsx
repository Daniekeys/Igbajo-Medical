import React from "react";
import { styles } from "../styles";
import background from "../assets/background-img.png";
import { FaHeartbeat } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className={styles.heroParent}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.hero1}>
            <FaHeartbeat className={styles.heroIcon} />
            <h1 className={styles.heroStar}>Best community medical hub</h1>
          </div>
          <div className={styles.hero2}>
            <h1 className={styles.heroTitle}>
              We provide you the best doctors for your health
            </h1>
            <p className={styles.heroText}>
              We collaborate and consistently provide medical services at
              subsidised rates for the people of Igbajo, associated villages and
              neighbouring towns and cities for improved healthcare
            </p>
            <div className={styles.heroBtnContainer}>
                <button className={styles.btnFull}>
                    Get Appointment
                </button>
                <button className={styles.btnOutline}>
                    Contact Us
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
