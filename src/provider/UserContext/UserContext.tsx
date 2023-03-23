import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IresponseGetUser,
  IresponseLogin,
  IresponseRegister,
  IresponseUpdateUser,
  IUpdateUserFormValues,
  IUser,
  IUserContext,
} from "./@Types";

import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../../services/api";
import { shopContext } from "../ShopContext/ShopContext";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const localStorageUser = localStorage.getItem("@user");

  const { setTokenState } = useContext(shopContext);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>(
    localStorageUser ? JSON.parse(localStorageUser) : {}
  );
  // const [tokenState, setTokenState] = useState(false);
  let token = localStorage.getItem("@token");

  const registerUser = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IresponseRegister>("/users", formData);
      toast.success(`Usuario ${formData.name} cadastrado com sucesso `);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "Email already exists") {
          toast.error("Email já cadastrado, insira outro email");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const loginUser = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IresponseLogin>("/login", formData);
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@user", JSON.stringify(response.data.user));

      toast.success(`Bem vindo de volta ${response.data.user.name}`);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.data == "Incorrect password") {
          toast.error("Senha incorreta");
          console.log(error);
        } else if (error.response?.data == "Cannot find user") {
          toast.error("Email incorreto");
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (id: number) => {
    try {
      setLoading(true);
      const response = await api.get<IresponseGetUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const uptadeUser = async (formData: IUpdateUserFormValues, id: number) => {
    try {
      setLoading(true);
      const response = await api.patch<IresponseUpdateUser>(
        `/users/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOpen(false);
      setUser(response.data);
      toast.success(`Usuario ${user?.name} Editado com sucesso `);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      setLoading(true);
      const response = await api.delete<IresponseUpdateUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Usuario ${user?.name} deletado com sucesso `);
      setUser({
        id: 0,
        name: "empty",
        email: "empty",
        is_admin: false,
      });
      logoutUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    toast.success(`Até logo ${user?.name}!! `);
    localStorage.removeItem("@token");
    localStorage.removeItem("@user");
    setTokenState(false);
    navigate("/login");
    setUser({
      id: 0,
      name: "empty",
      email: "empty",
      is_admin: false,
    });
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        loading,
        setLoading,
        registerUser,
        loginUser,
        logoutUser,
        user,
        getUser,
        uptadeUser,
        deleteUser,
        open,
        setOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
