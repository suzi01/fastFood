import chickenCrispyBurger from "@/assets/images/chicken-burger-crispy.png";
import sandwich from "@/assets/images/sandwich.png";
import fries from "@/assets/images/fries.png";
import drinks from "@/assets/images/drinks.png";
import friedChicken from "@/assets/images/fried-chicken.png";
import hamburger from "@/assets/images/hamburger.png";
import orderPicture from "@/assets/images/order-card.png";
import foodBackground from "@/assets/images/food.png";
import chickenBurger from "@/assets/images/chicken-burger2.png";
import profilePic from "@/assets/images/profile-pic.jpg";
import detailBurger from "@/assets/images/detail-buger.png";
import googleIcon from "@/assets/images/google-icon-logo.png";
import wave from "@/assets/images/wave.png";
import shoppingCart from "@/assets/images/shopping-cart.png";
// sandiwches, sides, drinks, chicken

export const images = {
  chickenCrispyBurger,
  sandwich,
  fries,
  drinks,
  friedChicken,
  hamburger,
  orderPicture,
  foodBackground,
  chickenBurger,
  profilePic,
  detailBurger,
  googleIcon,
  wave,
  shoppingCart,
};

export const deliveryPrice = 1.5;

export const foodCategories = [
  {
    id: 1,
    title: "Burgers",
    image: images.chickenCrispyBurger,
  },
  {
    id: 2,
    title: "Sandwiches",
    image: images.sandwich,
  },
  {
    id: 3,
    title: "Sides",
    image: images.fries,
  },
  {
    id: 4,
    title: "Chicken",
    image: images.friedChicken,
  },
  {
    id: 5,
    title: "Drinks",
    image: images.drinks,
  },
];

export const data = {
  foodCategories,
};

export const recommendations = [
  {
    id: 2,
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheddar cheese, lettuce, tomato, onion, and our signature sauce.",
    price: "8.99",
    rating: 4.5,
    category: "Burgers",
    itemImage: "missing image",
  },
  {
    id: 3,
    name: "Bacon BBQ Burger",
    description:
      "Beef patty topped with crispy bacon, cheddar cheese, fried onion rings, and smoky BBQ sauce.",
    price: "10.49",
    rating: 4.8,
    category: "Burgers",
    itemImage: "missing image",
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    description:
      "Grilled beef patty smothered with sautéed mushrooms and Swiss cheese on a toasted bun.",
    price: "9.49",
    rating: 4.7,
    category: "Burgers",
    itemImage: "missing image",
  },
  {
    id: 4,
    name: "Veggie Burger",
    description:
      "A grilled plant-based patty with lettuce, tomato, avocado, and vegan mayo.",
    price: "8.49",
    rating: 4.4,
    category: "Burgers",
    itemImage: "missing image",
  },
];

export const orderHistory = [
  {
    id: 1,
    status: "delivered",
    price: 23.45,
  },
  {
    id: 2,
    status: "delivered",
    price: 56.78,
  },
  {
    id: 3,
    status: "delivered",
    price: 12.34,
  },
  {
    id: 4,
    status: "delivered",
    price: 78.9,
  },
  {
    id: 5,
    status: "delivered",
    price: 34.56,
  },
  {
    id: 6,
    status: "delivered",
    price: 89.01,
  },
  {
    id: 7,
    status: "delivered",
    price: 67.89,
  },
  {
    id: 8,
    status: "delivered",
    price: 45.67,
  },
  {
    id: 9,
    status: "delivered",
    price: 23.45,
  },
  {
    id: 10,
    status: "delivered",
    price: 12.34,
  },
];
