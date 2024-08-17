import { ReactNode } from "react";

export type TUserActionPopover = {
  anchorEl: ReactNode;
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  onOpen: (event: any) => void;
};
