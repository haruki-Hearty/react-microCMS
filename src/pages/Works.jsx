import { useWorkPosts } from "../hooks/useWorkPosts";
import { WorkCard } from "../components/card/WorkCard";
import styles from "../styles/Blog.module.scss";
import { KeyVisual } from "../components/KeyVisual/KeyVisual";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";
import { ContainerLarge } from "../components/container/ContainerLarge";

const Works = () => {
  const { works } = useWorkPosts();
  const pathNames = [
    {
      title: "制作実績一覧",
    },
  ];
  return (
    <>
      <KeyVisual title="WORKS" subTitle="sub" img="./works_key_visual.jpg" />
      <ContainerLarge>
        <Breadcrumb pathNames={pathNames} />
        <h2>制作実績一覧</h2>
        <div className={styles.cardInner}>
          <ul className={styles.Cards}>
            {works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </ul>
        </div>
      </ContainerLarge>
    </>
  );
};

export default Works;
