export const generateEightRandomHexDigits = () => {
  return Math.random().toString(16).slice(2, 10);
};
