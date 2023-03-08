import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../provider/CartContext/CartContext";
import { InputPayment } from "./InputPayment";
import { StyledFormPayment } from "./style";

export function PaymentForm() {
  const { productsListCart, setProductsListCart } = useContext(CartContext);
  const navigate = useNavigate();
  function submit() {
    setProductsListCart([]);
    navigate("/");
  }

  let totalValue = 0;

  productsListCart.map((product) => (totalValue = totalValue + product.price));
  console.log(productsListCart);
  return (
    <StyledFormPayment>
      <h3>FINALIZAR COMPRA</h3>
      <InputPayment
        placeholder="Digite seu endereço..."
        label="Endereço"
        type="text"
      />
      {InputPayment.length > 0 ? <p>Frete Gratis</p> : null}
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
        <button onClick={() => submit()}>Finalizar compra</button>
      </div>
    </StyledFormPayment>
  );
}
