import { Link } from "react-router-dom";
import styles from "../styles/Button.module.scss";

export const Button = (props) => {
  return (
    <Link className={styles.link} to={props.link}>
      {props.title}
    </Link>
  );
};
