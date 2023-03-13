import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PaymentForm } from "../../components/Form/PaymentForm/paymentForm";
import { GlobalHeader } from "../../components/Header/globalHeader/globalHeader";
import { shopContext } from "../../provider/ShopContext/ShopContext";
import { StyledPayment, StyledSectionPayment } from "./styles";

export const PaymentPage = () => {
  const { setModal } = useContext(shopContext);

  const navigate = useNavigate();
  let token = localStorage.getItem("@token");

  useEffect(() => {
    if (token == undefined) {
      navigate("/login");
      toast.error("você deve estar logado para acessar está página");
    }
    setModal(false);
  }, []);
  return (
    <StyledPayment>
      <GlobalHeader />
      <BackgroundPages />
      <StyledSectionPayment>
        <PaymentForm />
      </StyledSectionPayment>
    </StyledPayment>
  );
};
