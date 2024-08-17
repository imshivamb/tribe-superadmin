import { Popover } from "@mui/material";

import { styles as popoverWrapperStyles } from "./styles";

interface IProps {
  anchorEl: any;
  handleClose: () => void;
  children: any;
  open: boolean;
  customStyle?: any;
}

export const PopoverWrapper = ({
  anchorEl,
  handleClose,
  children,
  open,
  customStyle,
}: IProps) => {
  return (
    <Popover
      sx={[popoverWrapperStyles.popover, customStyle && customStyle]}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Popover>
  );
};
