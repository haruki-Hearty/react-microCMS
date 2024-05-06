import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.content}>
      <Link to="/">Hearty plus</Link>
      
    </footer>
  )
}
