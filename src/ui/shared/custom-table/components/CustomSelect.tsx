import { MenuItem, Select, Typography } from "@mui/material";
import { CSSProperties } from "react";
import ExpandIcon from "~/assets/icons/expand-icon.svg?react";
import { styles } from "~/ui/shared/form/custom-select/styles";
import { TOption } from "~/ui/shared/form/types";

type Props = {
  label?: string | number;
  value: string | number;
  onChange: (val: number | string) => void;
  options: TOption[];
  selectSx?: CSSProperties;
  menuSx?: CSSProperties;
  menuItemSx?: CSSProperties;
  disabled?: boolean;
};

const CustomSelect: React.FC<Props> = ({
  options,
  label,
  value,
  onChange,
  selectSx = {},
  menuSx = {},
  menuItemSx = {},
  disabled = false,
}) => {
  return (
    <>
      {label && <Typography sx={styles.label}>{label}</Typography>}
      <Select
        value={!options?.length || !value ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ ...styles.select, ...selectSx }}
        MenuProps={{
          PaperProps: { sx: { ...styles.menu, ...menuSx } },
        }}
        IconComponent={ExpandIcon}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            value={option.value}
            sx={{ ...styles.menuItem, ...menuItemSx }}
            disableRipple
            tabIndex={1}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CustomSelect;
