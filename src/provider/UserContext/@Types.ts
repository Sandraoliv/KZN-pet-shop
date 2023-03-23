export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IresponseRegister {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface IresponseLogin {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  };
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}

export interface IresponseGetUser {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}

export interface IresponseUpdateUser {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}
export interface IUpdateUserFormValues {
  name: string;
  email: string;
  password: string;
}
export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IAdressFormValue {
  endereco: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  user: IUser;
  registerUser: (formData: IRegisterFormValues) => Promise<void>;
  loginUser: (formData: ILoginFormValues) => Promise<void>;
  logoutUser: () => void;
  getUser(id: number): Promise<void>;
  uptadeUser(formData: IUpdateUserFormValues, id: number): Promise<void>;
  deleteUser(id: number): Promise<void>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
