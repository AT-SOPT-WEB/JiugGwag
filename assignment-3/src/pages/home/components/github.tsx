import { useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import * as styles from "./github.css";
import Card from "../../../components/card/card";
import { useGithubData } from "../hooks/use-github-data";

const Github = () => {
  const [user, setUser] = useState("");
  const [queryUser, setQueryUser] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const { data, isLoading, error } = useGithubData(queryUser);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user.trim()) {
      setQueryUser(user.trim());
      setIsCardVisible(true);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
    setUser("");
  };

  return (
    <>
      <section className={styles.gihubContainer}>
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

        {data &&
          !error &&
          isCardVisible && ( // isCardVisible이 true일 때만 카드가 보임
            <div>
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
