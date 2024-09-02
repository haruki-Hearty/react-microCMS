import { BlogCard } from "../components/card/BlogCard";
import { WorkCard } from "../components/card/WorkCard";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";
import styles from "../styles/Home.module.scss";
import { useWorkPosts } from "../hooks/useWorkPosts";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { TopKeyVisual } from "../components/KeyVisual/TopKeyVisual";
import { Contact } from "../components/contact/Contact";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { latestWorks } = useWorkPosts();
  const { latestBlogs, error } = useBlogPosts();

  return (
    <>
      <TopKeyVisual />
      <div className={styles.titleInner}>
        <SectionTitle japanese="紹介" english="ABOUT" />
      </div>
      <div className={styles.cardInner}>
        {error ? (
          <div>{error}</div>
        ) : (
          <ul className={styles.cards}>
            {latestBlogs.map((post) => (
              <li key={post.id} className={styles.card}>
                <Link to={`/blog/${post.id}`} className={styles.link}>
                  <BlogCard post={post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
        <ul className={styles.cards}>
          {latestWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ul>
      </div>
      <Contact />
    </>
  );
};
export default Home;
