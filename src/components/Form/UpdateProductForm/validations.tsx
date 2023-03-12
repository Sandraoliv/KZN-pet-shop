import * as yup from "yup";

export const modalProductFormSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  price: yup.number().required("Campo obrigatório!"),
  img: yup.string().url("Deve ser uma url"),
  category: yup.string().required("Campo obrigatório!"),
});
