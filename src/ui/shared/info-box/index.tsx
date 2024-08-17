import { Grid, Typography, Button, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import WarningIcon from "~/assets/icons/warning-triangle-icon.svg?react";

import { styles } from "./styles";

type TProps = {
  message: string;
  actionLabel?: string;
  actionElem?: "link" | "button";
  to?: string;
  handleClick?: () => void;
};

const InfoBox: React.FC<TProps> = ({
  message,
  actionLabel = "",
  actionElem,
  to = "",
  handleClick,
}) => {
  return (
    <Grid sx={styles.container}>
      <WarningIcon />
      <Divider sx={styles.divider} orientation="vertical" flexItem />
      <Grid sx={styles.rightContent}>
        <Typography sx={styles.typo}>{message}</Typography>
        {actionElem &&
          actionLabel &&
          (actionElem === "button" ? (
            <Button sx={styles.btn} onClick={handleClick}>
              {actionLabel}
            </Button>
          ) : (
            <Link sx={styles.btn} component={RouterLink} to={to}>
              {actionLabel}
            </Link>
          ))}
      </Grid>
    </Grid>
  );
};

export default InfoBox;
