import { Link } from "react-router-dom";
import logo from "../../../assets/KNZLOGO.svg";
import { GblHeader } from "./style";

export function GlobalHeader() {
  return (
    <GblHeader>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </GblHeader>
  );
}
