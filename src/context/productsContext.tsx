import React, { FC, useState, useEffect } from "react";

import { IProductItem, ProductsContextType } from "../types/types";
import { products } from "../data/products";

import { getChange } from "../services/getChange";
import { availableMoney } from "../data/availableMoney";

export const ProductsContext = React.createContext<ProductsContextType | null>(
  null
);

interface Props {
  children?: React.ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [productsList, setProductsList] = useState<IProductItem[]>(products);
  const [productsCart, setProductsCart] = useState<IProductItem[]>([]);

  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const [change, setChange] = useState<number>(0);
  const [calculatedChange, setCalculatedChange] = useState<
    Record<number, number>
  >({});

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

  useEffect(() => {
    setTotalCost(productsCart.reduce((sum, item) => sum + item.price, 0));
  }, [productsCart]);

  const calculateChange = () => {
    setChange(totalPayment - totalCost);

    setCalculatedChange(getChange(totalPayment - totalCost, availableMoney));

    setTotalCost(0);
    setTotalPayment(0);

    console.log(getChange(totalPayment - totalCost, availableMoney));
    console.log(calculateChange);
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
        totalCost,
        change,
        calculateChange,
        calculatedChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
