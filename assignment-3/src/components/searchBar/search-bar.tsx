import * as styles from "./search-bar.css";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onFocus,
  placeholder,
}: SearchBarProps) => {
  return (
    <input
      className={styles.searchBarContainer}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    ></input>
  );
};

export default SearchBar;
