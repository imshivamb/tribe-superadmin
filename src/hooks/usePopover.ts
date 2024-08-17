import { useState } from "react";

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

  const handleClose = () => setTimeout(() => setAnchorEl(null));

  const open = Boolean(anchorEl);

  return { handleOpen, handleClose, anchorEl, open };
};
