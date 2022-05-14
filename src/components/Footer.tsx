import React from "react";
import image from "../assets/footer.png";
import { styles } from "../styles";
const Footer = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className="w-10/12 mb-4 ">
        <img src={image} alt="hsdjs" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default Footer;
