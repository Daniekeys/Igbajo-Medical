import React, { FC, ReactElement } from "react";
import { styles } from "../styles";
import { news } from "../helpers/medical";
import { ImArrowRight2 } from "react-icons/im";
interface PropsState {
  
  title: string;
  doctor: string;
  image:string;
  text?: string;
}

const Card: FC<PropsState> = ({  title, image, doctor, text }) => {
  return (
    <div className={styles.newsImgContainer}
    style={{
      position:"relative"
    }}
    
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          width: "100%",
          overflowX: "hidden",
          position: "absolute",
          top:0,
          left:0,
         
        }}
      >
        {/* <img src={image} alt={title} className={styles.newsImg} /> */}
      </div>
      <div className={styles.newsContent}>
        <div className={styles.news1}>
          <h1 className={styles.newsTitle}>{title}</h1>
          <p className={styles.newsText}>{doctor}</p>
        </div>
        <div className={styles.news2}>
          <p className={styles.newsText}>{text}</p>
        </div>
        <div className={styles.news3}>
          <p>Read More</p>
          <ImArrowRight2 />
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className={styles.whiteParker}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}> News & Events</h1>
       
        </div>
        <div className={styles.meetCard}>
          {news.map((item, index) => {
            return <Card key={index}  title={item.title} image={item.image} text={item.text} doctor={item.doctor} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
