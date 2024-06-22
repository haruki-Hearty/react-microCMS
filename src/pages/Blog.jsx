import { useBlogPosts } from "../hooks/useBlogPosts";
import { BlogCard } from "../components/card/BlogCard";
import styles from "../styles/Blog.module.scss";
import { KeyVisual } from "../components/KeyVisual/KeyVisual";

const Blog = () => {
  const { blogs } = useBlogPosts();

  return (
    <>
      <KeyVisual title="BLOG" subTitle="sub" img="./blogKeyVisual.jpg" />
      <h2>ブログ一覧</h2>
      <div className={styles.cardInner}>
        <ul className={styles.Cards}>
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;
