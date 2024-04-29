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
          <li className={styles.list} key={page.pageName}>
            <Link onClick={closeNav} to={page.path}>{page.pageName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
