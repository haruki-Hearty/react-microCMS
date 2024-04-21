import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };
  
  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 768px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.menuButton} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">menu</span>
      </button>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/">
            HOME
          </Link>
        </li>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/ABOUT">
            ABOUT
          </Link>
        </li>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/SERVICE">
            SERVICE
          </Link>
        </li>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/BLOG">
            BLOG
          </Link>
        </li>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/WORKS">
            WORKS
          </Link>
        </li>
        <li className={styles.list}>
          <Link onClick={closeNav} to="/CONTACT">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
