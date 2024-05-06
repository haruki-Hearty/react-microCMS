import { GithubIconSvg, InstaIconSvg, XIconSvg } from "../svg/SocialSvg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.body}>
      <div className={styles.inner}>
        <Link className={styles.logo} to="/">Hearty plus</Link>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <GithubIconSvg />
          </li>
          <li className={styles.list}>
            <InstaIconSvg />
          </li>
          <li className={styles.list}>
            <XIconSvg />
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <small>©️ 2024 Hearty plus </small>
      </div>
    </footer>
  );
};
