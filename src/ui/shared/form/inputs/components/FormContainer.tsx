import { Grid, Typography } from "@mui/material";

import { TFieldError } from "../../types";
import { styles } from "../styles";

type Props = {
  error: TFieldError;
  children: React.ReactNode;
};

const FormContainer: React.FC<Props> = ({ error, children }) => {
  return (
    <Grid sx={styles.container}>
      {children}
      {!!error && (
        <Typography sx={styles.errorMessage}>{error.message}</Typography>
      )}
    </Grid>
  );
};

export default FormContainer;
