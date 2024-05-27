import styles from "./Card.module.scss";
import { formatYYYYMMDD } from "../../lib/dateFormatter";

export const Card = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.lists}>
      {posts.map((post) => (
        <li className={styles.list} key={post.id}>
          <img className={styles.img} src={post.thumbnail.url} alt="" />
          <p className={styles.date}>{formatYYYYMMDD(post.publishedAt)}</p>
          <h3 className={styles.title}>{post.title}</h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className={styles.category}>
            {post.category.map((post) => {
              return <span className={styles.categoryItem}>{post.name}</span>;
            })}
          </div>
        </li>
      ))}
    </ul>
  );
};
