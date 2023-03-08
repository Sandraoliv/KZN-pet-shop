import { LoginForm } from "../../components/Form/LoginForm";
import { StyledLoginForm } from "../../components/Form/LoginForm/styledLoginForm";
import { StyledLoginPage } from "./style";
import block from "../../assets/Rectangle 33.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext/UserContext";

export function LoginPage() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }
  return (
    <StyledLoginPage>
      {/* <header>
        <h2>logo</h2>
        <button className="shopButton" onClick={redirect}>
          Shop
        </button>
      </header> */}

      {/* <div className="container"> */}
      {/* <img src={dog} alt="imagem de cachorro" /> */}
      {/* <p>
            A cada compra sua, <br />
            um Amiguinho nosso <br />
            recebe uma doação.
          </p> */}
      {/* </div> */}
      {/* <div className="containerDesktop"> */}
      <img className="imgDesktop" src="animals" alt="imagem de animais" />
      <div className="formContainer">
        <div className="blockAndTitle">
          <img className="rectangle" src={block} alt="" />
          <h2>Entrar</h2>
        </div>
        <LoginForm />
      </div>
      {/* </div> */}
    </StyledLoginPage>
  );
}
