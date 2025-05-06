import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import * as style from "./page.css";
import { generateRandomNumber } from "../../../utils/random-number";

const BaseBallGame = () => {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const random = generateRandomNumber();
    setAnswer(random);
    console.log("랜덤 정답:", random);
  }, [answer]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <section className={style.homePageContainer}>
      <div>
        <SearchBar
          placeholder="3자리 숫자를 입력해주세요"
          value={number}
          onChange={handleOnChange}
        />
      </div>
    </section>
  );
};

export default BaseBallGame;
