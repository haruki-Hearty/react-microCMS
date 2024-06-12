import { BlogCard } from "../components/card/BlogCard";
import { WorkCard } from "../components/card/WorkCard";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss";
import { useWorkPosts } from "../hooks/useWorkPosts";
import { useBlogPosts } from "../hooks/useBlogPosts";

const Home = (props) => {
  //usePostsフックを使用して、postsとworksをコンテキストから取得。
  const { works } = useWorkPosts();
  const { blogs } = useBlogPosts();
  // const { posts, works } = props;
  const latestBlogs = [...blogs].slice(0, 3);
  const latestWorks = [...works].slice(0, 3);

  return (
    <>
      <h2>ホーム</h2>
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
