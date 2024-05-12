import styles from "./SectionTitle.module.scss";

export const SectionTitle = (props) => {
  return(
    <>
      <h2 className={styles.title} data-title={props.english}>
        {props.japanese}
      </h2>
    </>
  )
}
