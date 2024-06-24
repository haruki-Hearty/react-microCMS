import styles from "./KeyVisual.module.scss";

export const KeyVisual = (props) => {
  const { title, subTitle, img } = props;
  return (
    <div className={styles.inner}>
      <img className={styles.lowerImg} src={img} alt="" />
      <div className={styles.titleInner}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </div>
  );
};
