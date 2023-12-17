import React, { FC, useRef } from "react";
import "./QuantityInput.scss";
import classNames from "classnames";

interface QuantityInputProps {
  value: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleQuantityChange: (key: number, quantity: number) => void;
  className?: string;
  isMaxValue?: boolean;
  max: number;
  id: number;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const QuantityInput: FC<QuantityInputProps> = ({
  value,
  handleIncrease,
  handleDecrease,
  handleQuantityChange,
  className,
  isMaxValue,
  max,
  id,
  onFocus,
  onBlur,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  function onClick() {
    inputEl?.current?.select();
  }
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    let parsedValue = inputValue === "" ? 0 : Number(inputValue);

    if (parsedValue > max) {
      parsedValue = max;
    }

    handleQuantityChange(id, parsedValue);
  };

  return (
    <div className={classNames("quantityInput", className)}>
      <button onClick={handleDecrease}>-</button>
      <input
        value={value}
        className={classNames("input", isMaxValue && "max")}
        max={max}
        min={0}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        type="number"
        ref={inputEl}
        onClick={onClick}
      />
      <button
        onClick={handleIncrease}
        className={classNames(isMaxValue && "max-plus")}
      >
        +
      </button>
    </div>
  );
};
