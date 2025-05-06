import * as styles from "./list.css";

interface ListProps {
  results: string[];
}

const List = ({ results }: ListProps) => {
  if (results.length === 0) return null;

  return (
    <ul>
      {results.map((item, index) => (
        <li className={styles.listItemStyle} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
