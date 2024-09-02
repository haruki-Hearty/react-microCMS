import { useWorkPosts } from "../hooks/useWorkPosts";
import { WorkCard } from "../components/card/WorkCard";
import styles from "../styles/Works.module.scss";
import { KeyVisual } from "../components/KeyVisual/KeyVisual";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";
import { ContainerLarge } from "../components/container/ContainerLarge";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";

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
        <div className={styles.titleInner}>
          <SectionTitle japanese="制作実績一覧" english="WORKS" />
        </div>
        <div className={styles.cardInner}>
          <ul className={styles.cards}>
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
