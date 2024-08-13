import { useBlogPosts } from "../../hooks/useBlogPosts";
import { BlogCard } from "../../components/card/BlogCard";
import styles from "./Blog.module.scss";
import { KeyVisual } from "../../components/KeyVisual/KeyVisual";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { Container } from "../../components/container/Container";

const Blog = () => {
  const { blogs, error } = useBlogPosts();
  const pathNames = [
    {
      title: "ブログ",
    },
  ]
  return (
    <>
      <KeyVisual title="BLOG" subTitle="sub" img="./blog_key_visual.jpg" />
      <Container large>
        <Breadcrumb pathNames={pathNames} />
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
      </Container>
    </>
  );
};

export default Blog;
