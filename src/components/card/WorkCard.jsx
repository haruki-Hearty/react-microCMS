import styles from "./WorkCard.module.scss";
import { formatYYYYMMDD } from "../../lib/dateFormatter";

export const WorkCard = (props) => {
  const { works } = props;
  //元の配列を操作しないようにスプレッド構文を使用。
  const sortedWorks = [...works].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  const latestWorks = sortedWorks.slice(0, 3);

  return (
    <ul className={styles.lists}>
      {latestWorks.map((work) => (
        <li className={styles.list} key={work.id}>
          <img className={styles.img} src={work.thumbnail.url} alt="" />
          <p className={styles.date}>{formatYYYYMMDD(work.publishedAt)}</p>
          <h3 className={styles.title}>{work.company}</h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: work.request }}
          ></div>
          <div className={styles.category}>
            {work.category.map((work) => {
              return <span key={work.id} className={styles.categoryItem}>{work.name}</span>;
            })}
          </div>
        </li>
      ))}
    </ul>
  );
};
