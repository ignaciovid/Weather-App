import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../Navbar/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={styles.containerNav}>
      <Link to="/" className={styles.navlink}>
        <h3>Weather App</h3>
      </Link>
      <Link to="/about" className={styles.navlink}>
        <h3>About</h3>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
