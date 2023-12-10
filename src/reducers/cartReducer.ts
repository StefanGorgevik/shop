export interface CartState {
  cart: number[];
}

export enum CartActionTypes {
  ADD_CART = "ADD_CART",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export type CartAction =
  | { type: CartActionTypes.ADD_CART; payload: number[] }
  | { type: CartActionTypes.ADD_TO_CART; payload: number }
  | { type: CartActionTypes.REMOVE_FROM_CART; payload: number }
  | { type: CartActionTypes.CLEAR_CART };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_CART:
      return { ...state, cart: action.payload };

    case CartActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((id) => id !== action.payload),
      };

    case CartActionTypes.CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
};
