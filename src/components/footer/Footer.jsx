import { GithubIconSvg, InstaIconSvg, XIconSvg } from "../svg/SocialSvg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  const LINK_LIST = [
    {
      url: "https://github.com/haruki-Hearty",
      icon: <GithubIconSvg />,
    },
    {
      url: "https://github.com/haruki-Hearty",
      icon: <InstaIconSvg />,
    },
    {
      url: "https://github.com/haruki-Hearty",
      icon: <XIconSvg />,
    },
  ];
  return (
    <footer className={styles.body}>
      <div className={styles.inner}>
        <Link className={styles.logo} to="/">
          Hearty plus
        </Link>
        <ul className={styles.lists}>
          {LINK_LIST.map((item, index) => {
            return (
              <li key={index} className={styles.list}>
                <Link to={item.url} target="_blank">
                  {item.icon}
                </Link>
              </li>
            );
          })}
          {/* <li className={styles.list}>
            <Link to="https://github.com/haruki-Hearty" target="_blank">
              <GithubIconSvg />
            </Link>
          </li>
          <li className={styles.list}>
            <Link to="https://www.instagram.com/" target="_blank">
              <InstaIconSvg />
            </Link>
          </li>
          <li className={styles.list}>
            <Link to="https://twitter.com/home" target="_blank">
              <XIconSvg />
            </Link>
          </li> */}
        </ul>
      </div>
      <div className={styles.copyright}>
        <small>&copy; 2024 Hearty plus </small>
      </div>
    </footer>
  );
};
