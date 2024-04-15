import { Link } from "react-router-dom";
import styles from "../styles/Button.module.css";

export const Button = (props) => {
  return (
    <Link className={styles.link} to={props.link}>
      {props.title}
    </Link>
  );
};
