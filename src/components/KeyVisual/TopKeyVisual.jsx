import styles from "./TopKeyVisual.module.scss";

export const TopKeyVisual = () => {
  return (
    <div className={styles.inner}>
      <img className={styles.img} src="./key_visual.jpg" alt="" />
      <div className={styles.copyInner}>
        <h2 className={styles.copy}>心を込めた誠実な対応で、<br />理想のウェブサイトを実現します。</h2>
      </div>
    </div>
  );
};
