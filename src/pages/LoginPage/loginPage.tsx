import { LoginForm } from "../../components/Form/LoginForm/loginForm";
import { StyledLoginPage } from "./style";
import block from "../../assets/Rectangle 33.svg";
import animals from "../../assets/animais-domesticos-1024x654 1.svg";
import arrow from "../../assets/Frame 106.svg";
import { GlobalHeader } from "../../components/Header/globalHeader/globalHeader";
import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginPage = () => {
  let token = localStorage.getItem("@token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token != undefined) {
      navigate("/");
      toast.error("Você já está logado em nosso site");
    }
  }, []);

  return (
    <>
      <GlobalHeader />
      <BackgroundPages />
      <StyledLoginPage>
        <div className="mainContainer">
          <div className="containerDesktop">
            <img src={arrow} alt="imagem de seta" className="arrow" />
            <div className="arrowContainer">
              <p className="imageText">
                A cada compra sua, <br />
                um Amiguinho nosso <br />
                recebe uma doação.
              </p>
              <img
                className="imgDesktop"
                src={animals}
                alt="imagem de animais"
              />
            </div>
          </div>

          <div className="formContainer">
            <div className="blockAndTitle">
              <img className="rectangle" src={block} alt="" />
              <h2>Entrar</h2>
            </div>
            <LoginForm />
          </div>
        </div>
      </StyledLoginPage>
    </>
  );
};
