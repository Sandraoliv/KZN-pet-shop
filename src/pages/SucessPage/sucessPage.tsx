import { SuccessHeader } from "../../components/Header/headerSuccess/headerScuccess";
import { StyledSucessPage } from "./style";
import catcart from "../../assets/catcart.svg";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function SucessPage() {
  const navigate = useNavigate();

  return (
    <StyledSucessPage>
      <SuccessHeader />
      <div className="content-flex-desktop">
        <div className="container-mensage">
          <p>Compra finalizada com sucesso </p>
        </div>
        <div className="container-image">
          <img src={catcart} alt="" />
        </div>
      </div>
      <div className="container-button">
        <Button onClick={() => navigate("/")} variant="contained">
          SHOP
        </Button>
      </div>
    </StyledSucessPage>
  );
}
