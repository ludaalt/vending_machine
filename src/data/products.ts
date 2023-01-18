import { getRandomCount } from "../services/getRandomCount";
import { getRandomPrice } from "../services/getRandomPrice";

export const products = [
  {
    id: 1,
    title: "apple",
    logo: "🍏",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 2,
    title: "coco",
    logo: "🥥",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 3,
    title: "cherry",
    logo: "🍒",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 4,
    title: "banana",
    logo: "🍌",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 5,
    title: "avocado",
    logo: "🥑",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 6,
    title: "egg",
    logo: "🥚",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 7,
    title: "cake",
    logo: "🍰",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 8,
    title: "potato",
    logo: "🥔",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },

  {
    id: 9,
    title: "cheese",
    logo: "🧀",
    price: getRandomPrice(),
    count: getRandomCount(0, 10),
  },
];
