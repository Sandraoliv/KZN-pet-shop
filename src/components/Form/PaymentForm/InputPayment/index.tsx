import { UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldsetPayment } from "./style";

interface IInput {
  placeholder: string;
  type: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegisterReturn<string>;
}

export function InputPayment({
  placeholder,
  type,
  label,
  register,
  onChange,
}: IInput) {
  return (
    <StyledFieldsetPayment>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        {...register}
        onChange={onChange}
      />
    </StyledFieldsetPayment>
  );
}
