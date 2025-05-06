export const generateRandomNumber = (): string => {
  const digits: number[] = [];
  while (digits.length < 3) {
    const rand = Math.floor(Math.random() * 9) + 1;
    if (!digits.includes(rand)) {
      digits.push(rand);
    }
  }
  return digits.join("");
};
