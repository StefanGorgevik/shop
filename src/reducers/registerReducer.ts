export interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const CLEAR_FORM = "CLEAR_FORM";
export const SET_ITEM = "SET_ITEM";

export type Action =
  | { type: typeof SET_ITEM; payload: { value: string; key: string } }
  | { type: typeof CLEAR_FORM };

export const initRegisterState: RegisterFormProps = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};
export const registerReducer = (
  state: RegisterFormProps,
  action: Action
): RegisterFormProps => {
  switch (action.type) {
    case CLEAR_FORM:
      return initRegisterState;
    case SET_ITEM:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
