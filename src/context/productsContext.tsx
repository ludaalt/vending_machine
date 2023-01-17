import React, { FC, useState } from "react";

import { IProductItem, ProductsContextType } from "../types/types";

export const ProductsContext = React.createContext<ProductsContextType | null>(
  null
);

interface Props {
  children?: React.ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [productsCart, setProductsCart] = useState<IProductItem[]>([]);

  const buyProduct = (product: IProductItem) => {
    setProductsCart([...productsCart, product]);
  };

  return (
    <ProductsContext.Provider value={{ productsCart, buyProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
