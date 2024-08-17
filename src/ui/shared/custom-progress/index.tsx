import { Box, CircularProgress } from "@mui/material";
import { CSSProperties } from "react";
import { PRIMARY } from "~/utils/colors";

const styles = {
  wrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiCircularProgress-root": {
      color: PRIMARY,
    },
  },
};

type TProps = {
  additionalSx?: CSSProperties;
};

const CustomProgress: React.FC<TProps> = ({ additionalSx = {} }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...additionalSx }}>
      <CircularProgress sx={{ ...styles, ...additionalSx }} />
    </Box>
  );
};

export default CustomProgress;
