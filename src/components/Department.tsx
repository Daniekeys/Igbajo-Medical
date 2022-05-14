import React, { FC, ReactElement } from "react";
import { styles } from "../styles";
import { departments } from "../helpers/medical";

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

const Departments = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className={styles.whiteParker}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Departments</h1>
          <p className={styles.headerStory}>
            Igbajo Medical center collaborates and consistently provide medical
            services at subsidised rates for the people of Igbajo, associated
            villages and neighbouring towns and cities for improved healthcare
            in these departments
          </p>
        </div>
        <div className={styles.cardContainer}>
          {departments.map((item, index) => {
            return (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
              
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Departments;
