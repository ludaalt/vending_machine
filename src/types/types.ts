export interface IProductItem {
  id: number;
  title: string;
  count: number;
  logo: string;
  price: number;
}

export type ProductsContextType = {
  productsCart: IProductItem[];
  buyProduct: (product: IProductItem) => void;
  deleteProductFromCart: (id: number) => void;
  totalPayment: number;
  provideMoney: (nominal: number) => void;
  productsList: IProductItem[];
};
