import { Link } from "react-router-dom";
import logo from "../../../assets/KZpet_shop_Logo.svg";

export function globalHeader() {
  <header>
    <ul>
      <li>
        <img src={logo} alt="" />
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  </header>;
}
