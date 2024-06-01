import styles from "./WorkCard.module.scss";
import { formatYYYYMMDD } from "../../lib/dateFormatter";
import { truncateText } from "../../lib/truncateText";

export const WorkCard = (props) => {
  const { works } = props;

  return (
    <ul className={styles.lists}>
      {works.map((work) => (
        <li className={styles.list} key={work.id}>
          <img className={styles.img} src={work.thumbnail.url} alt="" />
          <p className={styles.date}>{formatYYYYMMDD(work.publishedAt)}</p>
          <h3 className={styles.title}>{work.company}</h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: truncateText(work.request, 40) }}
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
