export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IresponseRegister {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IresponseLogin {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IresponseGetUser {
  id: string;
  name: string;
  email: string;
}

export interface IresponseUpdateUser {
  id: string;
  name: string;
  email: string;
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
  registerUser: (formData: IRegisterFormValues) => Promise<void>;
  loginUser: (formData: ILoginFormValues) => Promise<void>;
  logoutUser: () => void;
  getUser(id: number): Promise<void>;
  uptadeUser(formData: IUpdateUserFormValues, id: number): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
