import { createContext, useContext, useReducer, Dispatch } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export interface Cart {
  id: string;
  itemName: string;
  itemImage: string;
  itemAmount: number;
  itemPrice: string;
  chosenExtras: SelectedExtras[];
}

interface CartState {
  cart: Cart[];
}

export enum CartActionKind {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  EMPTY_CART = "EMPTY_CART",
  EDIT_CART = "EDIT_ITEM",
}

type CartAction =
  | {
      type: CartActionKind.ADD_ITEM;
      payload: { item: Omit<Cart, "id"> };
    }
  | {
      type: CartActionKind.REMOVE_ITEM;
      payload: string;
    }
  | {
      type: CartActionKind.EMPTY_CART;
    }
  | {
      type: CartActionKind.EDIT_CART;
      payload: { item: Cart };
    };

const initialState: CartState = {
  cart: [],
};

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionKind.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CartActionKind.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case CartActionKind.ADD_ITEM:
      const itemWithId = {
        ...action.payload.item,
        id: uuidv4(),
      };
      return {
        ...state,
        cart: [...state.cart, itemWithId],
      };
    case CartActionKind.EDIT_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, ...action.payload.item }
            : item
        ),
      };
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
