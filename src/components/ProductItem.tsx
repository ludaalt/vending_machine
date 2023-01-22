import { FC, useContext } from "react";
import styled from "styled-components";

import BuyButton from "./BuyButton";
import { IProductItem, ProductsContextType } from "../types/types";
import { ProductsContext } from "../context/productsContext";

type Props = {
  item: IProductItem;
};

const StyledProductItem = styled.li<Pick<Props, "item">>`
  color: #000;
  font-weight: bold;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 100%;
    width: 110%;
    height: 5px;
    background-color: brown;
  }

  &:hover {
    div {
      transform: ${(props) => (props.item.count === 0 ? `none` : `scale(1.3)`)};
    }
  }
`;

const ProductItem: FC<Props> = ({ item }) => {
  const { buyProduct } = useContext(ProductsContext) as ProductsContextType;
  return (
    <StyledProductItem item={item}>
      <div>{item.logo}</div>

      {item.count > 0 ? (
        <p>
          {item.price} {"\u20BD"}
        </p>
      ) : (
        <br />
      )}

      <p>in stock: {item.count}</p>
      <BuyButton
        disabled={item.count === 0}
        buyProduct={() => buyProduct(item)}
        item={item}
      />
    </StyledProductItem>
  );
};

export default ProductItem;
