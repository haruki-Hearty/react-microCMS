import { LinkButton } from "./components/linkButton/LinkButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { PostsProvider } from "./lib/postContext";

function App() {
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
