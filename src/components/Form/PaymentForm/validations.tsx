import * as yup from "yup";

export const AdressFormSchema = yup.object().shape({
  endereco: yup.string().required("endereço obrigatorio"),
});
