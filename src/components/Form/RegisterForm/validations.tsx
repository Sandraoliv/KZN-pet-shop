import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório!")
    .min(3, "O nome precisa ter no mínimo 3 caracteres."),
  email: yup.string().required("Campo obrigatório!").email("Email inválido."),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
    .min(6, "É necessário pelo menos 6 caracteres."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não correspondem.")
    .required("Por favor, confirme sua senha."),
});
