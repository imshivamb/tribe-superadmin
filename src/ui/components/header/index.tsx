import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo-long-dark.png";

import { AccountPopover } from "./components/account-popover";
import { styles } from "./styles";

export const Header = () => {
  return (
    <Grid component="header" sx={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
      </Link>
      <AccountPopover />
    </Grid>
  );
};
