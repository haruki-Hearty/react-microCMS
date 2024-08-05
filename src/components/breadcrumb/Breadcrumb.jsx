import { Link, useLocation } from 'react-router-dom';


export const Breadcrumb = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/').filter(x => x);
  console.log(pathName)
  return (
    <ul>
      <li><Link to="/">ホーム</Link></li>
      {pathName.map((value, index) => {
        return (
          <li key={index}>{value}</li>
        )
      })}
    </ul>
  )
}
