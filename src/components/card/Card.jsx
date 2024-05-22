import { DateFormat } from "../DateFormat";
import styles from "./Card.module.scss";

export const Card = (props) => {
  const { posts } = props;
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <img className={styles.img} src={post.thumbnail.url} alt="" />
          {DateFormat(post.publishedAt)}
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.category.map((post) => post.name)}</p>
        </li>
      ))}
    </ul>
  );
};
