export const getRandomPrice = (): number => {
  return +(Math.random() * 50 + 1).toFixed();
};
