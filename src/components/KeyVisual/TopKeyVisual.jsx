import styles from "./TopKeyVisual.module.scss";

export const TopKeyVisual = (props) => {
  const { title, img } = props;
  return (
    <div className={styles.inner}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.copyInner}>
        <h2
          className={styles.copy}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      </div>
    </div>
  );
};
