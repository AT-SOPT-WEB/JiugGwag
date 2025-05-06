import SearchBar from "../../../components/searchBar/search-bar";
import Message from "../../../components/message/message";
import * as style from "./page.css";
import List from "../../../components/list/list";
import { useGameLogic } from "../hooks/use-game-logic";

const BaseBallGame = () => {
  const { number, message, resultList, handleOnChange, handleKeyDown } =
    useGameLogic();

  return (
    <section className={style.homePageContainer}>
      <div>
        <SearchBar
          placeholder="3자리 숫자를 입력해주세요"
          value={number}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <Message message={message} />
      </div>
      <div>
        <List results={resultList} />
      </div>
    </section>
  );
};

export default BaseBallGame;
