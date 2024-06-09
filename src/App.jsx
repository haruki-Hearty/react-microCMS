// import React, { useState, useEffect } from "react";
// import { client } from "./lib/microcms/client";
import { LinkButton } from "./components/linkButton/LinkButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { PostsProvider } from "./lib/postContext";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [works, setWorks] = useState([]);

  // //ブログ用
  // useEffect(() => {
  //   //async キーワードは、関数を非同期関数にするために使用されます
  //   const fetchData = async () => {
  //     try {
  //       // await キーワードを使用して非同期処理の完了を待ちます。非同期関数は、必ず Promise を返します。
  //       const response = await client.get({
  //         endpoint: "blog", // 記事のエンドポイントを指定
  //         queries: { orders: "-publishedAt" },
  //       });
  //       // response.contentsはMicroCMSから受け取ったデータの配列であり、これを状態にセットすることでReactコンポーネント内でそのデータを使用できるようになります。
  //       setPosts(response.contents);
  //     } catch (error) {
  //       console.error("Error fetching titles:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // //works用
  // useEffect(() => {
  //   //async キーワードは、関数を非同期関数にするために使用されます
  //   const fetchData = async () => {
  //     try {
  //       // await キーワードを使用して非同期処理の完了を待ちます。非同期関数は、必ず Promise を返します。
  //       const response = await client.get({
  //         endpoint: "works", // 記事のエンドポイントを指定
  //         queries: { orders: "-publishedAt" },
  //       });
  //       // response.contentsはMicroCMSから受け取ったデータの配列であり、これを状態にセットすることでReactコンポーネント内でそのデータを使用できるようになります。
  //       setWorks(response.contents);
  //     } catch (error) {
  //       console.error("Error fetching titles:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
    <PostsProvider>
      <Layout>
        <LinkButton title="ブログ一覧へ" link="/blog" />
        <LinkButton title="ホームへ" link="/" />
        {/* ルートとコンポーネントのマッピング */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </PostsProvider>
    </BrowserRouter>
  );
}

export default App;
