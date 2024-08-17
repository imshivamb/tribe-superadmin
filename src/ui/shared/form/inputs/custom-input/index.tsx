import FormContainer from "../components/FormContainer";
import { OutlinedInput, FormControlLabel } from "@mui/material";

import { TInputProps } from "../../types";
import { styles } from "../styles";

const CustomInput: React.FC<TInputProps> = ({
  value,
  disabled,
  onChange,
  error,
  label,
  name,
  placeholder,
  type = "text",
  multiline = false,
}) => {
  return (
    <FormContainer error={error}>
      <FormControlLabel
        control={
          <OutlinedInput
            disabled={disabled}
            value={value}
            onChange={onChange}
            error={!!error}
            name={name}
            fullWidth
            sx={styles.outlinedInput}
            autoComplete="off"
            placeholder={placeholder}
            multiline={multiline}
            minRows={3}
            maxRows={3}
            type={type}
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

export default CustomInput;
