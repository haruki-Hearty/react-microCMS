import styles from "./BlogCard.module.scss";
import { formatYYYYMMDD } from "../../lib/dateFormatter";
import { truncateText } from "../../lib/truncateText";

export const BlogCard = (props) => {
  const { posts } = props;
  //3件表示するように
  const latestBlog = [...posts].slice(0, 3);

  return (
    <ul className={styles.lists}>
      {latestBlog.map((post) => (
        <li className={styles.list} key={post.id}>
          <img className={styles.img} src={post.thumbnail.url} alt="" />
          <p className={styles.date}>{formatYYYYMMDD(post.publishedAt)}</p>
          <h3 className={styles.title}>{post.title}</h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: truncateText(post.content, 40) }}
          ></div>
          <div className={styles.category}>
            {post.category.map((post) => {
              return <span key={post.id} className={styles.categoryItem}>{post.name}</span>;
            })}
          </div>
        </li>
      ))}
    </ul>
  );
};
