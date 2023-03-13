import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { registerFormSchema } from "./validations";
import { IRegisterFormValues } from "../../../provider/UserContext/@Types";
import { GlobalHeader } from "../../Header/globalHeader/globalHeader";
import imgFormRegister from "../../../assets/imgFormRegister.svg";
import { MainFormRegister, SectionFormRegister } from "./style";
import { Input } from "../Input";
import Button from "@mui/material/Button";
import { BackgroundPages } from "../../Background/BackgroundPages/backgroundPages";
import { Link } from "react-router-dom";

export function RegisterForm() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerFormSchema),
  });

  const submit: SubmitHandler<IRegisterFormValues> = (formdata) => {
    const newFormData = { ...formdata, is_admin: false };

    registerUser(newFormData);
  };

  return (
    <SectionFormRegister>
      <GlobalHeader />
      <BackgroundPages />
      <MainFormRegister>
        <img src={imgFormRegister} alt="" />
        <form onSubmit={handleSubmit(submit)}>
          <section className="titleForm">
            <div></div>
            <h3>Cadastre-se</h3>
          </section>
          <Input
            label="Nome"
            type="text"
            register={register("name")}
            error={errors.name}
          />
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
          <Input
            label="Confirmar senha"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />

          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
          <Button className='redirect' type="button" variant="contained">
            <Link to="/login"> Login </Link>
          </Button>
        </form>
      </MainFormRegister>
    </SectionFormRegister>
  );
}
