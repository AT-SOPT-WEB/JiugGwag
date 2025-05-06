export const isValidNumber = (input: string) => {
  return /^\d{3}$/.test(input) && new Set(input).size === 3;
};
