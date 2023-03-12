import logo from "../../../assets/KNZLOGO.svg";
import { UsHeader } from "./style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import TocIcon from "@mui/icons-material/Toc";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserContext/UserContext";

export function UserHeader() {
  const { logoutUser } = useContext(UserContext);

  return (
    <UsHeader>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <Button className="shop" type="submit" variant="contained">
              Shop
            </Button>
          </li>
          <li>
            <IconButton className="icon" aria-label="add to shopping cart">
              <LogoutIcon onClick={() => logoutUser()} />
            </IconButton>
          </li>
        </ul>
        <TocIcon className="menuIcon" onClick={() => menuHamburguer()} />
      </nav>

      <nav>
        <ul>
          <li>
            <Button className="shop" type="submit" variant="contained">
              Shop
            </Button>
          </li>
          <li>
            <IconButton className="icon" aria-label="add to shopping cart">
              <LogoutIcon onClick={() => logoutUser()} />
            </IconButton>
          </li>
        </ul>
      </nav>
    </UsHeader>
  );
}
