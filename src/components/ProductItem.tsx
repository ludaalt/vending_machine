import { FC } from "react";
import styled from "styled-components";

import BuyButton from "./BuyButton";

interface ProductItemProps {
  item: {
    title: string;
    count: number;
    logo: string;
    price: number;
  };
}

const StyledProductItem = styled.li<ProductItemProps>`
  color: #fff;
  padding: 10px 15px;
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

const ProductItem: FC<ProductItemProps> = ({ item }) => {
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
      <BuyButton disabled={item.count === 0} />
    </StyledProductItem>
  );
};

export default ProductItem;
