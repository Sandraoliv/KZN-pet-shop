import { LoginForm } from "../../components/Form/LoginForm";
import { StyledLoginPage } from "./style";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext/UserContext";
import block from "../../assets/Rectangle 33.svg";
import animals from "../../assets/animais-domesticos-1024x654 1.svg";
import arrow from "../../assets/Frame 106.svg";

import { GlobalHeader } from "../../components/Header/globalHeader/globalHeader";

export function LoginPage() {
  const { loginUser } = useContext(UserContext);

  return (
    <>
      <GlobalHeader />
      <StyledLoginPage>
        <div className="mainContainer">
          <div className="containerDesktop">
            <img src={arrow} alt="imagem de seta" />
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
}
