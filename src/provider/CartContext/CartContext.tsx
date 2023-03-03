import axios from "axios";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import {
  ICartContext,
  IDefaultProviderProps,
  IProductsListCart,
  IResponseProduct,
} from "./@Types";

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IDefaultProviderProps) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productsListCart, setProductsListCart] = useState<IProductsListCart[]>(
    []
  );

  // const navigate = useNavigate();

  const [productList, setProductList] = useState<IProductsListCart[]>([]);

  async function loadProductList() {
    let token = localStorage.getItem("@token");
    try {
      setLoading(true);
      const response = await api.get<IResponseProduct[]>("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductList(response.data);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "jwt expired") {
          toast.error("Seu token de acesso espirou, faça login novamente");
          localStorage.removeItem("@token");
          // navigate("/login");
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setModal(false);
  }

  function showModal() {
    setModal(true);
  }

  return (
    <CartContext.Provider
      value={{
        closeModal,
        modal,
        showModal,
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
