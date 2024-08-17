import { IconButton } from "@mui/material";
import VerticalDotsIcon from "~/assets/icons/vertical-dots-icon.svg?react";
import { PopoverWrapper } from "~/ui/shared/popover-wrapper";

import { styles as popoverStyles } from "./styles";
import { TUserActionPopover } from "./types";

export const ActionPopover = ({
  open,
  anchorEl,
  children,
  onOpen,
  onClose,
}: TUserActionPopover) => {
  return (
    <>
      <IconButton sx={popoverStyles.iconBtn} onClick={onOpen}>
        <VerticalDotsIcon />
      </IconButton>
      <PopoverWrapper
        anchorEl={anchorEl}
        handleClose={onClose}
        open={open}
        customStyle={popoverStyles.popover}
      >
        {children}
      </PopoverWrapper>
    </>
  );
};
