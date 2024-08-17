import { Button } from "@mui/material";
import EditUserIcon from "~/assets/icons/edit-icon.svg?react";
// import LoginAsUserIcon from "~/assets/icons/login-as-user-icon.svg?react";
import { usePopover } from "~/hooks/usePopover";
import { ActionPopover } from "~/ui/shared/action-popover";
import { styles as popoverStyles } from "~/ui/shared/action-popover/styles";

import { TUserActionPopover } from "./types";

export const UserActionPopover = ({ onEdit }: TUserActionPopover) => {
  const { anchorEl, open, handleOpen, handleClose } = usePopover();

  const handleEdit = () => {
    onEdit();
    handleClose();
  };

  // const handleLogin = () => {
  //   onLogin();
  //   handleClose();
  // };

  return (
    <ActionPopover
      open={open}
      anchorEl={anchorEl}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <Button
        sx={popoverStyles.actionBtn}
        startIcon={<EditUserIcon />}
        onClick={handleEdit}
      >
        edit user
      </Button>
      {/* <Button
        sx={popoverStyles.actionBtn}
        startIcon={<LoginAsUserIcon />}
        onClick={handleLogin}
      >
        login as user
      </Button> */}
    </ActionPopover>
  );
};
