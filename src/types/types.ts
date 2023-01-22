export interface IProductItem {
  id: number;
  title: string;
  count: number;
  logo: string;
  price: number;
}

export type ProductsContextType = {
  productsList: IProductItem[];
  productsCart: IProductItem[];
  buyProduct: (product: IProductItem) => void;
  deleteProductFromCart: (id: number) => void;

  totalCost: number;
  totalPayment: number;

  provideMoney: (nominal: number) => void;
  calculateChange: () => void;
  change: number;
  calculatedChange: Record<number, number>;
};
