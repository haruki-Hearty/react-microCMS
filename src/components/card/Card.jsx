import { ConvertText } from "../ConvertText";
import { DateFormat } from "../DateFormat";
import styles from "./Card.module.scss";

export const Card = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <img className={styles.img} src={post.thumbnail.url} alt="" />
          <p>{<DateFormat date={post.publishedAt} />}</p>
          <h3>{post.title}</h3>
          {<ConvertText contentHTML={post.content} />}
          <p>{post.category.map((post) => post.name)}</p>
        </li>
      ))}
    </ul>
  );
};
