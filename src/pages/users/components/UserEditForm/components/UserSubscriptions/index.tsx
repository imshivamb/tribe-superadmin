import { Grid, Typography } from "@mui/material";
import CustomProgress from "~/ui/shared/custom-progress";
import { CustomSwitch } from "~/ui/shared/form/custom-switch";

import { styles } from "./styles";
import { TUserSubscriptions } from "./types";

export const UserSubscriptions = ({
  subscriptions,
  subscriptionLoadings,
  onChange,
}: TUserSubscriptions) => {
  const isLoading =
    subscriptionLoadings.editLoading || subscriptionLoadings.getFetching;

  return (
    <Grid sx={styles.container}>
      {isLoading && (
        <Grid sx={styles.loading}>
          <CustomProgress />
        </Grid>
      )}
      <Typography sx={styles.label}>Subscriptions</Typography>
      <Grid sx={[styles.subscriptions, isLoading && styles.loadingContainer]}>
        {subscriptions.map((sub) => {
          return (
            <CustomSwitch
              key={sub.id}
              checked={sub.isActive}
              onChange={(e: any) => onChange(sub.id, e.target.checked)}
              name={sub.name}
              label={sub.name}
              withTick
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
