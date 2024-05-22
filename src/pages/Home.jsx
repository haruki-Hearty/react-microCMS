import { Card } from "../components/card/Card";
import { SectionTitle } from "../components/sectionTitle/SectionTitle";

const Home = (props) => {
  const { posts } = props;
  return (
    <>
      <h2>ホーム</h2>
      <SectionTitle japanese="紹介" english="ABOUT" />
      <Card posts={posts} />
    </>
  );
};
export default Home;
