import { Link } from "react-router-dom";
import styles from "../styles/LinkButton.module.scss";

export const LinkButton = (props) => {
  return (
    <Link className={styles.link} to={props.link}>
      {props.title}
    </Link>
  );
};
