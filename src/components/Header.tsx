import React from "react";
import { styles } from "../styles";
import logo from "../assets/logo.png";



const links = [
  "Home",
  "Services",
  "Planning Group",
  "Departments",
  "About Us",
  "News & Events",
  "Donations",
];
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerParker}>
        <div className={styles.headerLogoContainer}>
          <img src={logo} className={styles.headerLogo} alt="logo" />
        </div>
        <div className={styles.headerNavContainer}>
          {links.map((item, index) => {
            return (
              <a className={styles.headerLink} key={index} href="#">
                {item}
              </a>
            );
          })}
        </div>
        <div className={styles.headerBtnContainer}>
          <button className={styles.headerBtn}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
