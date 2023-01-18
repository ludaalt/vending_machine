import { FC, useContext } from "react";
import styled from "styled-components";

import { ProductsContext } from "../context/productsContext";
import { ProductsContextType } from "../types/types";

interface MoneyButtonProps {
  nominal: number;
}

const StyledMoneyButton = styled.button<MoneyButtonProps>`
  min-width: 90px;
  margin-bottom: 10px;
  margin-right: auto;
  padding: 12px 10px 12px 25px;

  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 10%;
  text-align: right;
  color: #fff;
  font-family: inherit;

  background-color: rgb(63, 63, 75);

  background-image: ${(props) =>
    props.nominal === 50
      ? `url('./images/50coins.png')`
      : props.nominal === 100
      ? `url('./images/100coins.png')`
      : props.nominal === 500
      ? `url('./images/500coins.png')`
      : `url('./images/1000coins.png')`};

  &:hover:enabled {
    transform: scale(1.05);
  }
`;

const MoneyButton: FC<MoneyButtonProps> = ({ nominal }) => {
  const { productsCart, provideMoney } = useContext(
    ProductsContext
  ) as ProductsContextType;

  return (
    <StyledMoneyButton
      disabled={productsCart.length === 0}
      nominal={nominal}
      onClick={() => provideMoney(nominal)}
    >
      {nominal}
    </StyledMoneyButton>
  );
};

export default MoneyButton;
