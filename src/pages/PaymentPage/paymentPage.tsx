import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import { PaymentForm } from "../../components/Form/PaymentForm";
import { GlobalHeader } from "../../components/Header/globalHeader/globalHeader";
import { StyledPayment, StyledSectionPayment } from "./styles";

export function PaymentPage() {
  return (
    <StyledPayment>
      <GlobalHeader />
      <BackgroundPages />
      <StyledSectionPayment>
        <PaymentForm />
      </StyledSectionPayment>
    </StyledPayment>
  );
}
