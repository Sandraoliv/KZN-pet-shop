import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICompanye,
  IModalProductFormValues,
  IProduct,
} from "../../../provider/ShopContext/@Types";
import { Input } from "../Input";

import { modalAddCompanyeFormSchema } from "./validations";
import { styled } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import Button, { ButtonProps } from "@mui/material/Button";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { MenuItem, Select } from "@mui/material";

export function AddCompanyeForm() {
  // category: string
  const { addCompanye, closeModalADM } = useContext(shopContext);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[300]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICompanye>({
    mode: "onBlur",
    resolver: yupResolver(modalAddCompanyeFormSchema),
  });

  const submit: SubmitHandler<ICompanye> = (formdata) => {
    console.log(formdata);

    addCompanye(formdata);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="modalHeader">
        <h2>Nova Instituição</h2>
        <span onClick={() => closeModalADM()}>X</span>
      </div>

      <Input
        label="URL da compania"
        type="text"
        register={register("URL")}
        error={errors.URL}
      />

      <Input
        label="URL da Imagem"
        type="text"
        register={register("img")}
        error={errors.img}
      />

      <ColorButton type="submit" variant="contained">
        Cadastrar
      </ColorButton>
    </form>
  );
}
