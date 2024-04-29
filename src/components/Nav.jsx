import { useState, useEffect } from "react";
import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navIsOpen]);

  // 最初に考えた配列　リンクをどうするかで下の配列に変更
  // const linkPages = ["HOME", "ABOUT", "SERVICE", "BLOG", "WORKS", "CONTACT"];
  const linkPages = [
    {
      path: "/",
      pageName: "HOME",
    },
    {
      path: "/about",
      pageName: "ABOUT",
    },
    {
      path: "/service",
      pageName: "SERVICE",
    },
    {
      path: "/blog",
      pageName: "BLOG",
    },
    {
      path: "/works",
      pageName: "WORKS",
    },
    {
      path: "/contact",
      pageName: "CONTACT",
    },
    
  ];
  console.log(linkPages);
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button
        className={styles.menuButton}
        onClick={toggleNav}
        aria-label="menu"
      >
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.lists}>
        {linkPages.map((page) => (
          <li key={page.pageName}>
            <Link onClick={closeNav} to={page.path}>{page.pageName}</Link>
          </li>
        ))}
        {/* <li className={styles.list}>
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
        </li> */}
      </ul>
    </nav>
  );
};
