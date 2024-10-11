import {  getMenuItems } from "@/services/apiMenuItems";
import { useState } from "react";

export const useGetMenuItems = () => {
  const [menuItemDetailsState, setMenuItemsDetailsState] = useState<MenusState>(
    {
      type: "idle",
    }
  );

  const getMenuItemDetails = async () => {
    setMenuItemsDetailsState({ type: "loading" });
    try {
      const result = await getMenuItems();

      setMenuItemsDetailsState({ type: "loaded", result: result });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Error) message = error.message;
      setMenuItemsDetailsState({ type: "error", message: message });
    }
  };

  return { menuItemDetailsState, getMenuItemDetails };
};

export type MenusState =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "error"; message: string }
  | { type: "loaded"; result: MenuItem[] };

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
};
