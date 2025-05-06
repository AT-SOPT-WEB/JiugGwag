import * as styles from "./chip.css";

interface ChipProps {
  keywords: string[];
  onDelete: (keyword: string) => void;
  onSearch: (keyword: string) => void;
}

const Chip = ({ keywords, onDelete, onSearch }: ChipProps) => {
  return (
    <>
      {keywords.map((keyword) => (
        <button
          key={keyword}
          className={styles.chipContainer}
          onClick={() => onSearch(keyword)}
        >
          {keyword}
          <span
            onClick={() => {
              onDelete(keyword);
            }}
          >
            ✕
          </span>
        </button>
      ))}
    </>
  );
};

export default Chip;
