import styles from "./Category.module.scss";

export const Category = (props) => {
  const {name} = props;
  return (
    <span className={styles.body}>
      {name}
    </span>
  )
}
