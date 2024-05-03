import { useState, useEffect } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  // iosでスクロールを止めれない
  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navIsOpen]);

  const NAV_MENU = [
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
        {NAV_MENU.map((item) => (
          <li className={styles.list} key={item.pageName}>
            <Link onClick={closeNav} to={item.path}>{item.pageName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
