export interface CartState {
  cart: number[];
  cartQuantities: { [id: number]: number };
}

export enum CartActionTypes {
  ADD_CART = "ADD_CART",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
}

export type CartAction =
  | { type: CartActionTypes.ADD_CART; payload: CartState }
  | { type: CartActionTypes.ADD_TO_CART; payload: number }
  | { type: CartActionTypes.REMOVE_FROM_CART; payload: number }
  | { type: CartActionTypes.INCREASE_QUANTITY; payload: number }
  | { type: CartActionTypes.DECREASE_QUANTITY; payload: number }
  | { type: CartActionTypes.CLEAR_CART };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_CART:
      return action.payload;

    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartQuantities: {
          ...state.cartQuantities,
          [action.payload]: state.cartQuantities[action.payload]
            ? state.cartQuantities[action.payload] + 1
            : 1,
        },
      };
    case CartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartQuantities: {
          ...state.cartQuantities,
          [action.payload]: state.cartQuantities[action.payload]
            ? state.cartQuantities[action.payload] + 1
            : 1,
        },
      };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((id) => id !== action.payload),
        cartQuantities: {
          ...state.cartQuantities,
          [action.payload]: state.cartQuantities[action.payload] - 1,
        },
      };

    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartQuantities: {
          ...state.cartQuantities,
          [action.payload]: state.cartQuantities[action.payload] - 1,
        },
      };

    case CartActionTypes.CLEAR_CART:
      return { cart: [], cartQuantities: {} };

    default:
      return state;
  }
};
