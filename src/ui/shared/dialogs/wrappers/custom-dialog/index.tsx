import { Dialog } from "@mui/material";
import { CSSProperties } from "react";

import { styles } from "../../styles";
import { TDialogProps } from "../../utils/types";

type Props = TDialogProps & {
  additionalPaperStyles?: CSSProperties;
  canClose?: boolean;
  children: React.ReactNode;
};

const CustomDialog: React.FC<Props> = ({
  open,
  handleClose,
  canClose = true,
  additionalPaperStyles = {},
  children,
}) => {
  return (
    <Dialog
      open={open}
      {...(canClose && { onClose: handleClose })}
      PaperProps={{
        sx: { ...styles.paper, ...additionalPaperStyles },
      }}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
