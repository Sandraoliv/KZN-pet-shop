import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { ObjectSchema, AnyObject } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { registerFormSchema } from "./validations";
import { IRegisterFormValues } from "../../../provider/UserContext/@Types";

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
    <form>
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
    </form>
  );
}
