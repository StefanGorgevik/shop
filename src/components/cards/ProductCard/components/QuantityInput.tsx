import { FC } from "react";

import "./components.scss";

interface QuantityInputProps {
  value: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

export const QuantityInput: FC<QuantityInputProps> = ({
  value,
  handleIncrease,
  handleDecrease,
}) => (
  <div className="quantityInput">
    <span onClick={handleDecrease}>-</span>
    <p>{value}</p>
    <span onClick={handleIncrease}>+</span>
  </div>
);
