import axios from "axios";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import { ICartContext, IDefaultProviderProps, IProduct } from "./@Types";

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IDefaultProviderProps) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productsListCart, setProductsListCart] = useState<IProduct[]>([]);
  const [productList, setProductList] = useState<IProduct[]>([]);

  // const navigate = useNavigate();

  async function loadProductList() {
    // let token = localStorage.getItem("@token");
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
