import { PaymentForm } from "../../components/Form/PaymentForm";
import { StyledSectionPayment } from "./styles";

export function PaymentPage() {
  return (
    <>
      {/*Header*/}
      <StyledSectionPayment>
        <PaymentForm />
      </StyledSectionPayment>
    </>
  );
}
