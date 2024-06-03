import { BlogCard } from "../components/card/BlogCard";
import { WorkCard } from "../components/card/WorkCard";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss";

const Home = (props) => {
  const { posts, works } = props;
  const latestBlog = [...posts].slice(0, 3);
  const latestWorks = [...works].slice(0, 3);

  return (
    <>
      <h2>ホーム</h2>
      <SectionTitle japanese="紹介" english="ABOUT" />
      <div className={styles.cardInner}>
        <ul className={styles.Cards}>
          {latestBlog.map((post) => (
            <BlogCard post={post} />
          ))}
        </ul>
        <ul className={styles.Cards}>
          {latestWorks.map((work) => (
            <WorkCard work={work} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Home;
