import logo from "../../../assets/KNZLOGO.svg";
import { SccHeader } from "./style";

export function SuccessHeader() {
  return (
    <SccHeader>
      <img src={logo} alt="" />
    </SccHeader>
  );
}
