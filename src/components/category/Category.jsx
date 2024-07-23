import styles from "./Category.module.scss";

export const Category = (props) => {
  const {children} = props;
  return (
    <span className={styles.body}>
      Next
    </span>
  )
}
