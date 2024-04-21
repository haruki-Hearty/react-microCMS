import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.menuButton} onClick={toggleNav}>menu</button>
      <ul className={styles.lists}>
          <li className={styles.list}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.list}>
            <Link to="/ABOUT">ABOUT</Link>
          </li>
          <li className={styles.list}>
            <Link to="/SERVICE">SERVICE</Link>
          </li>
          <li className={styles.list}>
            <Link to="/BLOG">BLOG</Link>
          </li>
          <li className={styles.list}>
            <Link to="/WORKS">WORKS</Link>
          </li>
          <li className={styles.list}>
            <Link to="/CONTACT">CONTACT</Link>
          </li>
        </ul>
    </nav>
  )
}
