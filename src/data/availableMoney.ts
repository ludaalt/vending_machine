import { getRandomCount } from "../services/getRandomCount";

export const availableMoney: Record<number, number> = {
  1: getRandomCount(0, 100),
  5: getRandomCount(0, 100),
  10: getRandomCount(0, 100),
  50: getRandomCount(0, 100),
  100: getRandomCount(0, 100),
  500: getRandomCount(0, 100),
};
