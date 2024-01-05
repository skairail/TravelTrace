import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <NavLink to="/">
      <div className={styles.container}>
        <img src="/icon.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.logoText}>TravelTrace</h1>
      </div>
    </NavLink>
  );
}

export default Logo;
