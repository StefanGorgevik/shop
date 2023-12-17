import { useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  registerReducer,
  initRegisterState,
  SET_ITEM,
  CLEAR_FORM,
  RegisterFormProps,
} from "../reducers/registerReducer";

interface UseRegisterProps {
  disabled: boolean;
  handleSubmit: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => void;
  state: RegisterFormProps;
}

export const useRegister = (): UseRegisterProps => {
  const [state, dispatch] = useReducer(registerReducer, initRegisterState);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    dispatch({
      type: SET_ITEM,
      payload: {
        value: e.target.value,
        key,
      },
    });
  };

  const handleSubmit = () => {
    if (!state.password || !state.repeatPassword) return;
    setIsLoggedIn(true);
    navigate("/shop");
    dispatch({
      type: CLEAR_FORM,
    });
  };

  const disabled = useMemo(
    () => Object.values(state).every((value) => value !== ""),
    [state]
  );

  return {
    disabled,
    handleSubmit,
    handleChange,
    state,
  };
};
