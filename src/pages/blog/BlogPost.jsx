import { Container } from "../../components/container/Container";
import { useBlogPost } from "../../hooks/useBlogPost";
// import { useParams } from "react-router-dom";
import { formatYYYYMMDD } from "../../lib/dateFormatter";
import styles from "./BlogPost.module.scss";
import { Category } from "../../components/category/Category";
const BlogPost = () => {
  const { post, error } = useBlogPost();
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <Container>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.category}>
            <span className={styles.date}>
              {formatYYYYMMDD(post.publishedAt)}
            </span>
            {post.category.map((post) => {
              return <Category key={post.id} name={post.name} />;
            })}
          </div>
          <img className={styles.img} src={post.thumbnail.url} alt="" />
          <div
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </Container>
      )}
    </>
  );
};

export default BlogPost;
