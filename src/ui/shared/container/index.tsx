import { Box } from "@mui/material";

import { styles } from "./styles";

type TProps = {
  additionalSx?: any;
  children: React.ReactNode | React.ReactNode[];
};

export const Container: React.FC<TProps> = ({
  children,
  additionalSx = {},
}) => {
  return <Box sx={{ ...styles, ...additionalSx }}>{children}</Box>;
};
