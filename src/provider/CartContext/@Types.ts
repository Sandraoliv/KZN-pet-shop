export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IResponseProduct {
  name: string;
  category: "Brinqueros" | "Coleiras" | "Produtos para Pet";
  price: string;
  img: string;
  id?: number;
}

export interface IProductsListCart {
  name: string;
  category: "Brinqueros" | "Coleiras" | "Produtos para Pet";
  price: string;
  img: string;
  id?: number;
}
export interface ICartContext {
  closeModal: () => void;
  modal: boolean;
  showModal: () => void;
  setProductsListCart: React.Dispatch<
    React.SetStateAction<IProductsListCart[]>
  >;
  productsListCart: IProductsListCart[];
  productList: IProductsListCart[];
  setProductList: React.Dispatch<React.SetStateAction<IProductsListCart[]>>;
  loadProductList(): Promise<void>;
}
