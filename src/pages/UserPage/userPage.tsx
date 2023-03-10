import { UserHeader } from "../../components/Header/userHeader/userHeader";
import { SectionUserPage } from "./style";
import Button from "@mui/material/Button";
import { RxExit } from "react-icons/rx";

export function UserPage() {
  return (
    <SectionUserPage>
      <UserHeader />
      <h1>Userpage</h1>
    </SectionUserPage>
  );
}
