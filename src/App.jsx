import React, { useState, useEffect } from "react";
import { client } from "./lib/microcms/client";
import { LinkButton } from "./components/linkButton/LinkButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //async キーワードは、関数を非同期関数にするために使用されます
    const fetchData = async () => {
      try {
        // await キーワードを使用して非同期処理の完了を待ちます。非同期関数は、必ず Promise を返します。
        const response = await client.get({
          endpoint: "blog", // 記事のエンドポイントを指定
        });
        // response.contentsはMicroCMSから受け取ったデータの配列であり、これを状態にセットすることでReactコンポーネント内でそのデータを使用できるようになります。
        setData(response.contents)
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data)
  return (
    <BrowserRouter>
      <Layout>
        
        <LinkButton title="ブログ一覧へ" link="/blog" />
        <LinkButton title="ホームへ" link="/" />
        {/* ルートとコンポーネントのマッピング */}
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
