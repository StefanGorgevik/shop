import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import {
  CartAction,
  CartActionTypes,
  CartState,
  cartReducer,
} from "../reducers/cartReducer";

interface CartContextInterface {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextInterface>({
  state: { cart: [] },
  dispatch: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
});

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (parsedCart.length > 0) {
        dispatch({ type: CartActionTypes.ADD_CART, payload: parsedCart });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (item: number) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: itemId });
  };
  const emptyCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
