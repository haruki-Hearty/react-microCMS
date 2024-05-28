import { BlogCard } from "../components/card/Card";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss"

const Home = (props) => {
  const { posts } = props;
  return (
    <>
      <h2>ホーム</h2>
      <SectionTitle japanese="紹介" english="ABOUT" />
      <div className={styles.cardInner}>
        <BlogCard posts={posts} />
      </div>
    </>
  );
};
export default Home;
