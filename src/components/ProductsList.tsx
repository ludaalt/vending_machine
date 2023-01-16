import styled from "styled-components";

import { products } from "../data/products";
import ProductItem from "./ProductItem";

const StyledProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  return (
    <StyledProductsList>
      {products.map((item) => (
        <ProductItem key={item.title} item={item} />
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
