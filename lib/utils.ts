import { Cart } from "@/context/CartContext";

interface MenuItems {
  calories: string;
  category: string;
  description: string;
  id: number;
  name: string;
  prep_time: number;
  price: string;
  rating: number;
  item_image: string;
}

type Key = "calories" | "category" | "description";

export const groupByKey = (data: MenuItems[], key: Key) =>
  Object.values(
    data.reduce(
      (
        res: Record<string, { category: string; data: MenuItems[] }>,
        item: MenuItems
      ) => {
        const value = item[key];
        const existing = res[value] || { [key]: value, data: [] };
        return {
          ...res,
          [value]: {
            ...existing,
            data: [...existing.data, item],
          },
        };
      },
      {}
    )
  );
// const profilesByUserId = data.reduce((accumulator, item) => {
//   const {amount, price } = item;
//   return accumulator + (amount * price);
// }, 0);

export const getTotal = (cart: Cart[]):number =>
  cart.reduce((accumulator, item) => {
    const { itemAmount, itemPrice, chosenExtras } = item;
    let extrasTotal = 0;
    chosenExtras.forEach((element) => {
      extrasTotal += parseFloat(element.price);
    });
    return (accumulator + itemAmount * parseFloat(itemPrice) + extrasTotal);
  }, 0);
