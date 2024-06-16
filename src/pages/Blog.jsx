import { useBlogPosts } from "../hooks/useBlogPosts";
import { BlogCard } from "../components/card/BlogCard";
import styles from "../styles/Blog.module.scss";

const Blog = () => {
  const { blogs } = useBlogPosts();

  return (
    <>
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
