import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { StyledSpanFree } from "../../../pages/PaymentPage/styles";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { InputPayment } from "./InputPayment";
import { StyledFormPayment } from "./style";
import { IAdressFormValue } from "../../../provider/UserContext/@Types";
import { AdressFormSchema } from "./validations";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export function PaymentForm() {
  const { productsListCart, setProductsListCart } = useContext(shopContext);
  const [endereco, setEndereco] = useState("");
  const [exibirFreteGratis, setExibirFreteGratis] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdressFormValue>({ resolver: yupResolver(AdressFormSchema) });

  const navigate = useNavigate();

  function submit() {
    setProductsListCart([]);
    navigate("/sucess");
    localStorage.removeItem("@ListCart");
  }

  let totalValue = 0;

  productsListCart.map((product) => (totalValue = totalValue + product.price));

  return (
    <StyledFormPayment onSubmit={handleSubmit(submit)}>
      <h3>FINALIZAR COMPRA</h3>
      <InputPayment
        label="endereco"
        type="text"
        register={register("endereco")}
        error={errors.endereco}
      />
      <div className="select-container">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" color="warning">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            color="warning"
          >
            <MenuItem value="Pix">Pix</MenuItem>
            <MenuItem value="Cartão Credito">Cartão Credito</MenuItem>
            <MenuItem value="Cartão Debito">Cartão Debito</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="Text-Total">
        <p>TOTAL:</p>
        <p>R$ {totalValue}</p>
      </div>
      <div className="Text-Total">
        <p>TOTAL DOADO:</p>
        <p>R$ {(totalValue * 30) / 100}</p>
      </div>
      <div className="button-container">
        <button type="submit">Finalizar compra</button>
      </div>
    </StyledFormPayment>
  );
}
