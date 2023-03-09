import { createContext, useState } from "react";
import { api } from "../../services/api";
import { ICartContext, IDefaultProviderProps, IProduct } from "./@Types";

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IDefaultProviderProps) {
  const localStorageCart = localStorage.getItem("@ListCart");

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productsListCart, setProductsListCart] = useState<IProduct[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [productList, setProductList] = useState<IProduct[]>([]);

  async function loadProductList() {
    try {
      setLoading(true);
      const response = await api.get<IProduct[]>("/products");
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleModal() {
    setModal(!modal);
    console.log(modal);
  }

  return (
    <CartContext.Provider
      value={{
        loading,
        handleModal,
        modal,
        setModal,
        productsListCart,
        setProductsListCart,
        productList,
        setProductList,
        loadProductList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
