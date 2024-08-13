import { Link } from "react-router-dom";
import homeIcon from "../../assets/icon-home.svg"
import styles from "./Breadcrumb.module.scss";

export const Breadcrumb = (props) => {
  const { pathNames } = props;
  return (
    <ul className={styles.lists}>
      <li className={styles.list}>
        <Link to="/"><img className={styles.homeIcon} src={homeIcon} alt="" /></Link>
      </li>
      {pathNames.map((path,index) => {
        return (
          <li className={styles.list} key={index}>
            {path.to ? (
              <Link className={styles.link} to={path.to}>{path.title}</Link>
            ) : (
              <span>
                {path.title}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
