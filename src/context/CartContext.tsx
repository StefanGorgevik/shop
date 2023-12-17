import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  useState,
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
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const initState = { cart: [], cartQuantities: {} };

const CartContext = createContext<CartContextInterface>({
  state: initState,
  dispatch: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  const [hasSetState, setHasState] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart: CartState = JSON.parse(storedCart);
      dispatch({ type: CartActionTypes.ADD_CART, payload: parsedCart });
      setHasState(true);
    }
  }, []);

  useEffect(() => {
    if (hasSetState) {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }, [hasSetState, state]);

  const addToCart = (item: number) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: itemId });
  };
  const emptyCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };
  const increaseQuantity = (itemId: number) => {
    dispatch({ type: CartActionTypes.INCREASE_QUANTITY, payload: itemId });
  };
  const decreaseQuantity = (itemId: number) => {
    dispatch({ type: CartActionTypes.DECREASE_QUANTITY, payload: itemId });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        emptyCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useCartQuantities = () => {
  const {
    state: { cartQuantities },
  } = useCart();

  return cartQuantities;
};
