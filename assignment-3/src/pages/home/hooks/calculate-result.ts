export const calculateResult = (input: string, answer: string) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (input[i] === answer[i]) {
      strike++;
    } else if (answer.includes(input[i])) {
      ball++;
    }
  }

  return `${strike}스트라이크 ${ball}볼`;
};
