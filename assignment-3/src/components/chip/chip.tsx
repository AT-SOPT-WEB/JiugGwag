import * as styles from "./chip.css";

interface ChipProps {
  keyword: string;
}

const Chip = ({ keyword }: ChipProps) => {
  return <button className={styles.chipContainer}>{keyword}</button>;
};

export default Chip;
