import { SectionTitle } from "../components/sectionTitle/SectionTitle";

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <h2>ホーム</h2>
      <SectionTitle japanese="紹介" english="ABOUT" />
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.title}</li> // タイトルを表示
        ))}
      </ul>
    </>
  );
};
export default Home;
