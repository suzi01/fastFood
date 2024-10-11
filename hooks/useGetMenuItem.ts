import { getMenuItemAndExtras, getMenuItems } from "@/services/apiMenuItems";
import { useState } from "react";

interface ExtraPropsAttributes {
  id: number;
  price: string;
  name: string;
}

interface ExtraProp {
  extras: ExtraPropsAttributes;
}

export const useGetMenuItem = () => {
  const [menuItemState, setMenuItemState] = useState<MenusState>({
    type: "idle",
  });

  const getItemDetails = async (id: string) => {
    setMenuItemState({ type: "loading" });
    try {
      const result2 = await getItemAndExtras(id);
      setMenuItemState({ type: "loaded", result: result2 });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Error) message = error.message;
      setMenuItemState({ type: "error", message: message });
    }
  };

  return { menuItemState, getItemDetails };
};

async function getItemAndExtras(id: string) {
  let chosenExtras = [];
  const data = await getMenuItemAndExtras(id);

  const menu_extras = data[0].menu_item_extras;
  // console.log(menu_extras);
  if (menu_extras.length > 1) {
    chosenExtras = menu_extras.map((extra: ExtraProp) => {
      return {
        id: extra.extras.id,
        name: extra.extras.name,
        price: extra.extras.price,
      };
    });
  }
  return {
    id: data[0].id,
    name: data[0].name,
    description: data[0].description,
    price: data[0].price,
    category: data[0].category,
    calories: data[0].calories,
    rating: data[0].rating,
    prep_time: data[0].prep_time,
    item_image: data[0].item_image,
    additionals: chosenExtras,
  };
}

export type MenusState =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "error"; message: string }
  | { type: "loaded"; result: MenuItem };

export type MenuItem = {
  calories: string;
  category: string;
  description: string;
  id: number;
  name: string;
  prep_time: number;
  price: string;
  rating: number;
  item_image: string;
  additionals: ExtraPropsAttributes[];
};
