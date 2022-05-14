import React from "react";
import image from "../assets/footer.png";
import { styles } from "../styles";
const Footer = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className="w-full mt-24  ">
        <img src={image} alt="hsdjs" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default Footer;
