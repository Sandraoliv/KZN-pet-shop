import { SuccessHeader } from "../../components/Header/headerSuccess/headerScuccess";
import { StyledSucessPage } from "./style";
import catcart from "../../assets/catcart.svg";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const SucessPage = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("@token");

  useEffect(() => {
    if (token == undefined) {
      navigate("/login");
      toast.error("você deve estar logado para acessar está página");
    }
  }, []);

  return (
    <div>
      <SuccessHeader />
      <StyledSucessPage>
        <BackgroundPages />
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
    </div>
  );
};
