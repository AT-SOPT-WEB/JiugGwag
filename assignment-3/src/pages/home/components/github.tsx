import { useGithubData } from "../hooks/get-github-data";
import { useGithubLogic } from "../hooks/use-github-logic";
import SearchBar from "../../../components/searchBar/search-bar";
import * as styles from "./page.css";
import Chip from "../../../components/chip/chip";
import Card from "../../../components/card/card";

const Github = () => {
  const {
    user,
    recentUsers,
    queryUser,
    isCardVisible,
    handleOnChange,
    handleKeyDown,
    handleCloseCard,
    handleDeleteChip,
    handleChipClick,
  } = useGithubLogic();

  const { data, isLoading, error } = useGithubData(queryUser);

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
