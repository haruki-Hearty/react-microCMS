import styles from "./KeyVisual.module.scss";

export const KeyVisual = (props) => {
  const { title, subTitle, img, top = false } = props;
  return (
    <>
      {top ? (
        <div className={styles.inner}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.copyInner}>
            <h2
              className={styles.copy}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
        </div>
      ) : (
        <div className={styles.inner}>
          <img className={styles.lowerImg} src={img} alt="" />
          <div className={styles.titleInner}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.subTitle}>{subTitle}</span>
          </div>
        </div>
      )}
    </>
  );
};
