import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import Message from "../../../components/message/message";
import * as style from "./page.css";
import { generateRandomNumber } from "../../../utils/random-number";
import { calculateResult } from "../hooks/calculate-result";
import { isValidNumber } from "../hooks/validate-number";
import List from "../../../components/list/list";

const MAX_COUNT = 10;

const BaseBallGame = () => {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState<"warning" | "correct" | "wrong" | "">(
    "",
  );
  const [resultList, setResultList] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    handleCreateAnswer();
  }, []);

  const handleCreateAnswer = () => {
    const random = generateRandomNumber();
    setAnswer(random);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    if (e.target.value.length === 0) {
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (count === MAX_COUNT) {
        setMessage("wrong");
        setResultList((prev) => [
          ...prev,
          `게임 오버! 정답은 ${answer}입니다.`,
        ]);
        setTimeout(() => {
          handleCreateAnswer();
          setMessage("");
          setNumber("");
          setResultList([]);
          setCount(1);
        }, 5000);
        return;
      }
      if (!isValidNumber(number)) {
        setMessage("warning");
        setResultList([]);
        return;
      }
      if (number === answer) {
        setMessage("correct");
        setResultList((prev) => [
          ...prev,
          `${count}회차: ${number} ➡ 🎉 정답입니다!`,
        ]);
        setTimeout(() => {
          handleCreateAnswer();
          setMessage("");
          setCount(1);
        }, 3000);
      } else {
        const result = calculateResult(number, answer);
        setMessage("wrong");
        setResultList((prev) => [
          ...prev,
          `${count}회차: ${number} ➡ ${result}`,
        ]);
      }
      setCount((prev) => prev + 1);
      setNumber("");
    }
  };

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
