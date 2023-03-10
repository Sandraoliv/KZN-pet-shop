import logo from "../../../assets/KNZLOGO.svg";
import { UsHeader } from "./style";
import Button from "@mui/material/Button";
import { RxExit } from "react-icons/rx";

export function UserHeader() {
  return (
    <UsHeader>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <Button type="submit" variant="contained">
              Shop
            </Button>
          </li>
          <li>
            <RxExit />
          </li>
        </ul>
      </nav>
    </UsHeader>
  );
}
