import * as styles from "./chip.css";

interface ChipProps {
  keywords: string[];
}

const Chip = ({ keywords }: ChipProps) => {
  return (
    <>
      {keywords.map((keyword) => (
        <button key={keyword} className={styles.chipContainer}>
          {keyword}
          <p>X</p>
        </button>
      ))}
    </>
  );
};

export default Chip;
