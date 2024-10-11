import { supabase } from "@/lib/supabase";

export async function getMenuItems() {
  const { data: menu, error } = await supabase
    .from("menu")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return menu;
}


export async function getMenuItemAndExtras(id: string) {
  const { data: menu_item_and_extras, error } = await supabase
    .from("menu")
    .select(
      `
      *,
      menu_item_extras (
          extras (*)
      )
  `
    )
    .eq("id", +id);
  if (error) {
    console.error(error);
    throw new Error("There was an error getting the menu item");
  }

  return menu_item_and_extras;
}
