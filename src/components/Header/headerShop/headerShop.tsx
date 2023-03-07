import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { GrMenu } from "react-icons/gr";
import logo from "../../../assets/KZpet_shop_Logo.svg";
import { StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { ModalCart } from "../../CartModal/cartModal";
import { CartContext } from "../../../provider/CartContext/CartContext";

export function Header() {
  const [menu, setMenu] = useState(false);
  const { modal, setModal } = useContext(CartContext);

  function menuHamburguer() {
    setMenu(!menu);
  }

  return (
    // rever
    <StyledHeader setMenu={setMenu} menu={menu}>
      <div className="navUp">
        <div className="logo">
          {/* rever */}
          <img src={logo} alt="" />
        </div>

        <div className="nav">
          <Link className="login" to="/">
            {" "}
            Login{" "}
          </Link>

          <Link className="register" to="/register">
            {" "}
            Cadastro{" "}
          </Link>

          <HiShoppingCart onClick={() => setModal(!modal)} />
        </div>
        <div className="navMenu">
          <GrMenu onClick={() => menuHamburguer()} />
        </div>
      </div>

      <div className="navDown">
        <Link className="login" to="/">
          {" "}
          Login{" "}
        </Link>

        <Link className="register" to="/register">
          {" "}
          Cadastro{" "}
        </Link>

        <HiShoppingCart onClick={() => setModal(!modal)} />
      </div>

      {modal ? <ModalCart /> : null}
    </StyledHeader>
  );
}
