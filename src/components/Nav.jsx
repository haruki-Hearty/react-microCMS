import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <button className={styles.menuButton}>menu</button>
      <ul className={styles.lists}>
          <li className={styles.list}>
            <Link to="/">TOP</Link>
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
