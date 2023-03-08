import { StyledFieldsetPayment } from "./style";

interface IInput {
  placeholder: string;
  type: string;
  label: string;
}

export function InputPayment({ placeholder, type, label }: IInput) {
  return (
    <StyledFieldsetPayment>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} placeholder={placeholder} />
    </StyledFieldsetPayment>
  );
}
