import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar/search-bar";
import Message from "../../../components/message/message";
import * as style from "./page.css";
import { generateRandomNumber } from "../../../utils/random-number";
import { calculateResult } from "../hooks/calculate-result";
import { isValidNumber } from "../hooks/validate-number";

const MAX_COUNT = 10;

const BaseBallGame = () => {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState<"warning" | "correct" | "wrong" | "">(
    "",
  );
  const [result, setResult] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    handleCreateAnswer();
  }, []);

  const handleCreateAnswer = () => {
    const random = generateRandomNumber();
    setAnswer(random);
    console.log(random);
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
        setResult("게임 오버! 정답은 " + answer + "입니다.");
        setTimeout(() => {
          handleCreateAnswer();
          setMessage("");
          setNumber("");
        }, 5000);
        return;
      }
      if (!isValidNumber(number)) {
        setMessage("warning");
        setResult("");
        return;
      }
      if (number === answer) {
        setMessage("correct");
        setResult("");
        setTimeout(() => {
          handleCreateAnswer();
          setMessage("");
        }, 3000);
      } else {
        const ressult = calculateResult(number, answer);
        setMessage("wrong");
        setResult(ressult);
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
        <Message message={message} result={result} />
      </div>
    </section>
  );
};

export default BaseBallGame;
