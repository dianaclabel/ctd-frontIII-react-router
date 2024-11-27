import React from "react";
import Layout from "../components/Layout";
import styles from "./css/contacto.module.css";

const Contacto = () => {
  return (
    <Layout>
      <div className={styles.boxContacto}>
        <h2 className={styles.title}>¿Queres saber mas de nosotros?</h2>
        <h2 className={styles.title}>
          ¿Sos revendedo y queres conocer precios mayoristas?
        </h2>
        <p className={styles.text}>No dudes en contactarnos</p>
        <p className={styles.text}>
          <span>Email:</span> punkapi@beers.com
        </p>
        <p className={styles.text}>
          <span>Telefono:</span> 11324568
        </p>
      </div>
    </Layout>
  );
};

export default Contacto;
