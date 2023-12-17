import { FC } from "react";

import "./QuantityInput.scss";
import classNames from "classnames";
interface QuantityInputProps {
  value: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  className?: string;
  isMaxValue?: boolean;
}

export const QuantityInput: FC<QuantityInputProps> = ({
  value,
  handleIncrease,
  handleDecrease,
  className,
  isMaxValue,
}) => (
  <div className={classNames("quantityInput", className)}>
    <button onClick={handleDecrease}>-</button>
    <input value={value} className={classNames("input", isMaxValue && "max")} />
    <button
      onClick={handleIncrease}
      className={classNames(isMaxValue && "max-plus")}
    >
      +
    </button>
  </div>
);
