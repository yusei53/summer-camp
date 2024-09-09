import { SxProps, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof TextField> & {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
};

const CustomInput: React.FC<TProps> = ({
  id,
  label,
  value,
  type = "text",
  disabled,
  required,
  register,
  errors,
  onChange,
  sx,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      disabled={disabled}
      defaultValue={value || ""}
      {...register(id, { required })}
      error={!!errors[id]}
      helperText={errors[id]?.message}
      onChange={onChange}
      size="small"
      fullWidth
      sx={sx}
    />
  );
};

export default CustomInput;
