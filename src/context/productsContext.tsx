import React, { FC, useState } from "react";

import { IProductItem, ProductsContextType } from "../types/types";
import { products } from "../data/products";

export const ProductsContext = React.createContext<ProductsContextType | null>(
  null
);

interface Props {
  children?: React.ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [productsList, setProductsList] = useState<IProductItem[]>(products);
  const [productsCart, setProductsCart] = useState<IProductItem[]>([]);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const buyProduct = (product: IProductItem) => {
    const addedProduct = { ...product, id: productsCart.length - 1 };
    setProductsCart([...productsCart, addedProduct]);

    const updatedProductList = productsList.map((item) => {
      if (item.id === product.id) {
        item.count -= 1;
      }
      return item;
    });
    setProductsList(updatedProductList);
  };

  const deleteProductFromCart = (id: number) => {
    const newProductCart = productsCart.filter(
      (item: IProductItem) => item.id !== id
    );
    setProductsCart(newProductCart);
  };

  const provideMoney = (nominal: number) => {
    const currentBalance = totalPayment;
    setTotalPayment(currentBalance + nominal);
  };

  return (
    <ProductsContext.Provider
      value={{
        productsCart,
        buyProduct,
        deleteProductFromCart,
        totalPayment,
        provideMoney,
        productsList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
