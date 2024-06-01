import { BlogCard } from "../components/card/BlogCard";
import { WorkCard } from "../components/card/WorkCard";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss"

const Home = (props) => {
  const { posts, works } = props;
  return (
    <>
      <h2>ホーム</h2>
      <SectionTitle japanese="紹介" english="ABOUT" />
      <div className={styles.cardInner}>
        <BlogCard posts={posts} />
        
        <WorkCard works={works} />
      </div>
    </>
  );
};
export default Home;
