import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { ModalCart } from "../../CartModal/cartModal";
import { shopContext } from "../../../provider/ShopContext/ShopContext";
import { RxExit } from "react-icons/rx";
import logo from "../../../assets/KNZLOGO.svg";
import { UserContext } from "../../../provider/UserContext/UserContext";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TocIcon from "@mui/icons-material/Toc";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header() {
  const [menu, setMenu] = useState(false);
  const { modal, setModal } = useContext(shopContext);
  const { logoutUser, user } = useContext(UserContext);

  let token = localStorage.getItem("@token");

  function menuHamburguer() {
    setMenu(!menu);
  }

  const navigate = useNavigate();

  return (
    <StyledHeader menu={menu}>
      <div className="navUp">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {token ? (
          <div className="nav">
            <h2>Olá {user?.name}! </h2>

            <IconButton className="icon" aria-label="add to shopping cart">
              <AccountCircleIcon onClick={() => navigate("/user")} />
            </IconButton>

            <IconButton className="icon" aria-label="add to shopping cart">
              <LogoutIcon onClick={() => logoutUser()} />
            </IconButton>

            <IconButton className="icon" aria-label="add to shopping cart">
              <AddShoppingCartIcon onClick={() => setModal(!modal)} />
            </IconButton>
          </div>
        ) : (
          <div className="nav">
            <Button className="login" variant="contained">
              <Link to="/login"> Login </Link>
            </Button>

            <Button className="register" variant="text">
              <Link className="registerLink" to="/register">
                {" "}
                Cadastro{" "}
              </Link>
            </Button>

            <IconButton className="icon" aria-label="add to shopping cart">
              <AddShoppingCartIcon onClick={() => setModal(!modal)} />
            </IconButton>
          </div>
        )}

        <div className="navMenu">
          <TocIcon className="menuIcon" onClick={() => menuHamburguer()} />
        </div>
      </div>

      {token ? (
        <div className="navDown">
          <h2>Olá {user?.name}! </h2>

          <IconButton className="icon" aria-label="add to shopping cart">
            <AccountCircleIcon onClick={() => navigate("/user")} />
          </IconButton>

          <IconButton className="icon" aria-label="add to shopping cart">
            <AddShoppingCartIcon onClick={() => setModal(!modal)} />
          </IconButton>

          <IconButton className="icon" aria-label="add to shopping cart">
            <LogoutIcon onClick={() => logoutUser()} />
          </IconButton>
        </div>
      ) : (
        <div className="navDown">
          <Button className="login" variant="contained">
            <Link to="/login"> Login </Link>
          </Button>

          <Button className="register" variant="text">
            <Link className="registerLink" to="/register">
              {" "}
              Cadastro{" "}
            </Link>
          </Button>

          <IconButton className="icon" aria-label="add to shopping cart">
            <AddShoppingCartIcon onClick={() => setModal(!modal)} />
          </IconButton>
        </div>
      )}

      {modal ? <ModalCart /> : null}
    </StyledHeader>
  );
}
