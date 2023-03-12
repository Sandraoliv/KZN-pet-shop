import { ICompanye } from "../../provider/ShopContext/@Types";

interface ICompanyeProps {
  companye: ICompanye;
}

export function CompanyeCard({ companye }: ICompanyeProps) {
  return (
    <div>
      <a href={companye.URL} target={"_blank"}>
        <img src={companye.img} alt="" />
      </a>
    </div>
  );
}
