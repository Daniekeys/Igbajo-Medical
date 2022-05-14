import React, { FC, ReactElement } from 'react'
import {styles} from '../styles'
import {medical} from '../helpers/medical'

interface Props {
    icon: ReactElement;
    title: string;
    text: string;
}

const Card: FC<Props> = ({icon , title, text}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardIcon}>
                {icon}
        </div>
        <h1 className={styles.cardTitle}>
            {title}
        </h1>
        <p className={styles.cardText}>
            {text}
        </p>
        </div>
    )
}

const MedicalService = () => {
  return (
    <div className={styles.whiteContainer}>
      <div className={styles.whiteParker}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Our Medical Services</h1>
          <p className={styles.headerStory}>
            Igbajo Medical center collaborates and consistently provide medical
            services at subsidised rates for the people of Igbajo, associated
            villages and neighbouring towns and cities for improved healthcare
          </p>
        </div>
        <div className={styles.cardContainer}>
            {medical.map((item, index) => {
                return (
                    <Card key={index} icon={item.icon} title={item.title} text={item.text} />
                )
            })}
      </div>
      </div>
    </div>
  );
}

export default MedicalService