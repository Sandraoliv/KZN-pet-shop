import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface IInput {
  type: string;
  label: string;
  error?: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
}

export const InputPayment = ({ label, type, register, error }: IInput) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      type={type}
      helperText="Frete Gratis"
      color="warning"
      {...register}
    ></TextField>
  );
};
