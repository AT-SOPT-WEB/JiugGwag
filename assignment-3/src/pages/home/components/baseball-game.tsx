import { useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import * as style from "./github.css";

const BaseBallGame = () => {
  const [number, setNumber] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <section className={style.gihubContainer}>
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
