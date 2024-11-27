import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
