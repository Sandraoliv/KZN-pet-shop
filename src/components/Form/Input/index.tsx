import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";

interface IInput {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  label: string;
}

export const Input = ({
  placeholder,
  label,
  type,
  register,
  error,
}: IInput) => (
  <StyledFieldset>
    <label htmlFor={label}>{label}</label>
    <input id={label} placeholder={placeholder} type={type} {...register} />
    <div>{error ? <p className="errors">{error.message}</p> : null}</div>
  </StyledFieldset>
);
