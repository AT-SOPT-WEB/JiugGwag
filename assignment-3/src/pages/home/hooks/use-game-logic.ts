import { useState, useEffect } from "react";
import { generateRandomNumber } from "../../../utils/random-number";
import { calculateResult } from "../hooks/calculate-result";
import { isValidNumber } from "../hooks/validate-number";

const MAX_COUNT = 10;

const useInput = () => {
  const [number, setNumber] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return { number, setNumber, handleOnChange };
};

const useAnswer = () => {
  const [answer, setAnswer] = useState("");

  const createAnswer = () => {
    const random = generateRandomNumber();
    setAnswer(random);
  };

  useEffect(() => {
    createAnswer();
  }, []);

  return { answer, createAnswer };
};

export const useGameLogic = () => {
  const { number, setNumber, handleOnChange } = useInput();
  const { answer, createAnswer } = useAnswer();
  const [message, setMessage] = useState<"warning" | "correct" | "wrong" | "">(
    "",
  );
  const [resultList, setResultList] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const resetGame = () => {
    createAnswer();
    setMessage("");
    setNumber("");
    setResultList([]);
    setCount(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (count === MAX_COUNT) {
      setMessage("wrong");
      setResultList((prev) => [...prev, `게임 오버! 정답은 ${answer}입니다.`]);
      setTimeout(resetGame, 5000);
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
        resetGame();
        setMessage("");
      }, 3000);
    } else {
      const result = calculateResult(number, answer);
      setMessage("wrong");
      setResultList((prev) => [...prev, `${count}회차: ${number} ➡ ${result}`]);
    }

    setCount((prev) => prev + 1);
    setNumber("");
  };

  return {
    number,
    message,
    resultList,
    count,
    handleOnChange,
    handleKeyDown,
  };
};
