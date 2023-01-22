import { FC, useState, useContext } from "react";
import styled from "styled-components";

import OutOfStockTooltip from "./OutOfStockTooltip";
import { IProductItem, ProductsContextType } from "../types/types";
import { ProductsContext } from "../context/productsContext";

interface BuyButtonProps {
  disabled: boolean;
  buyProduct: (id: number) => void;
  item: IProductItem;
}

const StyledButton = styled.button`
  font-family: inherit;
  display: inline-block;
  font-size: 1em;
  padding: 8px 15px;

  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;

  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

  &:hover:enabled {
    transform: scale(0.9);
  }

  &:disabled,
  &[disabled] {
    background-color: gray;
    transform: none;
    box-shadow: none;

    pointer-events: none;
  }
`;

const BuyButton: FC<BuyButtonProps> = ({ disabled, buyProduct, item }) => {
  const { change } = useContext(ProductsContext) as ProductsContextType;
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const handleClick = () => {
    if (disabled) {
      setIsTooltipVisible(true);

      setTimeout(() => {
        setIsTooltipVisible(false);
      }, 2000);

      return;
    }
  };

  return (
    <div onClick={handleClick} style={{ position: "relative" }}>
      <StyledButton
        disabled={disabled || change > 0}
        onClick={() => buyProduct(item.id)}
      >
        buy
      </StyledButton>
      {isTooltipVisible && <OutOfStockTooltip />}
    </div>
  );
};

export default BuyButton;
