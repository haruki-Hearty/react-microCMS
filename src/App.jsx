import React, { useState, useEffect } from "react";
import { client } from "./lib/microcms/client";
import { LinkButton } from "./components/linkButton/LinkButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import { Layout } from "./components/Layout";

function App() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    //async キーワードは、関数を非同期関数にするために使用されます
    const fetchBlog = async () => {
      try {
        // await キーワードを使用して非同期処理の完了を待ちます。非同期関数は、必ず Promise を返します。
        const response = await client.get({
          endpoint: "blog", // 記事のエンドポイントを指定
        });
        const blogTitles = response.contents.map((blog) => blog.title); // 記事のタイトルを取得
        setTitles(blogTitles);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchBlog();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <ul>
            {titles.map((title, index) => (
              <li key={index}>{title}</li> // タイトルを表示
            ))}
          </ul>
          <LinkButton title="ブログ一覧へ" link="/blog" />
          <LinkButton title="ホームへ" link="/" />
          {/* ルートとコンポーネントのマッピング */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
