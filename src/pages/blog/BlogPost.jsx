import { Container } from "../../components/container/Container";
import { useBlogPost } from "../../hooks/useBlogPost";
import { formatYYYYMMDD } from "../../lib/dateFormatter";
import styles from "./BlogPost.module.scss";
import { Category } from "../../components/category/Category";
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";

const BlogPost = () => {
  const location = useLocation();
  console.log(location)
  const { post, error } = useBlogPost();
  return (
    <>
      <Container>
      <Breadcrumb />
        {error ? (
          <div>{error}</div>
        ) : !post ? (
          <div>記事を読み込み中...</div>
        ) : (
          <div>
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
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogPost;
