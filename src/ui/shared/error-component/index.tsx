import { Typography } from "@mui/material";
import { TYPO_4 } from "~/utils/typos";

const styles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...TYPO_4,
};

type TProps = {
  info?: string;
};

const ErrorComponent: React.FC<TProps> = ({ info }) => {
  return <Typography sx={styles}>{info || "Something went wrong"}</Typography>;
};

export default ErrorComponent;
