import SearchBar from "../../../components/searchBar/search-bar";
import * as styles from "./github.css";
const Github = () => {
  return (
    <>
      <div className={styles.gihubContainer}>
        <SearchBar placeholder="GitHub 프로필을 입력하세요" />
      </div>
    </>
  );
};

export default Github;
