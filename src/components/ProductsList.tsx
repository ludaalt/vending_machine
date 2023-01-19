import { useContext } from "react";
import styled from "styled-components";

import ProductItem from "./ProductItem";
import { ProductsContext } from "../context/productsContext";
import { ProductsContextType } from "../types/types";

const StyledProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  const { productsList } = useContext(ProductsContext) as ProductsContextType;
  return (
    <StyledProductsList>
      {productsList.map((item) => (
        <ProductItem key={item.title} item={item} />
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
