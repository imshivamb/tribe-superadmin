import { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import FormContainer from "../components/FormContainer";

import VisibiltyIcon from "~/assets/icons/visibility-icon.svg?react";

import { TInputProps } from "../../types";
import { styles } from "../styles";

const PasswordInput: React.FC<TInputProps> = ({
  name,
  value,
  onChange,
  error,
  label,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((s) => !s);

  const endAdornment = (
    <InputAdornment position="end" sx={styles.inputAdornment}>
      <IconButton
        onClick={handleShowPassword}
        aria-label="toggle password visibility"
        className={showPassword ? "visible" : ""}
      >
        <VisibiltyIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormContainer error={error}>
      <FormControlLabel
        control={
          <OutlinedInput
            value={value}
            onChange={onChange}
            error={!!error}
            name={name}
            fullWidth
            sx={styles.outlinedInput}
            endAdornment={endAdornment}
            type={showPassword ? "string" : "password"}
            autoComplete="off"
            placeholder={placeholder}
          />
        }
        label={label}
        labelPlacement="top"
        sx={styles.formControl}
        className={!!error ? "is-error" : ""}
      />
    </FormContainer>
  );
};

export default PasswordInput;
