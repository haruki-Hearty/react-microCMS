import { useWorkPosts } from "../hooks/useWorkPosts";
import { WorkCard } from "../components/card/WorkCard";
import styles from "../styles/Blog.module.scss";
import { KeyVisual } from "../components/KeyVisual/KeyVisual";

const Works = () => {
  const { works } = useWorkPosts();

  return (
    <>
      <KeyVisual title="WORKS" subTitle="sub" img="./worksKeyVisual.jpg" />
      <h2>制作実績一覧</h2>
      <div className={styles.cardInner}>
        <ul className={styles.Cards}>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Works;
