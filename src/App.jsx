import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
import Home from "./pages/Home";
import Works from "./pages/Works";
import { Layout } from "./components/Layout";
import { BlogProvider } from "./hooks/useBlogPosts";
import { WorkProvider } from "./hooks/useWorkPosts";

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <WorkProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </Layout>
        </WorkProvider>
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
