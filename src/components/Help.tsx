import React from 'react'
import image from '../assets/help.png'
import { styles } from "../styles";
const Help = () => {
  return (
    <div className={styles.whiteContainer}>
     
        <div className="w-11/12 mb-4 ">

          <img src={image} alt="hsdjs" className="h-auto w-full" />
        </div>
      </div>
    
  );
}

export default Help