import { useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import * as styles from "./page.css";
import Card from "../../../components/card/card";
import { useGithubData } from "../hooks/use-github-data";
import Chip from "../../../components/chip/chip";
import {
  getRecentUsers,
  removeRecentUser,
  saveRecentUser,
} from "../../../utils/local-storage";

const Github = () => {
  const [recentUsers, setRecentUsers] = useState<string[]>([]);
  const [user, setUser] = useState("");
  const [queryUser, setQueryUser] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const { data, isLoading, error } = useGithubData(queryUser);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user.trim()) {
      const trimmedUser = user.trim();
      setQueryUser(trimmedUser);
      setIsCardVisible(true);
      saveRecentUser(trimmedUser);
      setRecentUsers(getRecentUsers());
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
    setUser("");
  };

  const handleDeleteChip = (keyword: string) => {
    removeRecentUser(keyword);
    setRecentUsers(getRecentUsers());
  };

  const handleChipClick = (keyword: string) => {
    setQueryUser(keyword);
  };

  return (
    <>
      <section className={styles.homePageContainer}>
        <div>
          <SearchBar
            placeholder="GitHub 프로필을 입력하세요"
            value={user}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {isLoading && <p>로딩 중...</p>}

        {error && (
          <p>결과를 찾을 수 없습니다. 입력한 사용자명을 다시 확인해주세요.</p>
        )}

        {data && !error && isCardVisible && (
          <div className={styles.contentContainer}>
            <div className={styles.chipContainer}>
              <Chip
                keywords={recentUsers}
                onDelete={handleDeleteChip}
                onSearch={handleChipClick}
              />
            </div>
            <Card.Root onClick={handleCloseCard}>
              <Card.ProfileImage imageUrl={data.avatar_url} />
              <Card.Name name={data.name} html_url={data.html_url} />
              <Card.UserId userId={data.login} />
              <Card.UserDescription description={data.bio} />
              <Card.Button
                followers={data.followers}
                following={data.following}
              />
            </Card.Root>
          </div>
        )}
      </section>
    </>
  );
};

export default Github;
