import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            words={['Hellouda, Jhon CM']}
            loop={15}  // Repite 5 veces. Puedes ajustarlo según tu necesidad.
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className={styles.description}>
          Estudiante en Ingeniería de Sistemas | Análisis de datos | Desarrollo Web
        </p>
        <a href="mailto:jhon.cuba.1707@gmail.com" className={styles.contactBtn}>
          Contacto
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
