import { useContext, FC } from "react";
import styled from "styled-components";

import { ProductsContext } from "../context/productsContext";
import { ProductsContextType, IProductItem } from "../types/types";
import Change from "./Change";

const StyledCartList = styled.ul`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    margin: 0 10px 5px 0;
  }
`;

const ChangeButton = styled.button`
  margin-top: 10px;
  font-family: inherit;
  display: inline-block;
  font-size: 1em;
  padding: 8px 15px;

  background-color: #5c003d;
  color: #fff;
  border-radius: 4px;

  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 150, 0.5);

  &:hover {
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

const UserCart: FC = () => {
  const {
    productsCart,
    deleteProductFromCart,
    totalCost,
    totalPayment,
    calculateChange,
    change,
    calculatedChange,
  } = useContext(ProductsContext) as ProductsContextType;

  return (
    <div>
      <p>selected goods:</p>
      {!change && (
        <StyledCartList>
          {productsCart.map((item: IProductItem, index: number) => (
            <li key={`${index}. ${item.title}`}>
              <p>{item.logo}</p>
              <button onClick={() => deleteProductFromCart(item.id)}>
                &times;
              </button>
            </li>
          ))}
        </StyledCartList>
      )}
      <p style={{ marginTop: "20px" }}>total cost: {totalCost}</p>

      {productsCart.length > 0 ? (
        <div style={{ marginTop: "20px" }}>
          <p>please provide money. your payment: {totalPayment}</p>
          <ChangeButton
            disabled={totalCost > totalPayment || totalCost === 0}
            onClick={() => {
              calculateChange();
            }}
          >
            calculate change
          </ChangeButton>
          {change > 0 && (
            <>
              <div style={{ marginTop: "10px" }}>
                your change:
                <Change change={calculatedChange} />
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default UserCart;
