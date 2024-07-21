import { useBlogPosts } from "../../hooks/useBlogPosts";
import { useParams } from 'react-router-dom';
const BlogPost = () => {
  const { blogs, error } = useBlogPosts();
  const { id } = useParams();
  const post = blogs.find( post => post.id === id);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // 該当するポストがない場合の処理
  if (!post) {
    return <div>記事がありません</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
    </>
  )
}

export default BlogPost;
