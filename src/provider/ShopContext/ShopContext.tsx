import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IShopContext,
  IDefaultProviderProps,
  IProduct,
  ICompanye,
} from "./@Types";

export const shopContext = createContext({} as IShopContext);

export const ShopProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageCart = localStorage.getItem("@ListCart");
  const [modal, setModal] = useState(false);
  const [modalADM, setModalADM] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenState, setTokenState] = useState(false);
  const [productsListCart, setProductsListCart] = useState<IProduct[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [addProductState, setAddProductState] = useState(false);
  const [uptadeProductState, setUptadeProductState] = useState(false);
  const [deleteProductState, setDeleteProductState] = useState(false);
  const [addCompanyeState, setAddCompanyeState] = useState(false);

  const [companyes, setCompanyes] = useState<ICompanye[]>([]);
  const [currentProduct, setCurrentProduct] = useState<IProduct>({
    category: "Brinquedo",
    id: 0,
    name: "empty",
    price: 0,
    img: "empty",
  });
  const [coleiras, setColeiras] = useState<IProduct[]>([]);
  const [brinquedos, setBrinquedos] = useState<IProduct[]>([]);
  const [acessorios, setAcessorios] = useState<IProduct[]>([]);

  let token = localStorage.getItem("@token");
  const navigate = useNavigate();

  const loadProductList = async () => {
    try {
      setLoading(true);
      const response = await api.get<IProduct[]>("/products");
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (formData: IProduct) => {
    try {
      const response = await api.post<IProduct>("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.category === "Brinquedo") {
        setBrinquedos([...brinquedos, response.data]);
      } else if (response.data.category === "Coleiras") {
        setColeiras([...coleiras, response.data]);
      } else if (response.data.category === "Produtos para Pet") {
        setAcessorios([...acessorios, response.data]);
      }

      closeModalADM();
      toast.success(`Produto ${formData.name} cadastrado com sucesso `);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "jwt expired") {
          toast.error("Token expirado, por favor faça login novaminte ");
          navigate("/login");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  };

  const uptadeProduct = async (formData: IProduct) => {
    try {
      const response = await api.patch<IProduct>(
        `/products/${currentProduct?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.category == "Brinquedo") {
        const newArray = brinquedos.map((product) => {
          if (product.id == response.data.id) {
            return response.data;
          } else {
            return product;
          }
        });

        setBrinquedos(newArray);
      } else if (response.data.category == "Coleiras") {
        const newArray = coleiras.map((product) => {
          if (product.id == response.data.id) {
            return response.data;
          } else {
            return product;
          }
        });

        setColeiras(newArray);
      } else {
        const newArray = acessorios.map((product) => {
          if (product.id == response.data.id) {
            return response.data;
          } else {
            return product;
          }
        });

        setAcessorios(newArray);
      }
      closeModalADM();
      toast.success(`Produto ${response.data.name} Editado com sucesso `);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "jwt expired") {
          toast.error("Token expirado, por favor faça login novaminte ");
          navigate("/login");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  };

  const deleteProduct = async (id: number | undefined) => {
    try {
      const response = await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (currentProduct?.category == "Brinquedo") {
        const newArray = brinquedos.filter((product) => {
          if (product.id != id) {
            return product;
          } else {
            return null;
          }
        });

        setBrinquedos(newArray);
      } else if (currentProduct?.category == "Coleiras") {
        const newArray = coleiras.filter((product) => {
          if (product.id != id) {
            return product;
          } else {
            return null;
          }
        });

        setColeiras(newArray);
      } else {
        const newArray = acessorios.filter((product) => {
          if (product.id != id) {
            return product;
          } else {
            return null;
          }
        });

        setAcessorios(newArray);
      }
      closeModalADM();
      toast.success(`Produto ${currentProduct?.name} excluido com sucesso `);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "jwt expired") {
          toast.error("Token expirado, por favor faça login novaminte ");
          navigate("/login");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  };

  const addCompanye = async (formData: ICompanye) => {
    try {
      const response = await api.post<IProduct>("/companyes", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCompanyes([...companyes, formData]);
      closeModalADM();
      toast.success(`Instituição cadastrada com sucesso `);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "jwt expired") {
          toast.error("Token expirado, por favor faça login novaminte ");
          navigate("/login");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    }
  };

  const loadCompanyes = async () => {
    try {
      setLoading(true);
      const response = await api.get<ICompanye[]>("/companyes");
      setCompanyes(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const closeModalADM = () => {
    setAddProductState(false);
    setUptadeProductState(false);
    setDeleteProductState(false);
    setAddCompanyeState(false);
    setModalADM(false);
  };

  return (
    <shopContext.Provider
      value={{
        closeModalADM,
        addCompanyeState,
        setAddCompanyeState,
        deleteProductState,
        setDeleteProductState,
        uptadeProductState,
        setUptadeProductState,
        addProductState,
        setAddProductState,
        loadCompanyes,
        companyes,
        setCompanyes,
        addCompanye,
        tokenState,
        setTokenState,
        deleteProduct,
        currentProduct,
        setCurrentProduct,
        uptadeProduct,
        addProduct,
        coleiras,
        setColeiras,
        brinquedos,
        setBrinquedos,
        acessorios,
        setAcessorios,
        loading,
        handleModal,
        modal,
        setModal,
        modalADM,
        setModalADM,
        productsListCart,
        setProductsListCart,
        productList,
        setProductList,
        loadProductList,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};
