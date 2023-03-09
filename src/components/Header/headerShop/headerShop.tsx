import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { GrMenu } from "react-icons/gr";
import { StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { ModalCart } from "../../CartModal/cartModal";
import { CartContext } from "../../../provider/CartContext/CartContext";
import { RxExit } from "react-icons/rx";
import logo from "../../../assets/KNZLOGO.svg";
import { UserContext } from "../../../provider/UserContext/UserContext";

export function Header() {
  const [menu, setMenu] = useState(false);
  const { modal, setModal } = useContext(CartContext);
  const { logoutUser, user } = useContext(UserContext);
  let token = localStorage.getItem("@token");

  function menuHamburguer() {
    setMenu(!menu);
  }

  return (
    // rever
    <StyledHeader menu={menu} token={token}>
      <div className="navUp">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {token ? (
          <div className="nav">
            <h2>Olá {user?.name}! </h2>

            <RxExit onClick={() => logoutUser()} />
            <HiShoppingCart onClick={() => setModal(!modal)} />
          </div>
        ) : (
          <div className="nav">
            <Link className="login" to="/login">
              {" "}
              Login{" "}
            </Link>

            <Link className="register" to="/register">
              {" "}
              Cadastro{" "}
            </Link>

            <HiShoppingCart onClick={() => setModal(!modal)} />
          </div>
        )}

        <div className="navMenu">
          <GrMenu onClick={() => menuHamburguer()} />
        </div>
      </div>

      {token ? (
        <div className="navDown">
          <h2>Usuario logado </h2>

          <HiShoppingCart onClick={() => setModal(!modal)} />
          <RxExit onClick={() => logoutUser()} />
        </div>
      ) : (
        <div className="navDown">
          <Link className="login" to="/login">
            {" "}
            Login{" "}
          </Link>

          <Link className="register" to="/register">
            {" "}
            Cadastro{" "}
          </Link>

          <HiShoppingCart onClick={() => setModal(!modal)} />
        </div>
      )}

      {modal ? <ModalCart /> : null}
    </StyledHeader>
  );
}
