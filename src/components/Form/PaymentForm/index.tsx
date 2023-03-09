import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { StyledSpanFree } from "../../../pages/PaymentPage/styles";
import { CartContext } from "../../../provider/CartContext/CartContext";
import { InputPayment } from "./InputPayment";
import { StyledFormPayment } from "./style";
import { IAdressFormValue } from "../../../provider/UserContext/@Types";
import { AdressFormSchema } from "./validations";

export function PaymentForm() {
  const { productsListCart, setProductsListCart } = useContext(CartContext);
  const [endereco, setEndereco] = useState("");
  const [exibirFreteGratis, setExibirFreteGratis] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdressFormValue>({ resolver: yupResolver(AdressFormSchema) });
  function handleEnderecoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEndereco(event.target.value);

    if (event.target.value) {
      setExibirFreteGratis(true);
    } else {
      setExibirFreteGratis(false);
    }
  }
  const navigate = useNavigate();

  function submit() {
    setProductsListCart([]);
    navigate("/sucess");
  }

  let totalValue = 0;

  productsListCart.map((product) => (totalValue = totalValue + product.price));

  return (
    <StyledFormPayment onSubmit={handleSubmit(submit)}>
      <h3>FINALIZAR COMPRA</h3>
      <InputPayment
        placeholder="Digite seu endereço..."
        label="endereco"
        type="text"
        onChange={handleEnderecoChange}
        register={register("endereco")}
      />
      {exibirFreteGratis ? <StyledSpanFree>Frete Gratis</StyledSpanFree> : null}
      <label htmlFor="payment">Forma de pagamento:</label>
      <select id="payment" name="">
        <option value="pix">Pix</option>
        <option value="credito">Cartão Credito</option>
        <option value="debito">Cartão Debito</option>
      </select>
      <div className="Text-Total">
        <p>TOTAL:</p>
        <p>{totalValue}</p>
      </div>
      <div className="Text-Total">
        <p>TOTAL DOADO:</p>
        <p>{(totalValue * 10) / 100}</p>
      </div>
      <div className="button-container">
        <button type="submit">Finalizar compra</button>
      </div>
    </StyledFormPayment>
  );
}
