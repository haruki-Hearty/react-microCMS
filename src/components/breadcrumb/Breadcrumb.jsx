import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);
  console.log(pathNames);
  return (
    <ul>
      <li>
        <Link to="/">ホーム</Link>
      </li>
      {pathNames.map((value, index) => {
        const to = `/${pathNames.slice(0, index + 1).join('/')}`;
        return (
          <li key={index}>
            <Link to={to}>{value}</Link>
          </li>
        );
      })}
    </ul>
  );
};
