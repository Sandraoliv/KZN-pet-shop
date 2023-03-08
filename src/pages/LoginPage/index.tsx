import { LoginForm } from "../../components/Form/LoginForm";
import { StyledLoginPage } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext/UserContext";
import block from "../../assets/Rectangle 33.svg";
import elipse1 from "../../assets/Ellipse 1.svg";
import elipse2 from "../../assets/Ellipse 2.svg";
import elipse3 from "../../assets/Ellipse 3.svg";
import elipse4 from "../../assets/Ellipse 1 (1).svg";
import elipse5 from "../../assets/Ellipse 2 (1).svg";
import elipse6 from "../../assets/Ellipse 3 (1).svg";
import animals from "../../assets/animais-domesticos-1024x654 1.svg";
import arrow from "../../assets/Frame 106.svg";
import { Header } from "../../components/Header/headerShop/headerShop";

export function LoginPage() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }
  return (
    <StyledLoginPage>
      <Header />
      <div className="mainContainer">
        <div className="containerDesktop">
          <p>
            A cada compra sua, <br />
            um Amiguinho nosso <br />
            recebe uma doação.
          </p>
          <div className="arrowContainer ">
            <img src={arrow} alt="imagem de seta" />
            <img className="imgDesktop" src={animals} alt="imagem de animais" />
          </div>
        </div>
        <img src={elipse1} alt="imagem elipse" className="elipse1" />
        <img src={elipse2} alt="imagem elipse" className="elipse2" />
        <img src={elipse3} alt="imagem elipse" className="elipse3" />

        <img src={elipse4} alt="" className="elipse4" />
        <img src={elipse5} alt="" className="elipse5" />

        <img src={elipse6} alt="" className="elipse6" />
        <div className="formContainer">
          <div className="blockAndTitle">
            <img className="rectangle" src={block} alt="" />
            <h2>Entrar</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </StyledLoginPage>
  );
}
