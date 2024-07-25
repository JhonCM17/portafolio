import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerda de Mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Estudiante de Ingeniería de Sistemas</h3>
              <p>
                Actualmente estoy estudiando Ingeniería de Sistemas en la
                Universidad Privada del Norte.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Analista de Datos</h3>
              <p>
              Me apasiona el análisis de datos, he trabajado en proyectos de
              visualización de datos, automatización de procesos y gestión de grandes volúmenes de datos.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Programación Web</h3>
              <p>
                Tengo experiencia basica en desarrollo web, he trabajado en proyetos de sitios web como ecommerce y blogs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
