export interface IProductItem {
  title: string;
  count: number;
  logo: string;
  price: number;
}

export type ProductsContextType = {
  productsCart: IProductItem[];
  buyProduct: (product: IProductItem) => void;
};
