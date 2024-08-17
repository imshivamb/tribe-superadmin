import { Box, Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "~/assets/icons/arrows/left-arrow-icon-l.svg?react";
import LogOutIcon from "~/assets/icons/log-out-icon.svg?react";
import { usePopover } from "~/hooks/usePopover";
import { UserService } from "~/redux/api/auth/auth.utils";
import { useAppDispatch } from "~/redux/hooks";
import { handleIsAuth } from "~/redux/slices/auth.slice";
import { PopoverWrapper } from "~/ui/shared/popover-wrapper";

import { styles } from "./styles";

export const AccountPopover = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { anchorEl, open, handleOpen, handleClose } = usePopover();

  const { email } = UserService.getUser();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(handleIsAuth(false));
    navigate("/sign-in");
  };

  return (
    <Box>
      <Button sx={styles.btn} disableRipple onClick={handleOpen}>
        {email}
        <Box
          sx={{
            ...styles.icon,
            ...(open ? styles.iconOpened : styles.iconClosed),
          }}
        >
          <ArrowIcon />
        </Box>
      </Button>
      <PopoverWrapper open={open} anchorEl={anchorEl} handleClose={handleClose}>
        <List sx={styles.list}>
          <ListItem sx={styles.listItem}>
            <Button
              tabIndex={1}
              sx={styles.link}
              disableRipple
              onClick={handleLogOut}
            >
              <LogOutIcon /> Sign Out
            </Button>
          </ListItem>
        </List>
      </PopoverWrapper>
    </Box>
  );
};
