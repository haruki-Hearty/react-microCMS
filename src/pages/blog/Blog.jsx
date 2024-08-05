import { useBlogPosts } from "../../hooks/useBlogPosts";
import { BlogCard } from "../../components/card/BlogCard";
import styles from "./Blog.module.scss";
import { KeyVisual } from "../../components/KeyVisual/KeyVisual";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogs, error } = useBlogPosts();
  return (
    <>
      <KeyVisual title="BLOG" subTitle="sub" img="./blog_key_visual.jpg" />
      <h2>ブログ一覧</h2>
      <div className={styles.cardInner}>
        {error ? (
          <div>{error}</div>
        ) : (
          <ul className={styles.cards}>
            {blogs.map((post) => (
              <li key={post.id} className={styles.card}>
                <Link to={`/blog/${post.id}`} className={styles.link}>
                  <BlogCard post={post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Blog;
