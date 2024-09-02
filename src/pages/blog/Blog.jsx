import { useBlogPosts } from "../../hooks/useBlogPosts";
import { BlogCard } from "../../components/card/BlogCard";
import styles from "./Blog.module.scss";
import { KeyVisual } from "../../components/KeyVisual/KeyVisual";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { ContainerLarge } from "../../components/container/ContainerLarge";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle";

const Blog = () => {
  const { blogs, error } = useBlogPosts();
  const pathNames = [
    {
      title: "ブログ",
    },
  ];
  return (
    <>
      <KeyVisual title="BLOG" subTitle="sub" img="./blog_key_visual.jpg" />
      <ContainerLarge>
        <Breadcrumb pathNames={pathNames} />
        <div className={styles.titleInner}>
          <SectionTitle japanese="ブログ一覧" english="BLOG" />
        </div>
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
      </ContainerLarge>
    </>
  );
};

export default Blog;
