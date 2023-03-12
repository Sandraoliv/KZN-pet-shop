import * as yup from "yup";

export const modalAddCompanyeFormSchema = yup.object().shape({
  URL: yup.string().required("Campo obrigatório!").url("Deve ser uma url"),
  img: yup.string().required("Campo obrigatório!").url("Deve ser uma url"),
});
