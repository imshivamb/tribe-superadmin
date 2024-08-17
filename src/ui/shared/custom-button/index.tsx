import { Box, Button, CircularProgress } from "@mui/material";
import React, { CSSProperties } from "react";
import SelectedIcon from "~/assets/icons/selected-icon.svg?react";

import { styles } from "./styles";

type Props = {
  label: string;
  type?: "button" | "submit";
  handleClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  selected?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  additionalSx?: CSSProperties;
  className?: string;
};

const CustomButton: React.FC<Props> = ({
  label,
  type = "button",
  handleClick,
  fullWidth = false,
  disabled = false,
  outlined = false,
  endIcon,
  startIcon,
  additionalSx = {},
  selected = false,
  isLoading = false,
  className = "",
}) => {
  return (
    <Button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      sx={{ ...styles.button, ...additionalSx }}
      className={`${className} ${outlined ? "outlined" : ""} ${
        fullWidth ? "fullWidth" : ""
      } ${selected ? "selected" : ""}`}
      endIcon={selected ? <SelectedIcon /> : endIcon}
      startIcon={startIcon}
      disableTouchRipple
    >
      {isLoading ? (
        <Box sx={styles.progressWrapper}>
          <CircularProgress sx={styles.progress} size="24px" disableShrink />
        </Box>
      ) : (
        label
      )}
    </Button>
  );
};

export default CustomButton;
