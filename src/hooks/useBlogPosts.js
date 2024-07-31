import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/microcms/client";

const BlogPostsContext = createContext();
//記事を全権取得
export const BlogProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);
  const latestBlogs = [...blogs].slice(0, 3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get({
          endpoint: "blog",
          queries: { orders: "-publishedAt" },
        });
        setBlogs(response.contents);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BlogPostsContext.Provider value={{ blogs, latestBlogs }}>
      {children}
    </BlogPostsContext.Provider>
  );
};

export const useBlogPosts = () => {
  return useContext(BlogPostsContext);
};
