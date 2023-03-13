import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct, IProductProps } from "../../../provider/ShopContext/@Types";
import { Input } from "../Input/input";

import { modalProductFormSchema } from "./validations";
// import { styled } from "@mui/material/styles";
// import { orange, purple } from "@mui/material/colors";
// import Button, { ButtonProps } from "@mui/material/Button";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { Button } from "@mui/material";

export const UpdateProductForm = () => {
  const { currentProduct, uptadeProduct, closeModalADM } =
    useContext(shopContext);

  // const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[300]),
  //   backgroundColor: orange[500],
  //   "&:hover": {
  //     backgroundColor: orange[700],
  //   },
  // }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    defaultValues: {
      name: currentProduct?.name,
      price: currentProduct?.price,
      category: currentProduct?.category,
      img: currentProduct?.img,
    },
    mode: "onBlur",
    resolver: yupResolver(modalProductFormSchema),
  });

  const submit: SubmitHandler<IProduct> = (formdata) => {
    uptadeProduct(formdata);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="modalHeader">
        <h2> {currentProduct?.name}</h2>
        <span onClick={() => closeModalADM()}>X</span>
      </div>
      <Input
        label="Nome"
        type="text"
        register={register("name")}
        error={errors.name}
      />
      <Input
        label="Preço"
        type="number"
        register={register("price")}
        error={errors.price}
      />

      <Input
        label="Categoria"
        type="text"
        register={register("category")}
        error={errors.category}
      />

      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Categoria"
        color="warning"
      >
        <MenuItem value="Pix">Brinquedo</MenuItem>
        <MenuItem value="Cartão Credito">Coleiras</MenuItem>
        <MenuItem value="Cartão Debito">Produtos para Pet</MenuItem>
      </Select> */}

      <Input
        label="Imagem"
        type="text"
        register={register("img")}
        error={errors.img}
      />
      {/* <ColorButton type="submit" variant="contained">
        Cadastrar
      </ColorButton> */}

      <Button className="editar" type="submit">
        {" "}
        Editar
      </Button>
    </form>
  );
};
