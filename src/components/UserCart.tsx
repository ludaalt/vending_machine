import { useContext, FC } from "react";
import styled from "styled-components";

import { ProductsContext } from "../context/productsContext";
import { ProductsContextType, IProductItem } from "../types/types";

const StyledUserCart = styled.ul`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    margin: 0 10px 5px 0;
  }
`;

const UserCart: FC = () => {
  const { productsCart, deleteProductFromCart } = useContext(
    ProductsContext
  ) as ProductsContextType;

  return (
    <>
      selected goods:
      <StyledUserCart>
        {productsCart.map((item: IProductItem, index: number) => (
          <li key={`${index}. ${item.title}`}>
            <p>{item.logo}</p>
            <button onClick={() => deleteProductFromCart(item.id)}>
              &times;
            </button>
          </li>
        ))}
      </StyledUserCart>
      total cost: {productsCart.reduce((sum, item) => sum + item.price, 0)}
    </>
  );
};

export default UserCart;
