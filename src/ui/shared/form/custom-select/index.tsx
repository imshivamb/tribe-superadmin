import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import ExpandIcon from "~/assets/icons/expand-icon.svg?react";
import { styles as inputStyles } from "~/ui/shared/form/inputs/styles";

import { TFieldError, TOption } from "../types";
import { styles } from "./styles";

type Props = {
  error?: TFieldError;
  label?: string | number;
  value: string | number;
  placeholder?: string;
  onChange?: () => void;
  onAdditionalChange?: (e: SelectChangeEvent<string | number>) => void;
  options: TOption[];
  selectSx?: CSSProperties;
  menuSx?: CSSProperties;
  menuItemSx?: CSSProperties;
  disabledValues?: string[];
  disabled?: boolean;
};

const CustomSelect: React.FC<Props> = ({
  options,
  label,
  value,
  placeholder,
  onChange,
  onAdditionalChange,
  selectSx = {},
  menuSx = {},
  menuItemSx = {},
  error,
  disabledValues = [],
  disabled = false,
}) => {
  return (
    <Box sx={styles.wrapper}>
      {label && (
        <Typography sx={styles.label} className={error?.message ? "error" : ""}>
          {label}
        </Typography>
      )}
      <Select
        displayEmpty={true}
        value={value}
        onChange={onAdditionalChange || onChange}
        sx={{ ...styles.select, ...selectSx }}
        MenuProps={{
          PaperProps: { sx: { ...styles.menu, ...menuSx } },
        }}
        IconComponent={ExpandIcon}
        disabled={disabled}
      >
        {placeholder && (
          <MenuItem
            value={""}
            sx={{ ...styles.placeholderMenuItem, ...menuItemSx }}
            disableRipple
            disabled
          >
            Select {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.label}
            value={option.value}
            sx={{ ...styles.menuItem, ...menuItemSx }}
            disableRipple
            disabled={!!disabledValues?.includes(`${option.value}`)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error?.message && (
        <Typography sx={inputStyles.errorMessage}>{error?.message}</Typography>
      )}
    </Box>
  );
};

export default CustomSelect;
