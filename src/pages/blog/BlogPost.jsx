import { Container } from "../../components/container/Container";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { useParams } from "react-router-dom";
import { formatYYYYMMDD } from "../../lib/dateFormatter";
import styles from "../../styles/pages/BlogPost.module.scss";
const BlogPost = () => {
  const { blogs, error } = useBlogPosts();
  const { id } = useParams();
  const post = blogs.find((post) => post.id === id);
  console.log(blogs)
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // 該当するポストがない場合の処理
  if (!post) {
    return <div>記事がありません</div>;
  }

  return (
    <>
      <Container>
        <h1 className={styles.title}>{post.title}</h1>
        <span>{formatYYYYMMDD(post.publishedAt)}</span>
        {post.category.map((post) => {
          return (
            <span key={post.id} className={styles.categoryItem}>
              {post.name}
            </span>
          );
        })}
        <img className={styles.img} src={post.thumbnail.url} alt="" />
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </Container>
    </>
  );
};

export default BlogPost;
