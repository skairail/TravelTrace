import { Outlet } from "react-router-dom";

import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
