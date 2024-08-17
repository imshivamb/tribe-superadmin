import { FieldError } from "react-hook-form";

export type TFieldError = FieldError | undefined;

export type TInputProps = {
  name: string;
  value: string;
  onChange?: (e: any) => void;
  error?: TFieldError;
  label?: string;
  disabled?: boolean;
  placeholder: string;
  handleBtnClick?: () => void;
  btnLabel?: string;
  multiline?: boolean;
  type?: string;
};

export type TOption = {
  label: string | number;
  value: string | number;
};
