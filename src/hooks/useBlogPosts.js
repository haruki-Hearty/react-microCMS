import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/microcms/client";

const BlogPostsContext = createContext();
//記事を全権取得
export const BlogProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState();
  const latestBlogs = [...blogs].slice(0, 3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get({
          endpoint: "blog",
          queries: { orders: "-publishedAt" },
        });
        if (response.contents.length > 0) {
          setBlogs(response.contents);
        } else {
          setError("記事が見つかりませんでした");
        }
      } catch (error) {
        setError("記事の取得中にエラーが発生しました");
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BlogPostsContext.Provider value={{ blogs, latestBlogs, error }}>
      {children}
    </BlogPostsContext.Provider>
  );
};

export const useBlogPosts = () => {
  return useContext(BlogPostsContext);
};
