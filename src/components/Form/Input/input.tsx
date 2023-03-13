import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import TextField from "@mui/material/TextField";

interface IInput {
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  label: string;
}

export const Input = ({ label, type, register, error }: IInput) => (
  <TextField
    id="outlined-basic"
    variant="outlined"
    label={label}
    type={type}
    helperText={error?.message}
    color="warning"
    {...register}
  ></TextField>
);
// import { FieldError, UseFormRegisterReturn } from "react-hook-form";
// import TextField from "@mui/material/TextField";

// interface IInput {
//   type: string;
//   register: UseFormRegisterReturn<string>;
//   error?: FieldError | undefined;
//   label: string;
// }

// export const Input = ({ label, type, register, error }: IInput) => (
//   <TextField
//     id="outlined-basic"
//     variant="outlined"
//     label={label}
//     type={type}
//     helperText={error?.message}
//     color="warning"
//     {...register}
//   ></TextField>
// );
