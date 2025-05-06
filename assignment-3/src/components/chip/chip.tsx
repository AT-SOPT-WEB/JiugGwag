import * as styles from "./chip.css";

interface ChipProps {
  keywords: string[];
  onDelete: (keyword: string) => void;
}

const Chip = ({ keywords, onDelete }: ChipProps) => {
  return (
    <>
      {keywords.map((keyword) => (
        <button key={keyword} className={styles.chipContainer}>
          {keyword}
          <span
            onClick={(e) => {
              e.stopPropagation(); // 상위 버튼 클릭 방지
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
