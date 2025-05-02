import { useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import { useCustomQuery } from "../../../utils/useCustomQuery";
import * as styles from "./github.css";
import Card from "../../../components/card/card";

interface GihhubDataResponse {
  avatar_url: string;
  name: string;
  login: string;
  bio: string | "";
  followers: number;
  following: number;
}

const Github = () => {
  const [user, setUser] = useState("");
  const [queryUser, setQueryUser] = useState("");

  const isEnabled = !!queryUser;
  const { data, isLoading } = useCustomQuery<GihhubDataResponse>(
    `https://api.github.com/users/${queryUser}`,
    isEnabled,
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user.trim()) {
      setQueryUser(user.trim());
    }
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <>
      <section className={styles.gihubContainer}>
        <div>
          <SearchBar
            placeholder="GitHub 프로필을 입력하세요"
            value={user}
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {isLoading && <p>로딩 중</p>}
        {data && (
          <div>
            <Card.Root>
              <Card.ProfileImage imageUrl={data.avatar_url} />
              <Card.Name name={data.name} />
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
