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

  return (
    <StyledFormPayment>
      <h3>FINALIZAR COMPRA</h3>
      <InputPayment
        placeholder="Digite seu endereço..."
        label="Endereço"
        type="text"
      />
      <label htmlFor="payment">Forma de pagamento:</label>
      <select id="payment" name="">
        <option value="pix">Pix</option>
        <option value="credito">Cartão Credito</option>
        <option value="debito">Cartão Debito</option>
      </select>
      <div className="Text-Total">
        <p>TOTAL:</p>
        <p>R$00,00</p>
      </div>
      <div className="Text-Total">
        <p>TOTAL DOADO:</p>
        <p>R$00,00</p>
      </div>
      <div className="button-container">
        <button>Finalizar compra</button>
      </div>
    </StyledFormPayment>
  );
}
