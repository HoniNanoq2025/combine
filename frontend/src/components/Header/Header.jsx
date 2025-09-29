import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.desktopNav}>
        <NavLink to="/">Add Items</NavLink>
        <NavLink to="/items">Items</NavLink>
      </nav>
    </div>
  );
}
