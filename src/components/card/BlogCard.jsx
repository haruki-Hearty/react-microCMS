import styles from "./BlogCard.module.scss";
import { formatYYYYMMDD } from "../../lib/dateFormatter";

export const BlogCard = (props) => {
  const { post } = props;

  return (
    <>
      <img className={styles.img} src={post.thumbnail.url} alt="" />
      <p className={styles.date}>{formatYYYYMMDD(post.publishedAt)}</p>
      <h3 className={styles.title}>{post.title}</h3>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className={styles.category}>
        {post.category.map((post) => {
          return (
            <span key={post.id} className={styles.categoryItem}>
              {post.name}
            </span>
          );
        })}
      </div>
    </>
  );
};
