import { BlogCard } from "../components/card/BlogCard";
import { WorkCard } from "../components/card/WorkCard";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss";
import { useWorkPosts } from "../hooks/useWorkPosts";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { TopKeyVisual } from "../components/KeyVisual/TopKeyVisual";


const Home = (props) => {
  const { latestWorks } = useWorkPosts();
  const { latestBlogs } = useBlogPosts();

  return (
    <>
      <TopKeyVisual title="心を込めた誠実な対応で、<br>理想のウェブサイトを実現します。" img="./key_visual.jpg" />
      <SectionTitle japanese="紹介" english="ABOUT" />
      <div className={styles.cardInner}>
        <ul className={styles.Cards}>
          {latestBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
        <ul className={styles.Cards}>
          {latestWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
