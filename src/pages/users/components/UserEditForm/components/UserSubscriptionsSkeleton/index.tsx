import { Grid, Skeleton } from "@mui/material";

import { styles } from "./styles";

export const UserSubscriptionsSkeleton = () => {
  return (
    <Grid sx={styles.skeletonContainer}>
      <Skeleton variant="text" sx={styles.skeletonLabel} />
      <Grid sx={styles.skeletonWrapper}>
        {[1, 2, 3].map((index: number) => (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={styles.skeletonSubscription}
          />
        ))}
      </Grid>
    </Grid>
  );
};
