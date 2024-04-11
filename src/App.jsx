import React, { useState, useEffect } from "react";
import { client } from "./lib/microcms/client";

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
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <ul>
          {titles.map((title, index) => (
            <li key={index}>{title}</li> // タイトルを表示
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
