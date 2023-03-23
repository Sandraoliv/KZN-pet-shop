import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./validations";
import { ILoginFormValues } from "../../../provider/UserContext/@Types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { StyledLoginForm } from "./styledLoginForm";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { Input } from "../Input/input";
import Button from "@mui/material/Button";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(loginFormSchema) });

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    loginUser(formData);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <div className="formButtons">
        <Button type="submit" variant="contained" className="loginButton">
          Login
        </Button>
        <Button
          type="button"
          className="redirectButton"
          onClick={() => handleRegisterClick()}
          variant="contained"
        >
          Cadastre-se
        </Button>
      </div>
    </StyledLoginForm>
  );
};
