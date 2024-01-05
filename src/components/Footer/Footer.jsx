import React from "react";
// import styles from "./Sidebar/Sidebar.module.css";
import styles from "../Sidebar/Sidebar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by TravelTrace Inc.
      </p>
    </footer>
  );
}
