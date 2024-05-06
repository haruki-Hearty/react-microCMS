import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link to='/'>
            ロゴ画像
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
