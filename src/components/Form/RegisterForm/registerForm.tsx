import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { registerFormSchema } from "./validations";
import { IRegisterFormValues } from "../../../provider/UserContext/@Types";
import { GlobalHeader } from "../../Header/globalHeader/globalHeader";
import imgFormRegister from "../../../assets/imgFormRegister.svg";

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
    registerUser(formdata);
  };

  return (
    <>
      <GlobalHeader />
      <main>
        <section>
          <p>Doe e salve a vida de um pet,todos juntos para salvar uma vida</p>
          <img src={imgFormRegister} alt="" />
        </section>
        <form>
          <div></div>
          <h3>Cadastre-se</h3>
          <input
            placeholder="Digite seu nome aqui"
            {...register("name")}
            type="text"
          />
          <span>{errors.name?.message}</span>

          <input
            placeholder="Digite seu email aqui"
            {...register("email")}
            type="email"
          />
          <span>{errors.email?.message}</span>

          <input
            placeholder="Digite seu email aqui"
            {...register("password")}
            type="password"
          />
          <span>{errors.password?.message}</span>

          <input
            placeholder="Digite seu email aqui"
            {...register("confirmPassword")}
            type="confirmPassword"
          />
          <span>{errors.confirmPassword?.message}</span>
        </form>
      </main>
    </>
  );
}
