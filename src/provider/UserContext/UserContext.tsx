import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
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

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IDefaultProviderProps) {
  // const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>();
  let token = localStorage.getItem("@token");

  async function registerUser(formData: IRegisterFormValues) {
    try {
      setLoading(true);
      const response = await api.post<IresponseRegister>("/users", formData);
      toast.success("Usuario cadastrado com sucesso ");
      // navigate("/login");
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
  }
  async function loginUser(formData: ILoginFormValues) {
    try {
      setLoading(true);
      const response = await api.post<IresponseLogin>("/login", formData);
      localStorage.setItem("@token", response.data.accessToken);

      setUser(response.data.user);
      // navigate("/shop");
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
  }

  async function getUser(id: number) {
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
  }

  async function uptadeUser(formData: IUpdateUserFormValues, id: number) {
    try {
      setLoading(true);
      const response = await api.post<IresponseUpdateUser>(
        `/users/"${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
      toast.success(`Usuario ${user?.name} Editado com sucesso `);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id: number) {
    try {
      setLoading(true);
      const response = await api.post<IresponseUpdateUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Usuario ${user?.name} deletado com sucesso `);
      setUser(undefined);
      logoutUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function logoutUser() {
    localStorage.removeItem("@token");
    // navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        registerUser,
        loginUser,
        logoutUser,
        getUser,
        uptadeUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
