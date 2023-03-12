import { Link } from "react-router-dom";
import logo from "../../../assets/KNZLOGO.svg";
import { GblHeader } from "./style";
import Button from "@mui/material/Button";

export function GlobalHeader() {
  return (
    <GblHeader>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <Button className="shop" variant="contained">
            <Link to="/"> Shop </Link>
          </Button>
        </li>
      </ul>
    </GblHeader>
  );
}
