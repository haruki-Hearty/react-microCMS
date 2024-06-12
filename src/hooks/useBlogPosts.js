import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/microcms/client";

/**
 * コンポーネントツリー全体でグローバルな状態やデータを共有するための仕組みです。
 * これを使うと、親コンポーネントから深い階層の子コンポーネントに対してプロパティを直接渡さなくても、
 * データを共有できます。
 * 上書きされるリスクがある
 */
// PostsContextを作成し、ReactコンテキストAPIを使用してグローバル状態を提供します。
const BlogPostsContext = createContext();

// コンテキストのプロバイダーコンポーネント
/**
 * PostsProviderコンポーネントは、子コンポーネント（children）にデータを提供するために使用されます。
 * useStateを使用して、postsとworksという状態を管理。
 * useEffectを使用して、コンポーネントがマウントされたときにデータを非同期に取得。
 */ 
  

export const BlogProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);

  // ブログ用データ取得
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


  /**
   * PostsContext.Provider>のvalueプロパティは、コンテキストを使用するコンポーネントに渡すデータを指定する場所です。
   * このvalueプロパティに設定されたデータは、コンテキストツリー内のすべての子コンポーネントで利用できます
   * コンテキストツリー内とは？ childrenで利用できるという解釈であっている？
   */
  return (
    <BlogPostsContext.Provider value={{ blogs }}>
      {children}
    </BlogPostsContext.Provider>
  );
};

/**
 * コンテキストを利用するためのカスタムフック
 * カスタムフックにはuseをつける
 * ファイル名もuseをつける
 * フォルダを別に作る
 * postsをblogsに
 * blogsとworksを分ける
 * usePostsフックは、useContext(PostsContext)を内部で使用して、PostsContextからpostsとworksの値を取得します。
 */
export const useBlogPosts = () => {
  return useContext(BlogPostsContext);
};
