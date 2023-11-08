import p1 from "../../public/images/p1.jpg";
import p1c1 from "../../public/images/p1c1.jpg";
import p1c2 from "../../public/images/p1c2.png";
import p1c3 from "../../public/images/p1c3.png";
import p1c4 from "../../public/images/p1c4.png";
import p2c1 from "../../public/images/p2c1.png";
import p2c2 from "../../public/images/p2c2.png";
import p2c3 from "../../public/images/p2c3.png";
import p2 from "../../public/images/p2.jpg";
import p3 from "../../public/images/p3.jpg";
import p4 from "../../public/images/p4.jpg";
import p5 from "../../public/images/p5.jpg";
import p6 from "../../public/images/p6.jpg";
import p7 from "../../public/images/p7.jpg";
import p8 from "../../public/images/p8.jpg";

export const products = [
  {
    id: 1,
    img: p1,
    title: "Combo Meal",
    category: [
      {
        id: 1,
        title: "BB Collection for 4 persons",
        img: p1c1,
      },
      {
        id: 2,
        title: "BB Collection for 2 persons",
        img: p1c2,
      },
      {
        id: 3,
        title: "BB Collection for 3 persons",
        img: p1c3,
      },
      {
        id: 4,
        title: "BB Collection for 4 persons",
        img: p1c4,
      },
    ],
  },
  {
    id: 2,
    img: p2,
    title: "SALADS / APPETIZERS",
    category: [
      {
        id: 5,
        title: "Salads / Appetizers for 4 persons",
        img: p2c1,
      },
      {
        id: 6,
        title: "Salads / Appetizers for 2 persons",
        img: p1c2,
      },
      {
        id: 7,
        title: "Salads / Appetizers 3 persons",
        img: p2c3,
      },
    ],
  },
  {
    id: 3,
    img: p3,
    title: "BEEF BURGERS",
    category: [],
  },
  {
    id: 4,
    img: p4,
    title: "CHICKEN BURGERS",
    category: [],
  },
  {
    id: 5,
    img: p5,
    title: "SLIDERS",
    category: [],
  },
  {
    id: 6,
    img: p6,
    title: "LEMONADES",
    category: [],
  },
  {
    id: 7,
    img: p7,
    title: "SODAS & WATER",
    category: [],
  },
  {
    id: 8,
    img: p8,
    title: "Extra Toppings",
    category: [],
  },
];

export const dummySodas = [
  { name: "Coke", quantity: 1 },
  { name: "Coke Zero", quantity: 1 },
  { name: "Sprite", quantity: 2 },
];
