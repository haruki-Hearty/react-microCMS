import { LinkButton } from "./components/linkButton/LinkButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { BlogProvider } from "./hooks/useBlogPosts";
import { WorkProvider } from "./hooks/useWorkPosts";

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <WorkProvider>
          <Layout>
            <LinkButton title="ブログ一覧へ" link="/blog" />
            <LinkButton title="ホームへ" link="/" />
            {/* ルートとコンポーネントのマッピング */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Layout>
        </WorkProvider>
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
