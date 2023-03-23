import logo from "../../../assets/KNZLOGO.svg";
import { UsHeader } from "./style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import TocIcon from "@mui/icons-material/Toc";
import { useContext, useState } from "react";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { Link } from "react-router-dom";

export const UserHeader = () => {
  const { logoutUser } = useContext(UserContext);

  const [menu, setMenu] = useState(false);

  const menuHamburguer = () => {
    setMenu(!menu);
  };
  return (
    <UsHeader menu={menu}>
      <div className="navUp">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <TocIcon className="menuIcon" onClick={() => menuHamburguer()} />

        <nav className="nav">
          <ul>
            <li>
              <Button className="shop" type="submit" variant="contained">
                <Link to="/"> Shop </Link>
              </Button>
            </li>
            <li>
              <IconButton className="icon" aria-label="add to shopping cart">
                <LogoutIcon onClick={() => logoutUser()} />
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="navDown">
        <Button className="shop" type="submit" variant="contained">
          <Link to="/"> Shop </Link>
        </Button>

        <IconButton className="icon" aria-label="add to shopping cart">
          <LogoutIcon onClick={() => logoutUser()} />
        </IconButton>
      </nav>
    </UsHeader>
  );
};
