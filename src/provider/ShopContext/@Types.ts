export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IModalProductFormValues {
  name: string;
  price: number;
  img: string;
}

export interface IProductProps {
  product: IProduct;
}
export interface IProduct {
  name: string;
  category: "Brinquedo" | "Coleiras" | "Produtos para Pet";
  price: number;
  img: string;
  id: number;
}

export interface ICompanye {
  URL: string;
  img: string;
  id: number;
}

export interface IShopContext {
  addProductState: boolean;
  setAddProductState: React.Dispatch<React.SetStateAction<boolean>>;
  uptadeProductState: boolean;
  setUptadeProductState: React.Dispatch<React.SetStateAction<boolean>>;
  deleteProductState: boolean;
  setDeleteProductState: React.Dispatch<React.SetStateAction<boolean>>;
  addCompanyeState: boolean;
  setAddCompanyeState: React.Dispatch<React.SetStateAction<boolean>>;
  closeModalADM(): void;
  addCompanye(formData: ICompanye): Promise<void>;
  tokenState: boolean;
  setTokenState: React.Dispatch<React.SetStateAction<boolean>>;
  deleteProduct: (id: number | undefined) => Promise<void>;
  currentProduct: IProduct;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  uptadeProduct(formData: IProduct): Promise<void>;
  addProduct(formData: IProduct): Promise<void>;
  loading: boolean;
  handleModal(): void;
  modal: boolean;
  modalADM: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalADM: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsListCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  productsListCart: IProduct[];
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loadProductList(): Promise<void>;
  coleiras: IProduct[];
  companyes: ICompanye[];
  loadCompanyes(): Promise<void>;
  setCompanyes: React.Dispatch<React.SetStateAction<ICompanye[]>>;
  setColeiras: React.Dispatch<React.SetStateAction<IProduct[]>>;
  brinquedos: IProduct[];
  setBrinquedos: React.Dispatch<React.SetStateAction<IProduct[]>>;
  acessorios: IProduct[];
  setAcessorios: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
