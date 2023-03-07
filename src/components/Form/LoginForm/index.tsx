import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./validations";
import { ILoginFormValues } from "../../../provider/UserContext/@Types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { StyledLoginForm } from "./styledLoginForm";
import { Input } from "../Input";
import { SubmitHandler } from "react-hook-form/dist/types/form";

export function LoginForm() {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(loginFormSchema) });

  //   function submit(formData: ILoginFormValues) {
  //     return loginUser(formData);
  //   }
  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    loginUser(formData);
  };

  function handleRegisterClick() {
    navigate("/register");
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        placeholder="Digite o seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite uma senha"
        register={register("password")}
        error={errors.password}
      />
      <div className="formButtons">
        <button type="submit" className="loginButton">
          Login
        </button>
        <button
          type="button"
          className="redirectButton"
          onClick={() => handleRegisterClick()}
        >
          Cadastre-se
        </button>
      </div>
    </StyledLoginForm>
  );
}
